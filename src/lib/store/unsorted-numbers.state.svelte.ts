import { genRandomNumbers } from '../helpers/sorting-helpers';

function createUnsortedNumbersState() {
  let numbers = $state<number[]>(genRandomNumbers()); //.frozen

  return {
    get numbers() {
      return numbers;
    },
    set numbers(num: number[]) {
      numbers = num;
    },
    generate: () => {
      numbers = genRandomNumbers();
    }
  };
}

export const unsortedNumbersState = createUnsortedNumbersState();
