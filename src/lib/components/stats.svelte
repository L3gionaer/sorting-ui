<script lang="ts">
  import * as Table from './ui/table';
  import { sortingHistoryState } from '../store/sorting-algorithms.state.svelte';
  //TODO more info
</script>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head>Order</Table.Head>
      <Table.Head>Sorting Algorithm Name</Table.Head>
      <Table.Head>Sorted Numbers</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each sortingHistoryState.algorithms as [algo, data], i}
      <Table.Row>
        <Table.Cell>{i + 1}</Table.Cell>
        <Table.Cell>{algo}</Table.Cell>
        <Table.Cell>{data.sortedNumbers}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>
