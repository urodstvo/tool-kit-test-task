import { ErrorPage } from '@/widgets/error';
import { Header } from '@/widgets/header';
import { Outlet, useRoutes } from 'react-router-dom';

import HomePage from './home';
import RepoPage from './repo';

export const Router = () => {
    const router = useRoutes([
        {
            path: '/',
            element: (
                <>
                    <Header />
                    <Outlet />
                </>
            ),
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: 'repo/:id',
                    element: <RepoPage />,
                },
            ],
        },
    ]);

    return router;
};
