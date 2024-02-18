<script lang="ts">
    import BarChart from './bar-chart.svelte';
    import { allSortingAlgorithms, sortingActive } from '../store/global.state';
    import * as sortingAlgorithmFns from '../helpers/sorting-algorithms';
	import { SortingAlgorithm, type sortingFn } from '../helpers/sorting-types';

    function getSortingFn(alg: SortingAlgorithm) {
        return (sortingAlgorithmFns as any)[alg] as sortingFn;
    }
</script>

<style lang="scss">
    @import '../style/util.scss';
    .charts {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 1rem;
        margin: auto;
        justify-content: center;

        @include screen-lg {
            max-width: 110rem;
        }
    }
</style>

<section class="charts">
    {#each allSortingAlgorithms as algo (algo)}
        {#if $sortingActive.get(algo)}
            <BarChart sortingAlgorithmFn={getSortingFn(algo)} sortingAlgorithm={algo}/>
        {/if}
    {/each}
</section>