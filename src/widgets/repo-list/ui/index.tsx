import { RepoCard } from '@/entities/repo';
import { RepoSearchQueryVariables, useRepoSearchQuery } from '@/features/repo-search';
import { Repository } from '@/shared/api';
import { useSearchQueryStore } from '@/shared/store';
import { useEffect, useRef, useState } from 'react';

import { Paginator } from './paginator';
import styles from './repo-list.module.css';

export const RepoList = () => {
    const query = useSearchQueryStore((state) => state.query);
    const page = useSearchQueryStore((state) => state.page);
    const cursor = useSearchQueryStore((state) => state.cursor);
    const repos = useSearchQueryStore((state) => state.repos);
    const total = useSearchQueryStore((state) => state.total);
    const actions = useSearchQueryStore((state) => state.actions);

    const [vars, setVars] = useState<RepoSearchQueryVariables | {}>({});

    const pageWithRequest = useRef(page - (page % 5));

    const searchQuery = useRepoSearchQuery({
        variables: { query, first: 50, ...vars },
        skip: query === '',
        notifyOnNetworkStatusChange: true,
    });

    // console.log('@vars', vars);
    // console.log('@page', page);
    // console.log('@pageRequest', pageWithRequest);
    // console.log('@repos', repos);
    // console.log('@cursor', cursor);
    // console.log('@totalPages', total);
    // console.log('@query', query);

    useEffect(() => {
        if (!searchQuery.previousData) return;
        if (!searchQuery.data) return;

        actions.setRepos(searchQuery.data.search.edges?.map((edge) => edge?.node as Repository) || []);
        actions.setCursor(searchQuery.data.search.pageInfo.startCursor, searchQuery.data?.search.pageInfo.endCursor);

        actions.setTotal(Math.ceil((searchQuery.data?.search.repositoryCount || 0) / 10));
    }, [searchQuery.data, searchQuery.previousData]);

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
            <h1>RepoList</h1>
            {searchQuery.loading && !searchQuery.data && <div>Loading...</div>}
            {searchQuery.error && <div>Error</div>}
            {!!repos.length && !!query.length && !searchQuery.loading && (
                <ul className={styles.list}>
                    {repos.slice((page * 10) % 50, ((page * 10) % 50) + 10).map((repo) => (
                        <li key={repo.id}>
                            <RepoCard id={repo.nameWithOwner} />
                        </li>
                    ))}
                </ul>
            )}
            <Paginator
                total={total}
                disabled={searchQuery.loading}
                value={page}
                onChange={(value) => actions.setPage(value)}
            />
        </section>
    );
};
