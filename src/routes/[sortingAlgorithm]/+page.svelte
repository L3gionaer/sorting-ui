<script lang="ts">
  import { page } from '$app/stores';
  import { SortingAlgorithm } from '$lib/helpers/sorting-types';
  import { sortingMetaData } from "$lib/store/global.state";

  $: sortingAlgorithm = $page.params.sortingAlgorithm as SortingAlgorithm;
</script>

<h2>{ sortingAlgorithm }</h2>

<table>
  <thead>
    <tr>
      <th>Swap Nr.</th>
      <th>source index</th>
      <th>source value</th>
      <th></th>
      <th>target index</th>
      <th>target value</th>
    </tr>
  </thead>
  <tbody>
    {#each [...$sortingMetaData.get(sortingAlgorithm)?.history ?? []] as swap, index (swap)}
    <tr>
      <td>{index}. </td>
      <td>{swap.prevNumber.index}</td>
      <td>{swap.prevNumber.value}</td>
      <td></td>
      <td>{swap.curNumber.index}</td>
      <td>{swap.curNumber.value}</td>
    </tr>
    {/each}
  </tbody>
</table>