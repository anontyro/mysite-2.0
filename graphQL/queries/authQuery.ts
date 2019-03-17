import gql from 'graphql-tag';

export const LOGIN_QUERY = gql`
  query UserLogin($email: String!, $password: String!) {
    Login(email: $email, password: $password)
  }
`;
