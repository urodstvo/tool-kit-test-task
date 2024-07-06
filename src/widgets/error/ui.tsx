import { Button } from '@/shared/ui/button';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

import styles from './error.module.css';

export const ErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <main className={styles.error}>
                <h1>PAGE NOT FOUND</h1>
                <Link to={'/'}>
                    <Button variant="ghost" className={styles.button} tabIndex={-1}>
                        Go Home Page
                    </Button>
                </Link>
            </main>
        );
    }
};
