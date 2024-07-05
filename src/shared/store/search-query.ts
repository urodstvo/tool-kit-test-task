import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Repo = {};

type State = {
    searchQuery: string;
};

type Actions = {
    actions: {
        setSearchQuery: (searchQuery: string) => void;
    };
};

/**
 * @store Стор для хранения состояния поиска
 */
export const useSearchQueryStore = create<State & Actions>()(
    persist(
        (set) => ({
            searchQuery: '',
            actions: {
                setSearchQuery: (searchQuery: string) => set({ searchQuery }),
            },
        }),
        {
            name: 'searchQuery',
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({ searchQuery: state.searchQuery }),
        },
    ),
);
