import gql from 'graphql-tag';

export const LOGIN_QUERY = gql`
  query UserLogin($email: String!, $password: String!) {
    Login(email: $email, password: $password)
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      firstName
      email
      isActive
    }
  }
`;
