<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { SortingStatus } from '../helpers/sorting-types';
  import { numbersToSort, setSortingInterval, sortingStatus } from '../store/global.state';
  import AlgoMultiselect from "./algo-multiselect.svelte";
  import ModeToggle from "./mode-toggle.svelte";

  function getStartStopText(state: SortingStatus) {
    switch (state) {
      case SortingStatus.STARTED:
        return 'pause';
      case SortingStatus.STOPPED:
        return 'play';
      case SortingStatus.RESET:
        return 'play';
      case SortingStatus.EMPTY_STATUS:
        return 'play';
      }
  }

  function generate() {
    sortingStatus.set(SortingStatus.EMPTY_STATUS);
    numbersToSort.generate();
    sortingStatus.set(SortingStatus.RESET);
  }
</script>

<style lang="scss">
  section {
    display: flex;
    gap: 1rem;
    width: 100%;
    margin-bottom: 5rem;

    .toggle_container {
      margin-left: auto;
    }
  }
</style>

<section>
  <Button on:click={() => setSortingInterval(200)}>Change interval</Button>
  <Button on:click={() => sortingStatus.updateStatus($sortingStatus)}>{getStartStopText($sortingStatus)}</Button>
  <Button on:click={() => sortingStatus.set(SortingStatus.RESET)}>reset</Button>
  <Button on:click={() => generate()}>Generate</Button>
  <AlgoMultiselect></AlgoMultiselect>
  <div class="toggle_container">
    <ModeToggle></ModeToggle>
  </div>
</section>