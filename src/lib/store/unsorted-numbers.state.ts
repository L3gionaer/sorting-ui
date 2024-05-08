import { genRandomNumbers } from '../helpers/sorting-helpers';

function createUnsortedNumbersState() {
  let numbers = $state(genRandomNumbers());

  return {
    get numbers() {
      return numbers;
    },
    generate: () => {
      numbers = genRandomNumbers();
    }
  };
}

export const unsortedNumbersState = createUnsortedNumbersState();
