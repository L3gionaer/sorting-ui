import type { SortingArgs, sortingReturnType } from '../sorting-types';

export async function* quickSort(sortingArgs: SortingArgs): sortingReturnType {
  const sortedNumbers: number[] = sortingArgs.unsortedNumbers;
  const startIndex = 0,
    endIndex = sortingArgs.unsortedNumbers.length - 1;

  yield* sort(sortedNumbers, startIndex, endIndex, sortingArgs);
}
//TODO quicksort doesn't work correct
async function* sort(
  array: number[],
  startIndex: number,
  endIndex: number,
  sortingArgs: SortingArgs
): sortingReturnType {
  if (startIndex <= endIndex) {
    const pivotIndex = yield* partition(array, startIndex, endIndex, sortingArgs);

    if (typeof pivotIndex === 'number') {
      yield* sort(array, startIndex, pivotIndex - 1, sortingArgs);
      yield* sort(array, pivotIndex + 1, endIndex, sortingArgs);
    }
  }
}

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

  yield* afterSorting(swapIndex, false);
  return swapIndex;
}
