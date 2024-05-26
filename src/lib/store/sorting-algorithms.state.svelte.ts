import { SortingAlgorithm, type SortingMetaData, type SwapHistory } from '../helpers/sorting-types';

export const allSortingAlgorithms: SortingAlgorithm[] = Object.values(SortingAlgorithm);

function createSortingHistoryState() {
  let algorithms = $state<Map<SortingAlgorithm, SortingMetaData>>(
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

  function updateRanking(sortAlgo: SortingAlgorithm, sortedNumbers: number) {
    const newAlgorithms = new Map<SortingAlgorithm, SortingMetaData>();

    [...algorithms.entries()]
      .sort((a, b) => b[1].sortedNumbers - a[1].sortedNumbers)
      .map((data) => data[0])
      .map((algo) => {
        const prevMetaData = algorithms.get(algo);
        if (prevMetaData) {
          newAlgorithms.set(algo, prevMetaData);
        }
      });

    const prevValue = newAlgorithms.get(sortAlgo)!;
    newAlgorithms.set(sortAlgo, { ...prevValue, sortedNumbers });

    algorithms = newAlgorithms;
  }

  function updateHistory(sortAlgo: SortingAlgorithm, swap: SwapHistory) {
    const prevValue = algorithms.get(sortAlgo);

    if (prevValue) {
      algorithms.set(sortAlgo, {
        ...prevValue,
        history: [...prevValue.history, { ...swap }]
      });
    }
  }

  function clearHistory() {
    const newAlgorithms = new Map(algorithms);

    [...algorithms.keys()].forEach((algo) =>
      newAlgorithms.set(algo, { history: [], sortedNumbers: 0 })
    );

    algorithms = newAlgorithms;
  }

  return {
    get algorithms() {
      return algorithms;
    },
    updateRanking,
    updateHistory,
    clearHistory
  };
}

function createActiveSortingAlgorithmsState() {
  let algorithms = $state<Map<SortingAlgorithm, boolean>>(
    new Map(allSortingAlgorithms.map((algo) => [algo, true]))
  );

  function toggleActive(sortAlgo: SortingAlgorithm) {
    const prevValue = algorithms.get(sortAlgo)!;

    algorithms = new Map(algorithms.set(sortAlgo, !prevValue));
  }

  function toggleAllActive() {
    const allActive = [...algorithms.values()].every((val) => val);
    const newAlgorithms = new Map(algorithms);

    [...algorithms.keys()].forEach((algo) => newAlgorithms.set(algo, !allActive));

    algorithms = newAlgorithms;
  }

  return {
    get algorithms() {
      return algorithms;
    },
    get allActive() {
      return [...algorithms.values()].every((val) => val);
    },
    toggleActive,
    toggleAllActive
  };
}

function createSelectedSortingAlgorithmState() {
  let selectedAlgorithm = $state<SortingAlgorithm | undefined>(undefined);

  return {
    get selectedAlgorithm() {
      return selectedAlgorithm;
    },
    set selectedAlgorithm(algo: SortingAlgorithm | undefined) {
      selectedAlgorithm = algo;
    }
  };
}

export const sortingHistoryState = createSortingHistoryState();
export const activeSortingAlgorithmsState = createActiveSortingAlgorithmsState();
export const selectedSortingAlgorithmState = createSelectedSortingAlgorithmState();
