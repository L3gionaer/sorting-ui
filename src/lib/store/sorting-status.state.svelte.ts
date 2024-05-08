import { SortingStatus } from '../helpers/sorting-types';

function createStatusState() {
  let status = $state<SortingStatus>(SortingStatus.STOPPED);

  return {
    get status() {
      return status;
    },
    toggleStatus: () => {
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

      status = newStatus;
    },
    reset: () => (status = SortingStatus.RESET),
    empty: () => (status = SortingStatus.EMPTY_STATUS)
  };
}

export const sortingStatusState = createStatusState();
