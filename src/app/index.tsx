import { router } from '@/pages';
import { RouterProvider } from 'react-router-dom';

import { withProviders } from './providers';
import './styles/index.css';

const App = <RouterProvider router={router} />;

export default withProviders(App);
