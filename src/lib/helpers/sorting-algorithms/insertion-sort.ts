import type { SortingArgs, sortingReturnType } from '../sorting-types';

export async function* insertionSort({
  unsortedNumbers,
  onCompare,
  onSwap
}: SortingArgs): sortingReturnType {
  let i: number, j: number;
  const sortedNumbers: number[] = unsortedNumbers;

  for (i = 0; i < unsortedNumbers.length; i++) {
    let currentIndex = i;

    for (j = i - 1; j >= 0; j--) {
      yield* onCompare(currentIndex, j);

      if (sortedNumbers[j] > sortedNumbers[currentIndex]) {
        yield* onSwap(sortedNumbers, currentIndex, j);
        currentIndex = j;
      } else {
        break;
      }
    }
  }
}
