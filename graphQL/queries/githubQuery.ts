import gql from 'graphql-tag';

export const GITHUB_PORTFOLIO_QUERY = gql`
  query {
    githubPinnedRepos {
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
