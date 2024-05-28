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
        //TODO combine
        case SortingStatus.EMPTY_STATUS:
          newStatus = SortingStatus.STARTED;
          break;
        case SortingStatus.STOPPED:
          newStatus = SortingStatus.STARTED;
          break;
        case SortingStatus.RESET:
          newStatus = SortingStatus.STARTED;
          break;
        case SortingStatus.RESET_TO_HISTORY:
          newStatus = SortingStatus.STARTED;
          break;
      }

      status = newStatus;
    },
    reset: () => (status = SortingStatus.RESET),
    resetToHistory: () => (status = SortingStatus.RESET_TO_HISTORY),
    empty: () => (status = SortingStatus.EMPTY_STATUS)
  };
}

export const sortingStatusState = createStatusState();
