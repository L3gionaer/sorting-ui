<script lang="ts">
    import { base } from '$app/paths';
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
    .bar {
        transition: height 200ms;
    }
</style>

<a href="{base}/{sortingAlgorithm}">
    <Card.Root class="flex flex-col h-[400px]">
		<Card.Header class="flex-row space-y-0">
			<Card.Title class="leading-0">{sortingAlgorithm}</Card.Title>
			<div class="ml-auto mt-0">
				<p>compares: {$compareCount}</p>
			    <p>swapped: {$swapCount}</p>
			</div>
		</Card.Header>
        <Card.Content class="mt-auto">
            <div class="flex items-end gap-2 border-b">
                {#each $sortingNumbers as num, i}
                    <div class="flex flex-col items-center">
                        <p>{num}</p>
                        <div 
                            class="
                                rounded-tr-md 
                                rounded-tl-md 
                                w-[50px] 
                                bar 
                                {isSorted(i) || $allSorted ? 'bg-green-600' : (i === $currentIndex ? 'bg-blue-600' : i === $prevIndex ? 'bg-yellow-600': 'bg-primary' )}" 
                            style:height="{num * 20 + 'px'}" 
                        ></div>
                    </div>
                {/each}
            </div>
            <div class="flex flex-row gap-2 pt-2">
                {#each $sortingNumbers as _, i }
                    <div class="w-[50px] flex justify-center">
                        <p class="text-xs text-slate-400">{i}</p>
                    </div>
                {/each}
            </div>
        </Card.Content>
    </Card.Root>
</a>