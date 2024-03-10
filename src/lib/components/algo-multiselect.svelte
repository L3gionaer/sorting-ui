<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Button } from "$lib/components/ui/button";
    import { sortingActive } from '../store/global.state';
    import AlgoOption from './algo-option.svelte';
</script>

<style lang="scss">
    .dropdown_content {
        display: flex;
        flex-direction: column;
    }
</style>

<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
        <Button builders={[builder]} variant="outline">Select Algorithm</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
        <div class="dropdown_content">
            <AlgoOption sortingAlgorithm="all"></AlgoOption>
            {#each [...$sortingActive] as [algo] (algo)}
                <AlgoOption sortingAlgorithm={algo}></AlgoOption>
            {/each}
        </div>
    </DropdownMenu.Content>
</DropdownMenu.Root>