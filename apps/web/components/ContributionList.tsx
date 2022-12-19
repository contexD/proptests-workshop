import { graphqlClient } from "../graphql/client";
import { useContributionsQuery } from "../graphql/queries/types.generated";
import { Contribution } from "./Contribution";

type Props = {
  userName: string;
};

export const ContributionsList = ({ userName }: Props) => {
  const { data } = useContributionsQuery(graphqlClient, { login: userName });

  return (
    <div>
      {data?.user?.repositoriesContributedTo?.nodes?.map((n) => (
        <Contribution contributionNode={n} />
      )) ?? "No contributions"}
    </div>
  );
};
