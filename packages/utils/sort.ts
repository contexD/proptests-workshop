export const mergeSort = (array: number[]): number[] => {
  if (array.length === 1) {
    return array;
  }

  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < array.length; ++i) {
    if (i < Math.floor(array.length / 2)) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
};

const merge = (left: number[], right: number[]) => {
  let result: number[] = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      const first = left.shift();
      if (first) {
        result.push(first);
      }
    } else {
      const first = right.shift();
      if (first) {
        result.push(first);
      }
    }
  }

  while (left.length) {
    const first = left.shift();
    if (first) {
      result.push(first);
    }
  }
  while (right.length) {
    const first = right.shift();
    if (first) {
      result.push(first);
    }
  }

  return result;
};
