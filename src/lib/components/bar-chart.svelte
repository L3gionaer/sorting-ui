<script lang="ts">
  interface BarChartProps {
    sortingAlgorithmFn: sortingFn;
    sortingAlgorithm: SortingAlgorithm;
  }

  import * as Card from './ui/card';
  import { useSorting } from '../hooks/useSorting.state.svelte';
  import { selectedSortingAlgorithmState } from '../store/sorting-algorithms.state.svelte';
  import type { SortingAlgorithm, sortingFn } from '../helpers/sorting-types';

  const { sortingAlgorithmFn, sortingAlgorithm }: BarChartProps = $props();

  function selectSortingAlgorithm() {
    selectedSortingAlgorithmState.selectedAlgorithm = sortingAlgorithm;
  }

  const sorting = useSorting(sortingAlgorithmFn, sortingAlgorithm);
</script>

<button on:click={() => selectSortingAlgorithm()}>
  <Card.Root class="flex h-[400px] cursor-pointer flex-col">
    <Card.Header class="flex-row space-y-0">
      <Card.Title class="leading-0">{sortingAlgorithm}</Card.Title>
      <div class="ml-auto mt-0">
        <p>compares: {sorting.compareCount}</p>
        <p>swapped: {sorting.swapCount}</p>
      </div>
    </Card.Header>
    <Card.Content class="mt-auto">
      <div class="flex items-end gap-2 border-b">
        {#each sorting.sortingNumbers as num, i}
          <div class="flex flex-col items-center">
            <p>{num}</p>
            <div
              class="
                bar
                w-[50px]
                rounded-tl-md
                rounded-tr-md
                {sorting.sortedIndexes?.includes(i) || sorting.allSorted
                ? 'bg-green-600'
                : i === sorting.currentIndex
                  ? 'bg-blue-600'
                  : i === sorting.prevIndex
                    ? 'bg-yellow-600'
                    : 'bg-primary'}
              "
              style:height={num * 20 + 'px'}
            ></div>
          </div>
        {/each}
      </div>
      <div class="flex flex-row gap-2 pt-2">
        {#each sorting.unsortedNumbers as _, i}
          <div class="flex w-[50px] justify-center">
            <p class="text-xs text-slate-400">{i}</p>
          </div>
        {/each}
      </div>
    </Card.Content>
  </Card.Root>
</button>

<style>
  .bar {
    transition: height 200ms;
  }
</style>
