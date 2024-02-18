<script lang="ts">
    import { sortingActive } from '../store/global.state';
    import ChartChip from './chart-chip.svelte';
</script>

<div>
    {#each [...$sortingActive] as [algo] (algo)}
        <ChartChip sortingAlgorithm={algo}></ChartChip>
    {/each}
</div>