/** @generated THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import * as Types from '../../../shared/api/graphql.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RepoIdSearchQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type RepoIdSearchQuery = { __typename?: 'Query', node?: { __typename?: 'AddedToMergeQueueEvent' } | { __typename?: 'AddedToProjectEvent' } | { __typename?: 'App' } | { __typename?: 'AssignedEvent' } | { __typename?: 'AutoMergeDisabledEvent' } | { __typename?: 'AutoMergeEnabledEvent' } | { __typename?: 'AutoRebaseEnabledEvent' } | { __typename?: 'AutoSquashEnabledEvent' } | { __typename?: 'AutomaticBaseChangeFailedEvent' } | { __typename?: 'AutomaticBaseChangeSucceededEvent' } | { __typename?: 'BaseRefChangedEvent' } | { __typename?: 'BaseRefDeletedEvent' } | { __typename?: 'BaseRefForcePushedEvent' } | { __typename?: 'Blob' } | { __typename?: 'Bot' } | { __typename?: 'BranchProtectionRule' } | { __typename?: 'BypassForcePushAllowance' } | { __typename?: 'BypassPullRequestAllowance' } | { __typename?: 'CWE' } | { __typename?: 'CheckRun' } | { __typename?: 'CheckSuite' } | { __typename?: 'ClosedEvent' } | { __typename?: 'CodeOfConduct' } | { __typename?: 'CommentDeletedEvent' } | { __typename?: 'Commit' } | { __typename?: 'CommitComment' } | { __typename?: 'CommitCommentThread' } | { __typename?: 'Comparison' } | { __typename?: 'ConnectedEvent' } | { __typename?: 'ConvertToDraftEvent' } | { __typename?: 'ConvertedNoteToIssueEvent' } | { __typename?: 'ConvertedToDiscussionEvent' } | { __typename?: 'CrossReferencedEvent' } | { __typename?: 'DemilestonedEvent' } | { __typename?: 'DependencyGraphManifest' } | { __typename?: 'DeployKey' } | { __typename?: 'DeployedEvent' } | { __typename?: 'Deployment' } | { __typename?: 'DeploymentEnvironmentChangedEvent' } | { __typename?: 'DeploymentReview' } | { __typename?: 'DeploymentStatus' } | { __typename?: 'DisconnectedEvent' } | { __typename?: 'Discussion' } | { __typename?: 'DiscussionCategory' } | { __typename?: 'DiscussionComment' } | { __typename?: 'DiscussionPoll' } | { __typename?: 'DiscussionPollOption' } | { __typename?: 'DraftIssue' } | { __typename?: 'Enterprise' } | { __typename?: 'EnterpriseAdministratorInvitation' } | { __typename?: 'EnterpriseIdentityProvider' } | { __typename?: 'EnterpriseMemberInvitation' } | { __typename?: 'EnterpriseRepositoryInfo' } | { __typename?: 'EnterpriseServerInstallation' } | { __typename?: 'EnterpriseServerUserAccount' } | { __typename?: 'EnterpriseServerUserAccountEmail' } | { __typename?: 'EnterpriseServerUserAccountsUpload' } | { __typename?: 'EnterpriseUserAccount' } | { __typename?: 'Environment' } | { __typename?: 'ExternalIdentity' } | { __typename?: 'Gist' } | { __typename?: 'GistComment' } | { __typename?: 'HeadRefDeletedEvent' } | { __typename?: 'HeadRefForcePushedEvent' } | { __typename?: 'HeadRefRestoredEvent' } | { __typename?: 'IpAllowListEntry' } | { __typename?: 'Issue' } | { __typename?: 'IssueComment' } | { __typename?: 'Label' } | { __typename?: 'LabeledEvent' } | { __typename?: 'Language' } | { __typename?: 'License' } | { __typename?: 'LinkedBranch' } | { __typename?: 'LockedEvent' } | { __typename?: 'Mannequin' } | { __typename?: 'MarkedAsDuplicateEvent' } | { __typename?: 'MarketplaceCategory' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'MemberFeatureRequestNotification' } | { __typename?: 'MembersCanDeleteReposClearAuditEntry' } | { __typename?: 'MembersCanDeleteReposDisableAuditEntry' } | { __typename?: 'MembersCanDeleteReposEnableAuditEntry' } | { __typename?: 'MentionedEvent' } | { __typename?: 'MergeQueue' } | { __typename?: 'MergeQueueEntry' } | { __typename?: 'MergedEvent' } | { __typename?: 'MigrationSource' } | { __typename?: 'Milestone' } | { __typename?: 'MilestonedEvent' } | { __typename?: 'MovedColumnsInProjectEvent' } | { __typename?: 'OIDCProvider' } | { __typename?: 'OauthApplicationCreateAuditEntry' } | { __typename?: 'OrgAddBillingManagerAuditEntry' } | { __typename?: 'OrgAddMemberAuditEntry' } | { __typename?: 'OrgBlockUserAuditEntry' } | { __typename?: 'OrgConfigDisableCollaboratorsOnlyAuditEntry' } | { __typename?: 'OrgConfigEnableCollaboratorsOnlyAuditEntry' } | { __typename?: 'OrgCreateAuditEntry' } | { __typename?: 'OrgDisableOauthAppRestrictionsAuditEntry' } | { __typename?: 'OrgDisableSamlAuditEntry' } | { __typename?: 'OrgDisableTwoFactorRequirementAuditEntry' } | { __typename?: 'OrgEnableOauthAppRestrictionsAuditEntry' } | { __typename?: 'OrgEnableSamlAuditEntry' } | { __typename?: 'OrgEnableTwoFactorRequirementAuditEntry' } | { __typename?: 'OrgInviteMemberAuditEntry' } | { __typename?: 'OrgInviteToBusinessAuditEntry' } | { __typename?: 'OrgOauthAppAccessApprovedAuditEntry' } | { __typename?: 'OrgOauthAppAccessBlockedAuditEntry' } | { __typename?: 'OrgOauthAppAccessDeniedAuditEntry' } | { __typename?: 'OrgOauthAppAccessRequestedAuditEntry' } | { __typename?: 'OrgOauthAppAccessUnblockedAuditEntry' } | { __typename?: 'OrgRemoveBillingManagerAuditEntry' } | { __typename?: 'OrgRemoveMemberAuditEntry' } | { __typename?: 'OrgRemoveOutsideCollaboratorAuditEntry' } | { __typename?: 'OrgRestoreMemberAuditEntry' } | { __typename?: 'OrgUnblockUserAuditEntry' } | { __typename?: 'OrgUpdateDefaultRepositoryPermissionAuditEntry' } | { __typename?: 'OrgUpdateMemberAuditEntry' } | { __typename?: 'OrgUpdateMemberRepositoryCreationPermissionAuditEntry' } | { __typename?: 'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry' } | { __typename?: 'Organization' } | { __typename?: 'OrganizationIdentityProvider' } | { __typename?: 'OrganizationInvitation' } | { __typename?: 'OrganizationMigration' } | { __typename?: 'Package' } | { __typename?: 'PackageFile' } | { __typename?: 'PackageTag' } | { __typename?: 'PackageVersion' } | { __typename?: 'PinnedDiscussion' } | { __typename?: 'PinnedEnvironment' } | { __typename?: 'PinnedEvent' } | { __typename?: 'PinnedIssue' } | { __typename?: 'PrivateRepositoryForkingDisableAuditEntry' } | { __typename?: 'PrivateRepositoryForkingEnableAuditEntry' } | { __typename?: 'Project' } | { __typename?: 'ProjectCard' } | { __typename?: 'ProjectColumn' } | { __typename?: 'ProjectV2' } | { __typename?: 'ProjectV2Field' } | { __typename?: 'ProjectV2Item' } | { __typename?: 'ProjectV2ItemFieldDateValue' } | { __typename?: 'ProjectV2ItemFieldIterationValue' } | { __typename?: 'ProjectV2ItemFieldNumberValue' } | { __typename?: 'ProjectV2ItemFieldSingleSelectValue' } | { __typename?: 'ProjectV2ItemFieldTextValue' } | { __typename?: 'ProjectV2IterationField' } | { __typename?: 'ProjectV2SingleSelectField' } | { __typename?: 'ProjectV2StatusUpdate' } | { __typename?: 'ProjectV2View' } | { __typename?: 'ProjectV2Workflow' } | { __typename?: 'PublicKey' } | { __typename?: 'PullRequest' } | { __typename?: 'PullRequestCommit' } | { __typename?: 'PullRequestCommitCommentThread' } | { __typename?: 'PullRequestReview' } | { __typename?: 'PullRequestReviewComment' } | { __typename?: 'PullRequestReviewThread' } | { __typename?: 'PullRequestThread' } | { __typename?: 'Push' } | { __typename?: 'PushAllowance' } | { __typename?: 'Reaction' } | { __typename?: 'ReadyForReviewEvent' } | { __typename?: 'Ref' } | { __typename?: 'ReferencedEvent' } | { __typename?: 'Release' } | { __typename?: 'ReleaseAsset' } | { __typename?: 'RemovedFromMergeQueueEvent' } | { __typename?: 'RemovedFromProjectEvent' } | { __typename?: 'RenamedTitleEvent' } | { __typename?: 'ReopenedEvent' } | { __typename?: 'RepoAccessAuditEntry' } | { __typename?: 'RepoAddMemberAuditEntry' } | { __typename?: 'RepoAddTopicAuditEntry' } | { __typename?: 'RepoArchivedAuditEntry' } | { __typename?: 'RepoChangeMergeSettingAuditEntry' } | { __typename?: 'RepoConfigDisableAnonymousGitAccessAuditEntry' } | { __typename?: 'RepoConfigDisableCollaboratorsOnlyAuditEntry' } | { __typename?: 'RepoConfigDisableContributorsOnlyAuditEntry' } | { __typename?: 'RepoConfigDisableSockpuppetDisallowedAuditEntry' } | { __typename?: 'RepoConfigEnableAnonymousGitAccessAuditEntry' } | { __typename?: 'RepoConfigEnableCollaboratorsOnlyAuditEntry' } | { __typename?: 'RepoConfigEnableContributorsOnlyAuditEntry' } | { __typename?: 'RepoConfigEnableSockpuppetDisallowedAuditEntry' } | { __typename?: 'RepoConfigLockAnonymousGitAccessAuditEntry' } | { __typename?: 'RepoConfigUnlockAnonymousGitAccessAuditEntry' } | { __typename?: 'RepoCreateAuditEntry' } | { __typename?: 'RepoDestroyAuditEntry' } | { __typename?: 'RepoRemoveMemberAuditEntry' } | { __typename?: 'RepoRemoveTopicAuditEntry' } | { __typename?: 'Repository', id: string, name: string, stargazerCount: number, url: any, description?: string | null, defaultBranchRef?: { __typename?: 'Ref', target?: { __typename?: 'Blob' } | { __typename?: 'Commit', history: { __typename?: 'CommitHistoryConnection', edges?: Array<{ __typename?: 'CommitEdge', node?: { __typename?: 'Commit', committedDate: any } | null } | null> | null } } | { __typename?: 'Tag' } | { __typename?: 'Tree' } | null } | null, owner: { __typename?: 'Organization', avatarUrl: any, id: string, login: string, url: any } | { __typename?: 'User', avatarUrl: any, id: string, login: string, url: any }, languages?: { __typename?: 'LanguageConnection', nodes?: Array<{ __typename?: 'Language', id: string, name: string, color?: string | null } | null> | null } | null } | { __typename?: 'RepositoryInvitation' } | { __typename?: 'RepositoryMigration' } | { __typename?: 'RepositoryRule' } | { __typename?: 'RepositoryRuleset' } | { __typename?: 'RepositoryRulesetBypassActor' } | { __typename?: 'RepositoryTopic' } | { __typename?: 'RepositoryVisibilityChangeDisableAuditEntry' } | { __typename?: 'RepositoryVisibilityChangeEnableAuditEntry' } | { __typename?: 'RepositoryVulnerabilityAlert' } | { __typename?: 'ReviewDismissalAllowance' } | { __typename?: 'ReviewDismissedEvent' } | { __typename?: 'ReviewRequest' } | { __typename?: 'ReviewRequestRemovedEvent' } | { __typename?: 'ReviewRequestedEvent' } | { __typename?: 'SavedReply' } | { __typename?: 'SecurityAdvisory' } | { __typename?: 'SponsorsActivity' } | { __typename?: 'SponsorsListing' } | { __typename?: 'SponsorsListingFeaturedItem' } | { __typename?: 'SponsorsTier' } | { __typename?: 'Sponsorship' } | { __typename?: 'SponsorshipNewsletter' } | { __typename?: 'Status' } | { __typename?: 'StatusCheckRollup' } | { __typename?: 'StatusContext' } | { __typename?: 'SubscribedEvent' } | { __typename?: 'Tag' } | { __typename?: 'Team' } | { __typename?: 'TeamAddMemberAuditEntry' } | { __typename?: 'TeamAddRepositoryAuditEntry' } | { __typename?: 'TeamChangeParentTeamAuditEntry' } | { __typename?: 'TeamDiscussion' } | { __typename?: 'TeamDiscussionComment' } | { __typename?: 'TeamRemoveMemberAuditEntry' } | { __typename?: 'TeamRemoveRepositoryAuditEntry' } | { __typename?: 'Topic' } | { __typename?: 'TransferredEvent' } | { __typename?: 'Tree' } | { __typename?: 'UnassignedEvent' } | { __typename?: 'UnlabeledEvent' } | { __typename?: 'UnlockedEvent' } | { __typename?: 'UnmarkedAsDuplicateEvent' } | { __typename?: 'UnpinnedEvent' } | { __typename?: 'UnsubscribedEvent' } | { __typename?: 'User' } | { __typename?: 'UserBlockedEvent' } | { __typename?: 'UserContentEdit' } | { __typename?: 'UserList' } | { __typename?: 'UserStatus' } | { __typename?: 'VerifiableDomain' } | { __typename?: 'Workflow' } | { __typename?: 'WorkflowRun' } | { __typename?: 'WorkflowRunFile' } | null };


export const RepoIdSearchDocument = gql`
    query repoIdSearch($id: ID!) {
  node(id: $id) {
    ... on Repository {
      id
      name
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
      owner {
        avatarUrl
        id
        login
        url
      }
      languages(first: 100) {
        nodes {
          id
          name
          color
        }
      }
      description
    }
  }
}
    `;

/**
 * __useRepoIdSearchQuery__
 *
 * To run a query within a React component, call `useRepoIdSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepoIdSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepoIdSearchQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRepoIdSearchQuery(baseOptions: Apollo.QueryHookOptions<RepoIdSearchQuery, RepoIdSearchQueryVariables> & ({ variables: RepoIdSearchQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RepoIdSearchQuery, RepoIdSearchQueryVariables>(RepoIdSearchDocument, options);
      }
export function useRepoIdSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepoIdSearchQuery, RepoIdSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RepoIdSearchQuery, RepoIdSearchQueryVariables>(RepoIdSearchDocument, options);
        }
export function useRepoIdSearchSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RepoIdSearchQuery, RepoIdSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RepoIdSearchQuery, RepoIdSearchQueryVariables>(RepoIdSearchDocument, options);
        }
export type RepoIdSearchQueryHookResult = ReturnType<typeof useRepoIdSearchQuery>;
export type RepoIdSearchLazyQueryHookResult = ReturnType<typeof useRepoIdSearchLazyQuery>;
export type RepoIdSearchSuspenseQueryHookResult = ReturnType<typeof useRepoIdSearchSuspenseQuery>;
export type RepoIdSearchQueryResult = Apollo.QueryResult<RepoIdSearchQuery, RepoIdSearchQueryVariables>;