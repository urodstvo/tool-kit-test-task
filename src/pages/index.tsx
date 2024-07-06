import { Header } from '@/widgets/header';
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('./home'));
const RepoPage = lazy(() => import('./repo'));

const Layout = () => (
    <>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
