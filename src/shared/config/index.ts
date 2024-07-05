/**
 * Получение env-переменной
 * @throwable
 */
const LookupEnv = (key: string) => {
    const env = import.meta.env[key];
    if (env === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return env || '';
};

/** @github API entrypoint */
export const API_URL = LookupEnv('VITE_API_URL');

/** @github Auth token */
export const AUTH_TOKEN = LookupEnv('VITE_AUTH_TOKEN');
