import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "https://api.github.com/graphql"
);

graphqlClient.setHeader("authorization", "Bearer YOUR_GITHUB_TOKEN_HERE");
