import { sortingMetaData } from '$lib/store/sorting.state';
import type { SortingAlgorithm, SwapEventArgs } from './sorting-types';

export function updateSortHistory(sortingAlgorithm: SortingAlgorithm, swapArgs: SwapEventArgs) {
  const prevIndex = swapArgs.prevIndex;
  const curIndex = swapArgs.curIndex;
  const array = swapArgs.array;
  console.log('prevIndex', prevIndex, 'curIndex', curIndex);

  sortingMetaData.updateHistory(sortingAlgorithm, {
    prevNumber: {
      index: prevIndex,
      value: array[curIndex]
    },
    curNumber: {
      index: curIndex,
      value: array[prevIndex]
    }
  });
}
