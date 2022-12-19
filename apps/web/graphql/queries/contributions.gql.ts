import { gql } from "graphql-request";

export const contributionsQuery = gql`
  query contributions($login: String!) {
    user(login: $login) {
      repositoriesContributedTo(
        first: 10
        orderBy: { field: PUSHED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          description
          name
          homepageUrl
          isPrivate
          openGraphImageUrl
          url
          id
        }
      }
    }
  }
`;
