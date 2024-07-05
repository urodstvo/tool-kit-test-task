import { forwardRef, useEffect, useMemo, useState } from 'react';

import { ArrowLeft, ArrowLeftWithLine } from './arrow-left';
import { ArrowRight, ArrowRightWithLine } from './arrow-right';
import styles from './paginator.module.css';

type PaginatorProps = {
    onChange?: (currentPage: number) => void;
    defaultValue?: number;
    total: number;
    className?: string;
};

/**
 * @ui Paginator компонент
 */
export const Paginator = forwardRef<HTMLDivElement, PaginatorProps>(
    ({ defaultValue = 0, onChange, total, className }: PaginatorProps, ref) => {
        const [page, setPage] = useState<number>(defaultValue - 1);
        const isTotalGreaterThan5 = useMemo(() => total > 5, [total]);

        const [displayedArray, setDisplayedArray] = useState<Array<number | '...'>>([1, 2, 3, 4, 5]);

        useEffect(() => {
            if (page + 1 > total) {
                throw new Error(`Page ${page + 1} is not exist`);
            }

            if (isTotalGreaterThan5) {
                const arr = new Array(7);
                const dots = '...';

                switch (page) {
                    case 0:
                        arr.push(1, 2, 3, dots, total);
                        break;
                    case 1:
                    case 2:
                        arr.push(1, 2, 3, 4, dots, total);
                        break;
                    case total - 1:
                        arr.push(1, dots, total - 2, total - 1, total);
                        break;
                    case total - 2:
                    case total - 3:
                        arr.push(1, dots, total - 3, total - 2, total - 1, total);
                        break;
                    default:
                        arr.push(1, dots, page, page + 1, page + 2, dots, total);
                        break;
                }

                setDisplayedArray(arr);
            }

            if (onChange) onChange(page);
        }, [page, total, isTotalGreaterThan5]);

        return (
            <div ref={ref} className={[styles.paginator, className].join(' ')}>
                {isTotalGreaterThan5 && (
                    <>
                        <button className={styles.button} onClick={() => setPage(0)} disabled={page === 0}>
                            <ArrowLeftWithLine />
                        </button>
                        <button
                            disabled={page === 0}
                            className={styles.button}
                            onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : prev))}
                        >
                            <ArrowLeft />
                        </button>
                    </>
                )}
                {displayedArray.map((value, index) => {
                    if (value === '...')
                        return (
                            <span className={styles.dots} key={'...' + index}>
                                ...
                            </span>
                        );
                    else
                        return (
                            <button
                                className={[styles.button, page === value - 1 && styles.active].join(' ')}
                                key={value}
                                onClick={() => setPage(value - 1)}
                            >
                                {value}
                            </button>
                        );
                })}
                {isTotalGreaterThan5 && (
                    <>
                        <button
                            className={styles.button}
                            onClick={() => setPage((prev) => (prev < total ? prev + 1 : prev))}
                            disabled={page === total - 1}
                        >
                            <ArrowRight />
                        </button>
                        <button
                            className={styles.button}
                            onClick={() => setPage(total - 1)}
                            disabled={page === total - 1}
                        >
                            <ArrowRightWithLine />
                        </button>
                    </>
                )}
            </div>
        );
    },
);
