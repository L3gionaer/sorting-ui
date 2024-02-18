export enum SortingAlgorithm {
  BUBBLE_SORT = 'bubbleSort',
  QUICK_SORT = 'quickSort',
  SELECTION_SORT = 'selectionSort',
  INSERTION_SORT = 'insertionSort'
}

export interface SortingMetaData {
  history: SortHistory[];
  sortedNumbers: number;
}

export interface SortHistory {
  prevIndex: number;
  curIndex: number;
}

export type onCompareFn = (num1: number, num2: number) => AsyncGenerator<CompareEventArgs>;
export type onSwapFn = (arr: number[], num1: number, num2: number) => AsyncGenerator<SwapEventArgs>;
export type afterSortingFn = (
  index: number,
  isRange?: boolean
) => AsyncGenerator<AfterSortingEventArgs>;

export interface SortingArgs {
  unsortedNumbers: number[];
  onCompare: onCompareFn;
  onSwap: onSwapFn;
  afterSorting: afterSortingFn;
}

export interface SortingState {
  unsortedNumbers: number[];
  status: SortingState;
  interval: number;
}

export enum SortingStatus {
  STARTED = 'started',
  STOPPED = 'stopped',
  RESET = 'reset',
  EMPTY_STATUS = 'emptyStatus'
}

export enum SortingEventType {
  COMPARE = 'compare',
  SWAP = 'swap',
  AFTER_SORTING = 'afterSorting'
}

export type sortingFn = (args: SortingArgs) => sortingReturnType;

export type sortingReturnType = AsyncGenerator<
  CompareEventArgs | SwapEventArgs | AfterSortingEventArgs
>;

export interface CompareEventArgs {
  type: SortingEventType.COMPARE;
  prevIndex: number;
  curIndex: number;
}

export interface SwapEventArgs {
  type: SortingEventType.SWAP;
  prevIndex: number;
  curIndex: number;
  array: number[];
}

export interface AfterSortingEventArgs {
  type: SortingEventType.AFTER_SORTING;
  curIndex: number;
  isRange: boolean;
}
