import { mergeSort } from "../sort";
import * as fc from "fast-check";

test("can sort an array", () => {
  const input = [4, 2, 1, 3];
  const expected = [1, 2, 3, 4];
  const sortedArray = mergeSort(input);

  expect(sortedArray).toEqual(expected);
});

test("sorted array has the same length as the input array", () => {
  const hasTheSameLength = fc.property(fc.array(fc.integer()), (input) => {
    // complete the property
  });

  fc.assert(hasTheSameLength);
});
