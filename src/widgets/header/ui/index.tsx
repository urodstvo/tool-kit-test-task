import { RepoSearch } from '@/features/repo-search';
import { Button } from '@/shared/ui/button';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './header.module.css';

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

    return <header className={isHomePage ? styles.isHomePage : ''}>{isHomePage ? <RepoSearch /> : <BackBtn />}</header>;
};
