<script lang="ts">
  import { sortingMetaData } from "$lib/store/global.state";

  //TODO more info
</script>

<div>
  Ranks:
  {#each $sortingMetaData as [algo, data], i}
    <p>{i + 1}. {algo} sorted numbers: {data.sortedNumbers}</p>
  {/each}
</div>