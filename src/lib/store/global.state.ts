import { genRandomNumbers } from '../helpers/sorting-helpers';
import { SortingAlgorithm, SortingStatus } from '../helpers/sorting-types';
import { writable } from 'svelte/store';

export const allSortingAlgorithms: SortingAlgorithm[] = Object.values(SortingAlgorithm);

let _interval = 500;
export function setSortingInterval(n: number) {
  _interval = n;
}
export function getSortingInterval() {
  return _interval;
}

function createSortingAlgorithmsActive() {
  const { subscribe, update } = writable<Map<SortingAlgorithm, boolean>>(
    new Map(allSortingAlgorithms.map((algo) => [algo, true]))
  );

  return {
    subscribe,
    toggleAlgorithm: (sortAlgo: SortingAlgorithm) => {
      update((algoMap) => {
        algoMap.set(sortAlgo, !algoMap.get(sortAlgo));

        return algoMap;
      });
    }
  };
}

function createSortingStatus() {
  const { subscribe, set } = writable<SortingStatus>(SortingStatus.STOPPED);

  return {
    set,
    updateStatus: (status: SortingStatus) => {
      let newStatus;

      switch (status) {
        case SortingStatus.STARTED:
          newStatus = SortingStatus.STOPPED;
          break;
        case SortingStatus.STOPPED:
          newStatus = SortingStatus.STARTED;
          break;
        case SortingStatus.RESET:
          newStatus = SortingStatus.STARTED;
        case SortingStatus.EMPTY_STATUS:
          newStatus = SortingStatus.STARTED;
      }

      set(newStatus);
    },
    subscribe
  };
}

function createNumbersToSort() {
  const { subscribe, set } = writable(genRandomNumbers());

  return {
    subscribe,
    generate: () => set(genRandomNumbers())
  };
}

export const sortingAlgorithmsActive = createSortingAlgorithmsActive();
export const sortingStatus = createSortingStatus();
export const numbersToSort = createNumbersToSort();
