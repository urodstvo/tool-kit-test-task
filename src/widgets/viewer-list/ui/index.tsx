import { RepoCard } from '@/entities/repo';
import { useViewerRepoQuery } from '@/features/repo-search';
import { Repository } from '@/shared/api';
import { useSearchQueryStore } from '@/shared/store';
import { Paginator } from '@/shared/ui/paginator';
import { useEffect, useRef, useState } from 'react';

import styles from './viewer-list.module.css';

export const ViewerList = () => {
    const query = useSearchQueryStore((state) => state.query);
    const page = useSearchQueryStore((state) => state.page);
    const cursor = useSearchQueryStore((state) => state.cursor);
    const repos = useSearchQueryStore((state) => state.repos);
    const total = useSearchQueryStore((state) => state.total);
    const actions = useSearchQueryStore((state) => state.actions);

    const [vars, setVars] = useState<object>({});

    const viewerQuery = useViewerRepoQuery({
        variables: { first: 50, ...vars },
        skip: query !== '',
    });

    const pageWithRequest = useRef(page - (page % 5));

    useEffect(() => {
        if (!viewerQuery.previousData && repos.length > 0) return;
        if (!viewerQuery.data) return;

        actions.setRepos((viewerQuery.data.viewer.repositories.nodes as Repository[]) || []);
        actions.setCursor(
            viewerQuery.data.viewer.repositories.pageInfo.startCursor,
            viewerQuery.data?.viewer.repositories.pageInfo.endCursor,
        );

        actions.setTotal(Math.ceil((viewerQuery.data?.viewer.repositories.totalCount || 0) / 10));
    }, [viewerQuery.data, viewerQuery.previousData, repos]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (page === 0) setVars({});
        const diff = page - pageWithRequest.current;
        if (diff < 5 && diff >= 0) return;
        if (cursor === undefined) return;

        if (diff >= 5)
            setVars((prev) => ({
                ...prev,
                after: cursor?.end,
                first: 50,
                last: null,
                before: null,
            }));
        else if (diff < 0)
            setVars((prev) => ({
                ...prev,
                before: cursor?.start,
                last: 50,
                after: null,
                first: null,
            }));

        pageWithRequest.current += 5 * (diff / Math.abs(diff));
    }, [page, cursor]);

    return (
        <section className={styles.section}>
            <div className={styles.listHeader}>
                <h1>Repository List </h1>
                <p>Repositories found: {viewerQuery.data?.viewer.repositories.totalCount}</p>
            </div>
            {viewerQuery.loading && !viewerQuery.data && <div>Loading...</div>}
            {viewerQuery.error && <div>Error</div>}
            {repos.length > 0 && !viewerQuery.loading && (
                <ul className={styles.list}>
                    {repos.slice((page * 10) % 50, ((page * 10) % 50) + 10).map((repo) => (
                        <li key={repo.id}>
                            <RepoCard {...repo} />
                        </li>
                    ))}
                </ul>
            )}
            <Paginator
                total={total}
                disabled={viewerQuery.loading}
                value={page}
                onChange={(value) => actions.setPage(value)}
            />
        </section>
    );
};
