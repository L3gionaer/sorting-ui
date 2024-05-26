<script lang="ts">
  import ChevronDown from 'lucide-svelte/icons/chevron-down';
  import * as DropdownMenu from './ui/dropdown-menu';
  import { Button } from './ui/button';
  import { activeSortingAlgorithmsState } from '../store/sorting-algorithms.state.svelte';
  import AlgoOption from './algo-option.svelte';
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} class="flex flex-row" variant="outline">
      Select Algorithm
      <ChevronDown class="ml-5"></ChevronDown>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <div class="dropdown_content">
      <AlgoOption sortingAlgorithm="all"></AlgoOption>
      {#each [...activeSortingAlgorithmsState.algorithms] as [algo] (algo)}
        <AlgoOption sortingAlgorithm={algo}></AlgoOption>
      {/each}
    </div>
  </DropdownMenu.Content>
</DropdownMenu.Root>

<style lang="scss">
  .dropdown_content {
    display: flex;
    flex-direction: column;
  }
</style>
