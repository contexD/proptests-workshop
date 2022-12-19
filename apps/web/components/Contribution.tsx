import { ContributionsQuery } from "../graphql/queries/types.generated";

type Props = {
  contributionNode: NonNullable<
    NonNullable<
      NonNullable<ContributionsQuery["user"]>["repositoriesContributedTo"]
    >["nodes"]
  >[0];
};

export const Contribution = ({ contributionNode }: Props) => {
  if (!contributionNode) {
    return null;
  }

  return (
    <div key={contributionNode.id} data-testid={"contribution"}>
      <h2>{contributionNode.name}</h2>
      {contributionNode?.description && <p>{contributionNode.description}</p>}
      <p>
        Wanna know more? Check the repo out{" "}
        <a href={contributionNode?.url}>here</a>
      </p>
      <p>
        Looking for more general info? Check out the{" "}
        <a href={contributionNode?.homepageUrl}>project&apos;s homepage</a>
      </p>
    </div>
  );
};
