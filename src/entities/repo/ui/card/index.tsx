import { Repository } from '@/shared/api';
import { Button } from '@/shared/ui/button';
import { ArrowRight } from '@/shared/ui/icons';
import { StarIcon } from '@/shared/ui/icons';
import { Link } from 'react-router-dom';

import { formatDate } from '../../model';
import styles from './repo-card.module.css';

export const RepoCard = ({ id, stargazerCount, nameWithOwner, url, defaultBranchRef }: Repository) => {
    // @ts-expect-error Code Generation Issue
    const lastCommitDate = defaultBranchRef?.target?.history.edges[0].node.committedDate;
    const formatted = formatDate(lastCommitDate);
    return (
        <article className={styles.card}>
            <div className={styles.info}>
                <div className={styles.cardHeader}>
                    <div className={styles.stars}>
                        <StarIcon className={styles.starIcon} />
                        <span>{stargazerCount}</span>
                    </div>
                    <a href={url} target="_blank" className={styles.repoLink}>
                        {nameWithOwner.split('/').join(' / ')}
                    </a>
                </div>
                <div className={styles.date}>
                    {formatted !== null ? (
                        <>
                            Last Commit at <span>{formatted}</span>
                        </>
                    ) : (
                        <>No commits yet</>
                    )}
                </div>
            </div>
            <Link to={`/repo/${id}`} className={styles.link}>
                <Button className={styles.button}>
                    Show Repository Card
                    <span>
                        <ArrowRight />
                    </span>
                </Button>
            </Link>
        </article>
    );
};
