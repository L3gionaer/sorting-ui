import {
  SortingEventType,
  type CompareEventArgs,
  type SwapEventArgs,
  type AfterSortingEventArgs
} from './sorting-types';

import { getSortingInterval } from '../store/global.state';

export function genRandomNumbers() {
  return [...Array(12).keys()].map(() => Math.round(Math.random() * (10 - 1) + 1));
}

let resolveWhenPlaying: Promise<void>;
export let resolver = () => {};

export function setResolver() {
  resolveWhenPlaying = new Promise((res) => {
    resolver = res;
  });
}

export async function* onCompare(
  prevIndex: number,
  curIndex: number
): AsyncGenerator<CompareEventArgs> {
  yield { type: SortingEventType.COMPARE, prevIndex, curIndex };

  await delay(getSortingInterval());
  await resolveWhenPlaying;
}

export async function* onSwap(
  array: number[],
  prevIndex: number,
  curIndex: number
): AsyncGenerator<SwapEventArgs> {
  await resolveWhenPlaying;

  const temp = array[prevIndex];
  array[prevIndex] = array[curIndex];
  array[curIndex] = temp;

  yield { type: SortingEventType.SWAP, prevIndex, curIndex, array };

  await delay(200);
  await resolveWhenPlaying;
}

export async function* afterSorting(
  i: number,
  isRange = true
): AsyncGenerator<AfterSortingEventArgs> {
  yield { type: SortingEventType.AFTER_SORTING, curIndex: i, isRange };
}

function delay(interval: number): Promise<void> {
  return new Promise((res) => setTimeout(res, interval));
}
