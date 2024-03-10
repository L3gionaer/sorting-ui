<script lang="ts">
    import * as Card from "$lib/components/ui/card";
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
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: height 200ms;
    }
</style>

<a href={"/" + sortingAlgorithm}>
    <Card.Root>
			<Card.Header class="flex-row space-y-0">
				<Card.Title class="leading-0">{sortingAlgorithm}</Card.Title>
				<div class="ml-auto mt-0">
					<p>compares: {$compareCount}</p>
					<p>swapped: {$swapCount}</p>
				</div>
			</Card.Header>
        <Card.Content>
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
        </Card.Content>
    </Card.Root>
</a>