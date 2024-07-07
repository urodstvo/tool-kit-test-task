import { BrowserRouter } from 'react-router-dom';

import { WithApolloProvider } from './with-apollo';

export const WithProviders = ({ children }: { children: React.ReactNode }) => (
    <WithApolloProvider>
        <BrowserRouter basename="/tool-kit-test-task/">{children}</BrowserRouter>
    </WithApolloProvider>
);
