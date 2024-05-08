import type { SortingAlgorithm, SortingMetaData, SwapHistory } from '../helpers/sorting-types';
import { allSortingAlgorithms } from './sorting.state';

let algorithms = $state<Map<SortingAlgorithm, SortingMetaData>>(
  new Map(
    allSortingAlgorithms.map((algo, i) => [
      algo,
      {
        active: true,
        history: [],
        sortedNumbers: 0
      }
    ])
  )
);

function toggleActive(sortAlgo: SortingAlgorithm) {
  const prevValue = algorithms.get(sortAlgo)!;

  algorithms.set(sortAlgo, { ...prevValue, active: !prevValue.active });
}

function toggleAllActive() {
  const allActive = [...algorithms.values()].every((val) => !!val);

  [...algorithms.keys()].forEach((algo) =>
    algorithms.set(algo, { ...algorithms.get(algo)!, active: !allActive })
  );
}

function updateRanking(sortAlgo: SortingAlgorithm, sortedNumbers: number) {
  const prevValue = algorithms.get(sortAlgo)!;

  const newAlgorithms = new Map<SortingAlgorithm, SortingMetaData>();
  newAlgorithms.set(sortAlgo, { ...prevValue, sortedNumbers });

  [...algorithms.entries()]
    .sort((a, b) => b[1].sortedNumbers - a[1].sortedNumbers)
    .map((data) => data[0])
    .map((algo) => {
      const prevMetaData = algorithms.get(algo);
      if (prevMetaData) {
        newAlgorithms.set(algo, prevMetaData);
      }
    });

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

export const sortingAlgorithmsState = {
  algorithms,
  toggleActive,
  toggleAllActive,
  updateRanking,
  updateHistory
};
