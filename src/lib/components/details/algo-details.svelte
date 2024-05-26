<script lang="ts">
  import {
    sortingHistoryState,
    selectedSortingAlgorithmState
  } from '../../store/sorting-algorithms.state.svelte';
  import Drawer from '../ui/drawer/drawer.svelte';
  import * as Table from '../ui/table';

  //let table: HTMLElement; bind:this={table}
  let autoscroll = false;

  function close() {
    selectedSortingAlgorithmState.selectedAlgorithm = undefined;
    console.log('close');
  }

  $effect(() => {
    console.log('state', selectedSortingAlgorithmState.selectedAlgorithm);
  });
</script>

{#if !!selectedSortingAlgorithmState.selectedAlgorithm}
  <Drawer on:close={close} title={selectedSortingAlgorithmState.selectedAlgorithm}>
    <div class="h-1/2 overflow-y-auto">
      <Table.Root class="h-1/2">
        <Table.Header>
          <Table.Row>
            <Table.Head>Swap Nr.</Table.Head>
            <Table.Head>source index</Table.Head>
            <Table.Head>source value</Table.Head>
            <Table.Head>target index</Table.Head>
            <Table.Head>target value</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each [...(sortingHistoryState.algorithms.get(selectedSortingAlgorithmState.selectedAlgorithm)?.history ?? [])] as swap, index (swap)}
            <Table.Row>
              <Table.Cell>{index}.</Table.Cell>
              <Table.Cell>{swap.prevNumber.index}</Table.Cell>
              <Table.Cell>{swap.prevNumber.value}</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>{swap.curNumber.index}</Table.Cell>
              <Table.Cell>{swap.curNumber.value}</Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </div>
  </Drawer>
{/if}
