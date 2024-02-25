<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { sortingActive } from '../store/global.state';
    import ChartChip from './chart-chip.svelte';
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
    <DropdownMenu.Content>
        {#each [...$sortingActive] as [algo] (algo)}
            <ChartChip sortingAlgorithm={algo}></ChartChip>
        {/each}
    </DropdownMenu.Content>
</DropdownMenu.Root>