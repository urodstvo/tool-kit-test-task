import { WithApolloProvider } from './with-apollo';

export const WithProviders = ({ children }: { children: React.ReactNode }) => (
    <WithApolloProvider>{children}</WithApolloProvider>
);
