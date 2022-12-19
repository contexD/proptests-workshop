import * as fc from "fast-check";
import { mockContributionsQuery } from "../../graphql/queries/types.generated";
import { TestProviders } from "../../test-utils/Providers";
import { ContributionsList } from "../ContributionList";
import { contributionsQueryMock } from "./mocks/contributionQuery";
import { cleanup, render, screen } from "@testing-library/react";
import { contributionsQueryArbitrary } from "../../test-utils/arbitraries";
import { server } from "../../test-utils/server";

jest.setTimeout(30000);

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  jest.resetAllMocks();
});

afterAll(() => {
  server.close();
});

test("sees a contribution list", async () => {
  server.use(
    mockContributionsQuery((_, res, ctx) => {
      return res(ctx.data(contributionsQueryMock));
    })
  );

  render(
    <TestProviders>
      <ContributionsList userName="contexD" />;
    </TestProviders>
  );

  const heading = await screen.findByRole("heading", {
    name: /react-abode/i,
  });

  expect(heading).toBeInTheDocument();
});

test("does not crash", async () => {
  const itDoesNotCrash = fc
    .asyncProperty(contributionsQueryArbitrary, async (queryData) => {
      server.use(
        mockContributionsQuery((_, res, ctx) => {
          return res(ctx.data(queryData));
        })
      );

      render(
        <TestProviders>
          <ContributionsList userName="contexD" />;
        </TestProviders>
      );

      // complete the "it does not crash property"
    })
    .afterEach(() => {
      cleanup();
      server.resetHandlers();
      jest.resetAllMocks();
    });

  await fc.assert(itDoesNotCrash);
});
