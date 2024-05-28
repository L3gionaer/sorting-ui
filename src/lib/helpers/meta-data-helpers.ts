import { sortingHistoryState } from '../store/sorting-algorithms.state.svelte';
import type { SortingAlgorithm, SwapEventArgs } from './sorting-types';

export function updateSortHistory(sortingAlgorithm: SortingAlgorithm, swapArgs: SwapEventArgs) {
  const prevIndex = swapArgs.prevIndex;
  const curIndex = swapArgs.curIndex;
  const array = swapArgs.array;

  sortingHistoryState.updateHistory(sortingAlgorithm, {
    prevNumber: {
      index: prevIndex,
      value: array[curIndex]
    },
    curNumber: {
      index: curIndex,
      value: array[prevIndex]
    },
    numbers: [...array]
  });
}
