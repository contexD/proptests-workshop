import { ContributionsList } from "../components/ContributionList";

export const USER_NAME = "contexD";

export default function Web() {
  return (
    <div>
      <h1>The latest contributions from {`${USER_NAME}`}</h1>
      <ContributionsList userName={USER_NAME} />
    </div>
  );
}
