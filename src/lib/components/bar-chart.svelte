<script lang="ts">
    import { Card } from '@svelteuidev/core';
    import { useSorting } from '../hooks/useSorting';
	import type { SortingAlgorithm, sortingFn } from '../helpers/sorting-types';

    export let sortingAlgorithmFn: sortingFn;
    export let sortingAlgorithm: SortingAlgorithm;

    const {
        sortingNumbers,
        prevIndex,
        currentIndex,
        allSorted,
        swapCount,
        compareCount,
        isSorted,
    } = useSorting(sortingAlgorithmFn, sortingAlgorithm);
</script>

<style>
    .chart {
        display: flex;
        align-items: flex-end;
    }

    .item {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: height 200ms;
    }
</style>

<Card>
    <p>{sortingAlgorithm}</p>
    <div>compares: {$compareCount}</div>
    <div>swapped: {$swapCount}</div>
    <div class="chart">
        {#each $sortingNumbers as num, i}
            <div 
                class="item" 
                style:height="{num * 20 + 'px'}" 
                style:background-color="{
                    isSorted(i) || $allSorted ? 'green' : (i === $currentIndex ? 'yellow' : i === $prevIndex ? 'orange': 'grey' )}"
            >
                {num}
            </div>
        {/each}
    </div>
</Card>