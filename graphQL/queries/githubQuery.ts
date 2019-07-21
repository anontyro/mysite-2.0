import gql from 'graphql-tag';

export const GITHUB_PORTFOLIO_QUERY = gql`
  query {
    GithubPinnedRepos {
      name
      url
      descriptionHTML
      primaryLanguage {
        color
        name
      }
      isPrivate
      createdAt
      updatedAt
      shortDescriptionHTML
    }
  }
`;
