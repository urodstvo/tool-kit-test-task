import { Router } from '@/pages';

import { WithProviders } from './providers';
import './styles/index.css';

export const App = () => (
    <WithProviders>
        <Router />
    </WithProviders>
);
