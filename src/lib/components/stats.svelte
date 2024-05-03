<script lang="ts">
  import * as Table from "$lib/components/ui/table";
  import { sortingMetaData } from "$lib/store/global.state";

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
    {#each $sortingMetaData as [algo, data], i}
      <Table.Row>
        <Table.Cell>{i + 1}</Table.Cell>
        <Table.Cell>{algo}</Table.Cell>
        <Table.Cell>{data.sortedNumbers}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>