import { useSearchQueryStore } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import styles from './search.module.css';

export const RepoSearch = () => {
    const query = useSearchQueryStore((state) => state.query);
    const actions = useSearchQueryStore((state) => state.actions);

    return (
        <div style={{ position: 'relative' }}>
            <Input
                name="search-repo-input"
                onChange={(e) => actions.setQuery(e.target.value)}
                placeholder="Type to search"
                value={query}
            />
            {!!query && (
                <Button variant="ghost" className={styles.ClearInputBtn} onClick={() => actions.setQuery('')}>
                    &#10006;
                </Button>
            )}
        </div>
    );
};
