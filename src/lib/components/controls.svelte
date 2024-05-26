<script lang="ts">
  import { Button } from './ui/button';
  import { SortingStatus } from '../helpers/sorting-types';
  import { sortingIntervalState } from '../store/sorting-interval.state.svelte';
  import { sortingStatusState } from '../store/sorting-status.state.svelte';
  import { unsortedNumbersState } from '../store/unsorted-numbers.state.svelte';
  import AlgoMultiselect from './algo-multiselect.svelte';
  import ModeToggle from './mode-toggle.svelte';

  const startStopText = $derived.by(() => {
    switch (sortingStatusState.status) {
      case SortingStatus.STARTED:
        return 'pause';
      case SortingStatus.STOPPED:
        return 'play';
      case SortingStatus.RESET:
        return 'play';
      case SortingStatus.EMPTY_STATUS:
        return 'play';
    }
  });

  function reset() {
    sortingStatusState.reset();
  }

  function generate() {
    //TODO only one status for that
    sortingStatusState.empty();
    unsortedNumbersState.generate();
    sortingStatusState.reset();
  }

  function changeInterval() {
    //TODO fine grained
    sortingIntervalState.interval = 200;
  }
</script>

<section>
  <Button on:click={() => changeInterval()}>Change interval</Button>
  <Button on:click={() => sortingStatusState.toggleStatus()}>
    {startStopText}
  </Button>
  <Button on:click={() => reset()}>reset</Button>
  <Button on:click={() => generate()}>Generate</Button>
  <AlgoMultiselect></AlgoMultiselect>
  <div class="toggle_container">
    <ModeToggle></ModeToggle>
  </div>
</section>

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
