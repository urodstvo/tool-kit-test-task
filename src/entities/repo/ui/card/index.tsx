import { Repository } from '@/shared/api';
import { Button } from '@/shared/ui/button';
import { ArrowRight } from '@/shared/ui/icons';
import { StarIcon } from '@/shared/ui/icons/star';
import { Link } from 'react-router-dom';

import { formatDate } from '../../model';
import styles from './repo-card.module.css';

export const RepoCard = ({ id, stargazerCount, nameWithOwner, url, defaultBranchRef }: Repository) => {
    // @ts-ignore
    const lastCommitDate = defaultBranchRef?.target?.history.edges[0].node.committedDate;

    return (
        <article className={styles.card}>
            <a href={url} target="_blank" className={styles.repoLink}>
                {nameWithOwner.split('/').join(' / ')}
            </a>
            <div className={styles.stars}>
                <span>{stargazerCount}</span>
                <StarIcon className={styles.starIcon} />
            </div>
            <div className={styles.date}>
                Last Commit at <span>{formatDate(lastCommitDate)}</span>
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
