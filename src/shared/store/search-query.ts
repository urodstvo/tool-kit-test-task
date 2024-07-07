import { Repository } from '@/shared/api';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Repos = Array<Repository>;

type State = {
    query: string;
    page: number;
    repos: Repos;
    total: number;
    cursor?: {
        start: string | undefined | null;
        end: string | undefined | null;
    };
};

type Actions = {
    actions: {
        setQuery: (query: string) => void;
        setPage: (page: number) => void;
        setCursor: (startCursor: string | undefined | null, endCursor: string | undefined | null) => void;
        setRepos: (repos: Repos) => void;
        setTotal: (total: number) => void;
    };
};

export type SearchQueryStore = State & Actions;

const initialValue = {
    query: '',
    repos: [],
    viewerRepos: [],
    page: 0,
    total: 0,
    cursor: undefined,
};

/**
 * @store Стор для хранения состояния поиска
 */
export const useSearchQueryStore = create<State & Actions>()(
    persist(
        (set) => ({
            ...initialValue,
            actions: {
                setQuery: (query: string) => set({ ...initialValue, query }),
                setPage: (page: number) => set({ page }),
                setCursor: (startCursor: string | undefined | null, endCursor: string | undefined | null) =>
                    set({ cursor: { start: startCursor, end: endCursor } }),
                setRepos: (repos: Repos) => set({ repos }),
                setTotal: (total: number) => set({ total }),
            },
        }),
        {
            name: 'searchQuery',
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({
                query: state.query,
                page: state.page,
                cursor: state.cursor,
                repos: state.repos,
                total: state.total,
            }),
        },
    ),
);
