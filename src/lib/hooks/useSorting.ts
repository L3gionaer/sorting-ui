import { onMount } from "svelte";
import { derived, writable } from "svelte/store";

import {
    type sortingFn,
    SortingStatus,
    SortingEventType,
} from "../helpers/sorting-types";
import {
    resolver,
    setResolver,
    onCompare,
    onSwap,
    afterSorting,
} from "../helpers/sorting-helpers";
import { sortingStatus, numbersToSort } from "../store/global.state";

export function useSorting(sortingAlgorithmFn: sortingFn) {
    const _sortingNumbers = writable<number[]>([]);
    const _prevIndex = writable(0);
    const _currentIndex = writable(0);
    const _swapCount = writable(0);
    const _compareCount = writable(0);
    const _allSorted = writable(false);

    const sortingNumbers = derived(_sortingNumbers, (numbers) => numbers);
    const prevIndex = derived(_prevIndex, (index) => index);
    const currentIndex = derived(_currentIndex, (index) => index);
    const allSorted = derived(_allSorted, (num) => num);
    const swapCount = derived(_swapCount, (num) => num);
    const compareCount = derived(_compareCount, (num) => num);
    let sortedIndexes: number[] | undefined = undefined;
    let unsortedNumbers: number[] = [];
    let started = false;

    function isSorted(i: number) {
        if (!sortedIndexes) {
            return false;
        }

        return sortedIndexes.includes(i);
    }

    function resetState() {
        _sortingNumbers.set([...unsortedNumbers]);
        _prevIndex.set(0);
        _currentIndex.set(0);
        _swapCount.set(0);
        _compareCount.set(0);
        _allSorted.set(false);
        sortedIndexes = undefined;
        started = false;
    }

    function setSortedIndexes(index: number, isRange = false) {
        sortedIndexes = isRange
            ? Array.from(Array(unsortedNumbers.length - index).keys()).map(
                  (n) => n + index
              )
            : [...(sortedIndexes ?? []), index];
    }

    async function startSorting() {
        resolver();

        if (!started) {
            started = true;

            const eventArgs = sortingAlgorithmFn({
                unsortedNumbers: [...unsortedNumbers],
                onCompare,
                onSwap,
                afterSorting,
            });

            for await (const eventArg of eventArgs) {
                if (!started) {
                    return;
                }

                switch (eventArg.type) {
                    case SortingEventType.COMPARE:
                        _prevIndex.set(eventArg.prevIndex);
                        _currentIndex.set(eventArg.curIndex);
                        _compareCount.update((count) => count + 1);
                        break;
                    case SortingEventType.SWAP:
                        _sortingNumbers.set(eventArg.array);
                        _swapCount.update((count) => count + 1);
                        break;
                    case SortingEventType.AFTER_SORTING:
                        setSortedIndexes(eventArg.curIndex, eventArg.isRange);
                        break;
                }
            }

            _allSorted.set(true);
        }
    }

    function pauseSorting() {
        setResolver();
    }

    onMount(() => {
        const unsubUnsortedNumbers = numbersToSort.subscribe((n) => {
            unsortedNumbers = n;
            _sortingNumbers.set(n);
        });

        setResolver();

        const unsubSortingStatus = sortingStatus.subscribe((status) => {
            switch (status) {
                case SortingStatus.STARTED:
                    startSorting();
                    break;
                case SortingStatus.STOPPED:
                    pauseSorting();
                    break;
                case SortingStatus.RESET:
                    resetState();
                    break;
            }
        });

        return () => {
            unsubUnsortedNumbers();
            unsubSortingStatus();
            resetState();
        };
    });

    return {
        sortingNumbers,
        prevIndex,
        currentIndex,
        allSorted,
        swapCount,
        compareCount,
        isSorted,
        resetState,
    };
}
