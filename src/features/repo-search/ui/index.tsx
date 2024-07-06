import { useSearchQueryStore } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import debounce from 'lodash.debounce';
import { useEffect, useMemo, useRef } from 'react';

import styles from './search.module.css';

export const RepoSearch = () => {
    const query = useSearchQueryStore((state) => state.query);
    const actions = useSearchQueryStore((state) => state.actions);
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const debouncedSetQuery = useMemo(
        () => debounce((e: React.ChangeEvent<HTMLInputElement>) => actions.setQuery(e.target.value), 300),
        [actions],
    );

    useEffect(() => {
        const input = inputRef.current as HTMLInputElement;
        const button = buttonRef.current as HTMLButtonElement;

        const handlerClick = () => {
            input.value = '';
            actions.setQuery('');
        };

        button.addEventListener('click', handlerClick);
        return () => button.removeEventListener('click', handlerClick);
    }, [actions]);

    return (
        <div style={{ position: 'relative' }}>
            <Input
                name="search-repo-input"
                aria-label="Search Repositories"
                onChange={debouncedSetQuery}
                placeholder="Search Repositories"
                defaultValue={query}
                ref={inputRef}
            />
            <Button
                variant="ghost"
                className={styles.ClearInputBtn}
                ref={buttonRef}
                style={{ display: query.length > 0 ? 'block' : 'none' }}
            >
                &#10006;
            </Button>
        </div>
    );
};
