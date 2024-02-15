import type { SortingArgs, sortingReturnType } from '../sorting-types';

export async function* quickSort(sortingArgs: SortingArgs): sortingReturnType {
  const sortedNumbers: number[] = sortingArgs.unsortedNumbers;
  const startIndex = 0,
    endIndex = sortingArgs.unsortedNumbers.length - 1;

  yield* sort(sortedNumbers, startIndex, endIndex, sortingArgs);
}

async function* sort(
  array: number[],
  startIndex: number,
  endIndex: number,
  sortingArgs: SortingArgs
): sortingReturnType {
  // Base case
  if (startIndex <= endIndex) {
    const pivotIndex = yield* partition(array, startIndex, endIndex, sortingArgs);

    if (typeof pivotIndex === 'number') {
      // Left
      yield* sort(array, startIndex, pivotIndex - 1, sortingArgs);
      // Right
      yield* sort(array, pivotIndex + 1, endIndex, sortingArgs);
    }
  }
}

/***
 * get all elements smaller than pivot to the left and all bigger to the right
 * swap index: numbers less than the pivot, increase by number smaller than pivot
 * we swap when the smaller element than the pivot has a higher index than the swap index
 * swap the element with the swap index position
 * swap pivot with swap index
 * now sort the left part of the swap index than the right part
 * subarrays do the same and split into more sub arrays
 */

async function* partition(
  array: number[],
  startIndex: number,
  endIndex: number,
  { onSwap, onCompare, afterSorting }: SortingArgs
): sortingReturnType {
  const pivotValue = array[startIndex];
  let swapIndex = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    yield* onCompare(i, swapIndex);
    if (pivotValue > array[i]) {
      swapIndex++;
      yield* onCompare(i, swapIndex);

      if (i !== swapIndex) {
        yield* onSwap(array, i, swapIndex);
      }
    }
  }

  yield* onCompare(swapIndex, startIndex);

  if (swapIndex !== startIndex) {
    yield* onSwap(array, swapIndex, startIndex);
  }
  //yield swapIndex;
  yield* afterSorting(swapIndex, false);
  return swapIndex;
}
