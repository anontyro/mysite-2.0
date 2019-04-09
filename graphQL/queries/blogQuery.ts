import gql from 'graphql-tag';

export const BLOG_LIST_QUERY = gql`
  query BlogList($jwtToken: String!) {
    blogList(jwtToken: $jwtToken) {
      id
      title
      body
      tags
      datePublished
      dateLastModified
      dateCreated
      author
      draft
      slug
      coverImage
      thumbNail
    }
  }
`;
