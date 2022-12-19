# Proptests Workshop

For an overview of built-in arbitraries, see fast-check's [documentation](https://github.com/dubzzz/fast-check/blob/main/packages/fast-check/documentation/Arbitraries.md)

## Proptests for mergeSort

In `/packages/utils/__tests__/sort.tests.ts` you will find a unit test for an implementation of mergeSort.
In addition, there's a start for a proptest for the `hasTheSameLength` property as discussed during the presentation.

1. Complete the proptest for the `hasTheSameLength` property
2. Increase the number of runs for the `hasTheSameLength` property to 10,000 (you can pass an [options object](https://github.com/dubzzz/fast-check/blob/main/packages/fast-check/documentation/Runners.md#runners) as the second argument to `fc.assert`)
3. Try to come up with another property for the mergeSort function

## Proptest for React component

In `/apps/web/components/__tests__/ContributionList.tests.tsx` you will find two integration tests: one with a conventional mock (in the form of json data)
and the beginning for a proptest which tests the "it doesn't crash" property.

Complete the following steps to get the proptest working for the React component:

1. In `apps/web/test-utils/arbitraries.ts` add the missing fields for the `nodeArbitrary`. Then use the `nodeArbitrary` in the `repositoriesContributedToArbitrary`. Finally, complete the `contributionsQueryArbitrary`.

2. In `/apps/web/components/__tests__/ContributionList.tests.tsx` add checks to the `itDoesNotCrash` property to get the proptest working.
