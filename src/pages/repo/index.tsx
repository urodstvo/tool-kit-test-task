import { formatDate } from '@/entities/repo';
import { useRepoIdSearchQuery } from '@/features/repo-search';
import { useTitle } from '@/shared/lib/browser';
import { StarIcon } from '@/shared/ui/icons';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import styles from './repo-page.module.css';

const Error = () => {
    return <p style={{ textAlign: 'center' }}>An error occurred while retrieving repository data.</p>;
};

export default function Repo() {
    const { id } = useParams();

    const repoQuery = useRepoIdSearchQuery({
        variables: { id: id as string },
    });

    const { data, lastCommitDate } = useMemo(() => {
        const data = repoQuery.data?.node?.__typename === 'Repository' ? repoQuery.data.node : null;
        const lastCommitDate =
            repoQuery.data?.node?.__typename === 'Repository' &&
            repoQuery.data.node.defaultBranchRef?.target?.__typename === 'Commit' &&
            repoQuery.data.node.defaultBranchRef.target.history.__typename === 'CommitHistoryConnection' &&
            repoQuery.data.node.defaultBranchRef.target.history.edges?.at(0)?.node?.committedDate;

        return {
            data,
            lastCommitDate,
        };
    }, [repoQuery.data]);

    useTitle(`${data?.name} - Search GitHub Repositories`);

    if (repoQuery.loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;

    if (repoQuery.error) return <Error />;
    return (
        <section className={styles.section}>
            <div className={styles.ownerInfo}>
                <div>
                    <img src={data?.owner.avatarUrl} />
                </div>
                <a href={data?.owner.url} target="_blank">
                    {data?.owner.login}
                </a>
            </div>
            <div className={styles.repoInfo}>
                <h1>
                    <a href={data?.url} target="_blank">
                        {data?.name}
                    </a>
                </h1>
                <div className={styles.repoExtra}>
                    <span className={styles.stars}>
                        {data?.stargazerCount}
                        <StarIcon />
                    </span>
                    <span className={styles.date}>{formatDate(lastCommitDate)}</span>
                </div>
                <div className={styles.description}>
                    <p>{data?.description}</p>
                </div>
                <ul className={styles.languages}>
                    {data?.languages?.nodes?.map(
                        (language) =>
                            language && (
                                <li
                                    key={language.id}
                                    className={styles.language}
                                    style={{ borderColor: language.color as string }}
                                >
                                    {language.name}
                                </li>
                            ),
                    )}
                </ul>
            </div>
        </section>
    );
}
