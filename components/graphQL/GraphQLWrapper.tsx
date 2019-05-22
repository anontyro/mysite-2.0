import * as fetch from 'isomorphic-fetch';
import {HttpLink} from 'apollo-link-http';
import {execute, Observable} from 'apollo-link';

interface GraphQlQueryProps {
  query: any;
  variables?: {};
}

export const GRAPHQL_URL_DEV = 'https://nightly.alexwilkinson.co/graphql';
export const GRAPHQL_URL_PROD = 'https://alexwilkinson.co/graphql';
export const GRAPHQL_BGG_EX = 'https://bgg-api.alexwilkinson.co/graphql';

const uri = GRAPHQL_URL_DEV;
const link = new HttpLink({uri, fetch});

const graphQLQuery = ({
  query,
  variables,
}: GraphQlQueryProps): Observable<any> => {
  const operation = {
    query,
    variables,
  };

  return execute(link, operation);
};

export const graphQLFetch = ({
  query,
  variables,
}: GraphQlQueryProps): Promise<any> => {
  return fetch(uri, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query}),
  });
};

export default graphQLQuery;
