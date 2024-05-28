<script lang="ts">
  import MoveHorizontal from 'lucide-svelte/icons/move-horizontal';

  import {
    sortingHistoryState,
    selectedSortingAlgorithmState
  } from '../../store/sorting-algorithms.state.svelte';
  import { unsortedNumbersState } from '../../store/unsorted-numbers.state.svelte';
  import { sortingStatusState } from '../../store/sorting-status.state.svelte';
  import { type SwapHistory } from '../../helpers/sorting-types';
  import Drawer from '../ui/drawer/drawer.svelte';
  import * as Table from '../ui/table';

  let table: HTMLElement;

  function close() {
    selectedSortingAlgorithmState.selectedAlgorithm = undefined;
  }

  $effect(() => {
    const history = sortingHistoryState.algorithms;

    if (!!table) {
      table.scrollTop = table.scrollHeight;
    }
  });

  function resetFromHistory(index: number) {
    console.log('hover');
    sortingHistoryState.selectedIndex = index;
    sortingStatusState.resetToHistory();
  }

  function resetFromHover() {
    sortingHistoryState.selectedIndex =
      sortingHistoryState.getHistory(selectedSortingAlgorithmState.selectedAlgorithm!)!.length - 1; //TODO
    sortingStatusState.resetToHistory();
  }
</script>

{#if !!selectedSortingAlgorithmState.selectedAlgorithm}
  <Drawer on:close={close} title={selectedSortingAlgorithmState.selectedAlgorithm}>
    <div class="h-1/2 overflow-y-auto" bind:this={table}>
      <Table.Root class="h-1/2">
        <Table.Header class="sticky-header">
          <Table.Row>
            <Table.Head>Nr.</Table.Head>
            <Table.Head>index</Table.Head>
            <Table.Head>value</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body on:mouseleave={() => resetFromHover()}>
          {#each [...(sortingHistoryState.algorithms.get(selectedSortingAlgorithmState.selectedAlgorithm)?.history ?? [])] as swap, index (swap)}
            <Table.Row on:mouseenter={() => resetFromHistory(index)}>
              <Table.Cell>{index + 1}.</Table.Cell>
              <Table.Cell>
                <div class="flex">
                  {swap.prevNumber.index}
                  <MoveHorizontal class="px-1" />
                  {swap.curNumber.index}
                </div>
              </Table.Cell>
              <Table.Cell>
                <div class="flex">
                  {swap.prevNumber.value} /
                  {swap.curNumber.value}
                </div>
              </Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </div>
  </Drawer>
{/if}

<style lang="scss">
  .sticky-header {
    position: sticky;
  }
</style>
