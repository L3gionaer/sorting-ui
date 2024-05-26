function createSortingIntervalState() {
  let interval = $state(500);

  return {
    get interval() {
      return interval;
    },
    set interval(num: number) {
      interval = num;
    }
  };
}

export const sortingIntervalState = createSortingIntervalState();
