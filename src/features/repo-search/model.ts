import { QueryHookOptions } from '@apollo/client';

import { RepoSearchQuery, RepoSearchQueryVariables, useRepoSearchQuery } from './api';

export const useSearchRepositoriesQuery = (
    options: QueryHookOptions<RepoSearchQuery, RepoSearchQueryVariables> &
        (
            | {
                  variables: RepoSearchQueryVariables;
                  skip?: boolean;
              }
            | {
                  skip: boolean;
              }
        ),
) => {
    const response = useRepoSearchQuery(options);

    return response;
};
