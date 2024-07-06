/** @generated THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import * as Types from '../../../shared/api/graphql.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RepoSearchQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type RepoSearchQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', repositoryCount: number, nodes?: Array<{ __typename?: 'App' } | { __typename?: 'Discussion' } | { __typename?: 'Issue' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'Organization' } | { __typename?: 'PullRequest' } | { __typename?: 'Repository', id: string, name: string, nameWithOwner: string, updatedAt: any, stargazerCount: number, url: any, defaultBranchRef?: { __typename?: 'Ref', target?: { __typename?: 'Blob' } | { __typename?: 'Commit', history: { __typename?: 'CommitHistoryConnection', edges?: Array<{ __typename?: 'CommitEdge', node?: { __typename?: 'Commit', committedDate: any } | null } | null> | null } } | { __typename?: 'Tag' } | { __typename?: 'Tree' } | null } | null } | { __typename?: 'User' } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };


export const RepoSearchDocument = gql`
    query repoSearch($query: String!, $after: String, $before: String, $first: Int, $last: Int) {
  search(
    first: $first
    last: $last
    query: $query
    type: REPOSITORY
    after: $after
    before: $before
  ) {
    repositoryCount
    nodes {
      ... on Repository {
        id
        name
        nameWithOwner
        updatedAt
        stargazerCount
        url
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 1) {
                edges {
                  node {
                    ... on Commit {
                      committedDate
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useRepoSearchQuery__
 *
 * To run a query within a React component, call `useRepoSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepoSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepoSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useRepoSearchQuery(baseOptions: Apollo.QueryHookOptions<RepoSearchQuery, RepoSearchQueryVariables> & ({ variables: RepoSearchQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RepoSearchQuery, RepoSearchQueryVariables>(RepoSearchDocument, options);
      }
export function useRepoSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepoSearchQuery, RepoSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RepoSearchQuery, RepoSearchQueryVariables>(RepoSearchDocument, options);
        }
export function useRepoSearchSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RepoSearchQuery, RepoSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RepoSearchQuery, RepoSearchQueryVariables>(RepoSearchDocument, options);
        }
export type RepoSearchQueryHookResult = ReturnType<typeof useRepoSearchQuery>;
export type RepoSearchLazyQueryHookResult = ReturnType<typeof useRepoSearchLazyQuery>;
export type RepoSearchSuspenseQueryHookResult = ReturnType<typeof useRepoSearchSuspenseQuery>;
export type RepoSearchQueryResult = Apollo.QueryResult<RepoSearchQuery, RepoSearchQueryVariables>;