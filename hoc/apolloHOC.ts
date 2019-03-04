import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

const GRAPHQL_SERVER = {
  DEV: "http://localhost.tv:3000/graphql",
  PROD: "https://alexwilkinson.co/graphql"
};

const GRAHPQL_ENDPOINT = GRAPHQL_SERVER.DEV;

// can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
    uri: GRAHPQL_ENDPOINT
  })
};

export default withData(config);
