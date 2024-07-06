import { router } from '@/pages';
import { RouterProvider } from 'react-router-dom';

import { WithProviders } from './providers';
import './styles/index.css';

export const App = () => (
    <WithProviders>
        <RouterProvider router={router} />
    </WithProviders>
);
