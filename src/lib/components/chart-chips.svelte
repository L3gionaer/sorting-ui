<script lang="ts">
    import { sortingAlgorithmsActive } from '../store/global.state';
    import ChartChip from './chart-chip.svelte';
</script>

<div>
    {#each [...$sortingAlgorithmsActive] as [algo] (algo)}
        <ChartChip sortingAlgorithm={algo}></ChartChip>
    {/each}
</div>