import { API_URL, AUTH_TOKEN } from '@/shared/config';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

/**
 * Инициализация API.baseUrl
 */
const httpLink = createHttpLink({
    uri: API_URL,
});

/**
 * Логика авторизации
 * FIXME: вынести в features/auth?
 */
const authLink = setContext((_, { headers }) => {
    const token = AUTH_TOKEN;

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
});

/**
 * Инициализация инстанса клиента
 */
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

/**
 *  Инициализация подключения apollo для работы с API
 */
export const WithApolloProvider = ({ children }: { children: React.ReactNode }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
