import type { SortingArgs, sortingReturnType } from '../sorting-types';

export async function* selectionSort({
  unsortedNumbers,
  onCompare,
  onSwap,
  afterSorting
}: SortingArgs): sortingReturnType {
  let i: number, j: number;
  const sortedNumbers: number[] = unsortedNumbers;

  for (i = 0; i < unsortedNumbers.length; i++) {
    let maxIndex = 0;

    for (j = 1; j < unsortedNumbers.length - i; j++) {
      yield* onCompare(j, maxIndex);

      if (sortedNumbers[maxIndex] < sortedNumbers[j]) {
        maxIndex = j;
      }
    }

    j = j - 1;
    if (maxIndex !== j && sortedNumbers[maxIndex] !== sortedNumbers[j]) {
      yield* onSwap(sortedNumbers, j, maxIndex);
    }

    yield* afterSorting(j);
  }
}
