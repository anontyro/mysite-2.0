import gql from 'graphql-tag';

export const GHOST_BLOG_LIST_QUERY = gql`
  query GhostPosts($page: number!, $limit: number!) {
    ghostPosts(page: $page, limit: $limit) {
      posts {
        id
        title
        slug
        html
        feature_image
        created_at
        updated_at
        published_at
        excerpt
      }
      meta {
        pagination {
          page
          next
          prev
          limit
          total
        }
      }
    }
  }
`;

export const GHOST_BLOG_ITEM_QUERY = gql`
  query GhostPost($slug: String) {
    ghostPost(slug: $slug) {
      posts {
        id
        title
        slug
        html
        feature_image
        created_at
        updated_at
        published_at
        excerpt
      }
      meta {
        pagination {
          page
          next
          prev
          limit
          total
        }
      }
    }
  }
`;

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

export const BLOG_PUBLISH_MUTATION = gql`
  mutation PublishBlog($jwtToken: String!, $id: Float!) {
    publishBlog(jwtToken: $jwtToken, id: $id) {
      id
      title
      draft
    }
  }
`;

export const BLOG_CREATE_MUTATION = gql`
  mutation CreateBlog(
    $jwtToken: String!
    $title: String!
    $body: String!
    $draft: Boolean
    $coverImage: String
    $datePublished: String
    $tags: tags
  ) {
    createBlog(
      jwtToken: $jwtToken
      title: $title
      body: $body
      draft: $draft
      coverImage: $coverImage
      datePublished: $datePublished
      tags: $tags
    ) {
      title
      body
      author
      slug
    }
  }
`;

export const BLOG_UPDATE_MUTATION = gql`
  mutation UpdateBlog(
    $jwtToken: String!
    $id: Float!
    $title: String
    $body: String
    $draft: Boolean
    $coverImage: String
    $datePublished: String
    $tags: tags
  ) {
    updateBlog(
      jwtToken: $jwtToken
      id: $id
      title: $title
      body: $body
      draft: $draft
      coverImage: $coverImage
      datePublished: $datePublished
      tags: $tags
    ) {
      title
      body
      author
      slug
    }
  }
`;
