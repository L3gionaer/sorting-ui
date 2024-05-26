import {
  type sortingFn,
  SortingStatus,
  SortingEventType,
  SortingAlgorithm
} from '../helpers/sorting-types';
import { resolver, setResolver, onCompare, onSwap, afterSorting } from '../helpers/sorting-helpers';
import { unsortedNumbersState } from '../store/unsorted-numbers.state.svelte';
import { sortingStatusState } from '../store/sorting-status.state.svelte';
import { sortingHistoryState } from '../store/sorting-algorithms.state.svelte';
import { updateSortHistory } from '../helpers/meta-data-helpers';

export function useSorting(sortingAlgorithmFn: sortingFn, sortingAlgorithm: SortingAlgorithm) {
  let sortingNumbers = $state([...unsortedNumbersState.numbers]);
  let prevIndex = $state(0);
  let currentIndex = $state(0);
  let allSorted = $state(false);
  let swapCount = $state(0);
  let compareCount = $state(0);
  let sortedIndexes: number[] | undefined = $state(undefined);
  let unsortedNumbers = $derived(unsortedNumbersState.numbers);
  let started = false;

  function isSorted(i: number) {
    if (!sortedIndexes) {
      return false;
    }

    return sortedIndexes.includes(i);
  }

  function resetState() {
    sortingNumbers = [...unsortedNumbers];
    prevIndex = 0;
    currentIndex = 0;
    swapCount = 0;
    compareCount = 0;
    allSorted = false;
    sortedIndexes = undefined;
    started = false;
  }

  function setSortedIndexes(index: number, isRange = false) {
    sortedIndexes = isRange
      ? Array.from(Array(unsortedNumbers.length - index).keys()).map((n) => n + index)
      : [...(sortedIndexes ?? []), index];

    sortingHistoryState.updateRanking(sortingAlgorithm, sortedIndexes.length);
  }

  async function startSorting() {
    resolver();

    if (!started) {
      started = true;

      const eventArgs = sortingAlgorithmFn({
        unsortedNumbers: [...unsortedNumbers],
        onCompare,
        onSwap,
        afterSorting
      });

      for await (const eventArg of eventArgs) {
        if (!started) {
          return;
        }

        switch (eventArg.type) {
          case SortingEventType.COMPARE:
            prevIndex = eventArg.prevIndex;
            currentIndex = eventArg.curIndex;
            compareCount = compareCount + 1;
            break;
          case SortingEventType.SWAP:
            sortingNumbers = [...eventArg.array];
            swapCount = swapCount + 1;
            updateSortHistory(sortingAlgorithm, eventArg);
            break;
          case SortingEventType.AFTER_SORTING:
            setSortedIndexes(eventArg.curIndex, eventArg.isRange);
            break;
        }
      }

      sortingHistoryState.updateRanking(sortingAlgorithm, unsortedNumbers.length);
      allSorted = true;
    }
  }

  function pauseSorting() {
    setResolver();
  }

  $effect(() => {
    const status = sortingStatusState.status;

    switch (status) {
      case SortingStatus.STARTED:
        startSorting();
        break;
      case SortingStatus.STOPPED:
        pauseSorting();
        break;
      case SortingStatus.RESET:
        resetState();
        break;
    }
  });

  return {
    get sortingNumbers() {
      return sortingNumbers;
    },
    get prevIndex() {
      return prevIndex;
    },
    get currentIndex() {
      return currentIndex;
    },
    get allSorted() {
      return allSorted;
    },
    get swapCount() {
      return swapCount;
    },
    get compareCount() {
      return compareCount;
    },
    get unsortedNumbers() {
      return unsortedNumbers;
    },
    isSorted,
    resetState
  };
}
