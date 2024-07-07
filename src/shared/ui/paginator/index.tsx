import { ArrowLeft } from '@/shared/ui/icons';
import { ArrowRight } from '@/shared/ui/icons';
import { useEffect, useState } from 'react';

import styles from './paginator.module.css';

type PaginatorProps = {
    value: number;
    onChange?: (value: number) => void;
    total: number;
    disabled?: boolean;
    showWithOnePage?: boolean;
};

const getPaginationArray = (page: number, total: number) => {
    const arr: Array<number | '...'> = [];
    const dots = '...';

    if (total > 5) {
        if (page < 3) {
            arr.push(1, ...new Array(page + 2).fill(0).map((_, i) => i + 2), dots);
        } else if (page >= total - 3) {
            arr.push(dots, ...new Array(total - page + 1).fill(0).map((_, i) => page + i - 1), total);
        } else arr.push(dots, page - 1, page, page + 1, page + 2, page + 3, dots);
    } else {
        arr.push(...(new Array(total).fill(0).map((_, i) => i + 1) as Array<number>));
    }

    return arr;
};

export const Paginator = ({ total, value, onChange, disabled, showWithOnePage }: PaginatorProps) => {
    const [page, setPage] = useState<number>(value);
    const [displayedArray, setDisplayedArray] = useState<Array<number | '...'>>([]);

    useEffect(() => {
        setDisplayedArray(getPaginationArray(page, total));
    }, [page, total]);

    useEffect(() => {
        if (onChange) onChange(page);
    }, [page, onChange]);

    useEffect(() => {
        setPage(value);
    }, [value]);

    return (
        <div className={styles.paginator} aria-label="paginator">
            {((showWithOnePage && total < 2) || total > 1) && (
                <>
                    {total > 5 && (
                        <button
                            disabled={page === 0 || disabled}
                            className={[styles.button, styles.arrow].join(' ')}
                            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
                        >
                            <ArrowLeft />
                        </button>
                    )}
                    {displayedArray.map((number, index) => {
                        if (number === '...')
                            return (
                                <span className={styles.dots} key={'...' + index}>
                                    ...
                                </span>
                            );
                        else
                            return (
                                <button
                                    className={[styles.button, number === page + 1 ? styles.active : ''].join(' ')}
                                    key={number}
                                    onClick={() => setPage(number - 1)}
                                    disabled={disabled}
                                >
                                    {number}
                                </button>
                            );
                    })}
                    {total > 5 && (
                        <button
                            className={[styles.button, styles.arrow].join(' ')}
                            onClick={() => setPage((prev) => (prev < total ? prev + 1 : prev))}
                            disabled={page === total - 1 || disabled}
                        >
                            <ArrowRight />
                        </button>
                    )}
                </>
            )}
        </div>
    );
};
