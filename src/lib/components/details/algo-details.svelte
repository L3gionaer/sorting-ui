<script lang="ts">
  import { sortingMetaData, selectedSortingAlgorithm } from '../../store/sorting.state';
  import Drawer from '$lib/components/ui/drawer/drawer.svelte';
  import * as Table from '$lib/components/ui/table';
  import { onMount } from 'svelte';

  let isOpen = $state(true);
  let table: HTMLElement;
  let autoscroll = false;

  function close() {
    selectedSortingAlgorithm.set(undefined);
    console.log('close');
    isOpen = false;
  }

  $effect(() => {
    console.log('effect');
    // implement after switching to runes
    // if (table && !autoscroll) {
    //   const scrollableDistance = table.scrollHeight - table.offsetHeight;
    //   autoscroll = table.scrollTop > scrollableDistance - 20;
    // }

    // if (autoscroll) {
    //   table.scrollTo(0, table.scrollHeight);
    // }
  });

  onMount(() => {
    const unsub = selectedSortingAlgorithm.subscribe((algo) => {
      isOpen = !!algo;
    });

    return () => {
      unsub();
    };
  });
</script>

{#if isOpen && $selectedSortingAlgorithm}
  <Drawer on:close={close} title={$selectedSortingAlgorithm}>
    <div class="h-1/2 overflow-y-auto" bind:this={table}>
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
          {#each [...($sortingMetaData.get($selectedSortingAlgorithm)?.history ?? [])] as swap, index (swap)}
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
