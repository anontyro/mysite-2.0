import gql from 'graphql-tag';

export const BLOG_LIST_QUERY = gql`
  query BlogList($jwtToken: String!) {
    blogList(jwtToken: $jwtToken) {
      id
      title
      datePublished
      draft
    }
  }
`;

export const BGG_TEST = gql`
  {
    hotItems {
      name
      id
      thumbnail
      index
      yearpublished
    }
  }
`;
