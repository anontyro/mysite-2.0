import * as fetch from 'isomorphic-fetch';
import {HttpLink} from 'apollo-link-http';
import {execute, Observable} from 'apollo-link';

interface GraphQlQueryProps {
  query: any;
  variables?: {};
}

export const GRAPHQL_URL_DEV = 'localhost:3000/graphql';
export const GRAPHQL_URL_PROD = 'https://alexwilkinson.co';

const uri = 'https://bgg-api.alexwilkinson.co/graphql';
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

// const GraphQLWrapper = ({query, variables, children}: GraphQlQueryProps) => (
//   <Query query={query} variables={variables}>
//     {({loading, error, data}) => {
//       if (loading) {
//         <h3>Loading...</h3>;
//       }
//       if (error) {
//         <h3>Error :(</h3>;
//       }
//       if (data) {
//         console.log(data);
//         return <div>{children}</div>;
//       } else {
//         return <div>no data</div>;
//       }
//     }}
//   </Query>
// );

export default graphQLQuery;
