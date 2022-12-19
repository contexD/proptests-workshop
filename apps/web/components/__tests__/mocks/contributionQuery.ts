import { ContributionsQuery } from "../../../graphql/queries/types.generated";

export const contributionsQueryMock: ContributionsQuery = {
  user: {
    repositoriesContributedTo: {
      totalCount: 1,
      nodes: [
        {
          description:
            "React micro-frontend framework allowing you to host multiple React components from HTML.",
          name: "react-abode",
          homepageUrl: "",
          isPrivate: false,
          openGraphImageUrl:
            "https://opengraph.githubassets.com/96e785de24615dcb0daca50605ce2902d61b25e67a5f60fa9024d884af21d4cc/labd/react-abode",
          url: "https://github.com/labd/react-abode",
          id: "MDEwOlJlcG9zaXRvcnkyODU1NzkxNDg=",
        },
      ],
    },
  },
};
