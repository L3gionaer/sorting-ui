<script lang="ts">
  import { Checkbox } from './ui/checkbox';
  import { Label } from './ui/label';
  import { SortingAlgorithm } from '../helpers/sorting-types';
  import { activeSortingAlgorithmsState } from '../store/sorting-algorithms.state.svelte';

  export let sortingAlgorithm: SortingAlgorithm | 'all';

  function toggleSortingAlgorithm() {
    if (sortingAlgorithm === 'all') {
      activeSortingAlgorithmsState.toggleAllActive();
    } else {
      activeSortingAlgorithmsState.toggleActive(sortingAlgorithm);
    }
  }
</script>

<div class="option">
  <div class="checkbox_container">
    <Checkbox
      onCheckedChange={() => toggleSortingAlgorithm()}
      checked={sortingAlgorithm === 'all'
        ? !!activeSortingAlgorithmsState.allActive
        : !!activeSortingAlgorithmsState.algorithms.get(sortingAlgorithm)}
    />
  </div>
  <Label>{sortingAlgorithm}</Label>
</div>

<style lang="scss">
  .option {
    display: flex;
    align-items: center;

    .checkbox_container {
      margin-right: 1rem;
    }
  }
</style>
