import { type SortingArgs, type sortingReturnType } from '../sorting-types';

export async function* bubbleSort({
  unsortedNumbers,
  onCompare,
  onSwap,
  afterSorting
}: SortingArgs): sortingReturnType {
  let i: number, j: number;
  const sortedNumbers: number[] = unsortedNumbers;

  for (i = 0; i < unsortedNumbers.length - 1; i++) {
    for (j = 0; j < unsortedNumbers.length - i - 1; j++) {
      yield* onCompare(j, j + 1);

      if (sortedNumbers[j] > sortedNumbers[j + 1]) {
        yield* onSwap(sortedNumbers, j, j + 1);
      }
    }

    yield* afterSorting(j);
  }
}
