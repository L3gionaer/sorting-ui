import { genRandomNumbers } from '../helpers/sorting-helpers';
import {
  SortingAlgorithm,
  SortingStatus,
  type SortingMetaData,
  type SwapHistory
} from '../helpers/sorting-types';
import { writable } from 'svelte/store';

export const allSortingAlgorithms: SortingAlgorithm[] = Object.values(SortingAlgorithm);

let _interval = 500;
export function setSortingInterval(n: number) {
  _interval = n;
}
export function getSortingInterval() {
  return _interval;
}

function createSortingActive() {
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
    },
    toggleAll: () =>
      update((algoMap) => {
        const allActive = [...algoMap.values()].every((val) => !!val);

        [...algoMap.keys()].forEach((algo) => algoMap.set(algo, !allActive));

        return algoMap;
      })
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

function createSortingMetaData() {
  const { subscribe, update } = writable<Map<SortingAlgorithm, SortingMetaData>>(
    new Map(
      allSortingAlgorithms.map((algo, i) => [
        algo,
        {
          history: [],
          sortedNumbers: 0
        }
      ])
    )
  );

  return {
    subscribe,
    updateRanking: (sortingAlgorithm: SortingAlgorithm, sortedNumbers: number) => {
      update((metaData) => {
        //TODO could be easier, less code
        const prevMetaData = metaData.get(sortingAlgorithm);
        if (prevMetaData) {
          metaData.set(sortingAlgorithm, { ...prevMetaData, sortedNumbers });
        }

        // return map in the order of the current rank
        const newMetaData = new Map<SortingAlgorithm, SortingMetaData>();
        [...metaData.entries()]
          .sort((a, b) => b[1].sortedNumbers - a[1].sortedNumbers)
          .map((data) => data[0])
          .map((algo) => {
            const prevMetaData = metaData.get(algo);
            if (prevMetaData) {
              newMetaData.set(algo, prevMetaData);
            }
          });

        return newMetaData;
      });
    },
    updateHistory: (sortingAlgorithm: SortingAlgorithm, swap: SwapHistory) =>
      update((metaData) => {
        const prevMetaData = metaData.get(sortingAlgorithm);
        if (prevMetaData) {
          metaData.set(sortingAlgorithm, {
            ...prevMetaData,
            history: [...prevMetaData.history, { ...swap }]
          });
        }

        return metaData;
      })
  };
}

export const sortingActive = createSortingActive();
export const sortingStatus = createSortingStatus();
export const numbersToSort = createNumbersToSort();
export const sortingMetaData = createSortingMetaData();
