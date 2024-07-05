import { useSearchQueryStore } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './header.module.css';

const SearchInput = () => {
    const { searchQuery, actions } = useSearchQueryStore();

    return (
        <div style={{ position: 'relative' }}>
            <Input
                name="search-repo-input"
                onChange={(e) => actions.setSearchQuery(e.target.value)}
                placeholder="Type to search"
                value={searchQuery}
            />
            {!!searchQuery && (
                <Button variant="ghost" className={styles.ClearInputBtn} onClick={() => actions.setSearchQuery('')}>
                    &#10006;
                </Button>
            )}
        </div>
    );
};

const BackBtn = () => {
    return (
        <Link to="/">
            <Button className={styles.BackBtn} variant="ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </svg>
            </Button>
        </Link>
    );
};

export const Header = () => {
    const { pathname } = useLocation();

    const isHomePage = useMemo(() => pathname === '/', [pathname]);

    return (
        <header className={isHomePage ? styles.isHomePage : ''}>{isHomePage ? <SearchInput /> : <BackBtn />}</header>
    );
};
