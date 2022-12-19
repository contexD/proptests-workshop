import * as fc from "fast-check";
import { ContributionsQuery } from "../graphql/queries/types.generated";
fc.configureGlobal({});

export const nodeArbitrary: fc.Arbitrary<
  NonNullable<
    NonNullable<
      NonNullable<ContributionsQuery["user"]>["repositoriesContributedTo"]
    >["nodes"]
  >[0]
> = fc.option(
  fc.record({
    // complete the arbitrary with the remaining fields
    // tip: use the typing for the node constant
  }),
  { nil: undefined }
);

export const repositoriesContributedToArbitrary: fc.Arbitrary<
  NonNullable<ContributionsQuery["user"]>["repositoriesContributedTo"]
> = fc.record({
  totalCount: fc.integer({ min: 0 }),
  /* once the node arbitrary is complete (see const above), 
    pass it to the fc.uniqueArray combinator */
  nodes: fc.option(fc.uniqueArray(), { nil: undefined }),
});

export const contributionsQueryArbitrary: fc.Arbitrary<ContributionsQuery> =
  fc.record(
    /* complete this arbitrary with the 
  help of the repositoriesContributedTo arbitrary */
    {}
  );
