<script lang="ts">
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Label } from '$lib/components/ui/label';
  import { SortingAlgorithm } from '../helpers/sorting-types';
  import { sortingActive } from '../store/sorting.state';

  export let sortingAlgorithm: SortingAlgorithm | 'all';

  function toggleSortingAlgorithm() {
    if (sortingAlgorithm === 'all') {
      sortingActive.toggleAll();
    } else {
      sortingActive.toggleAlgorithm(sortingAlgorithm);
    }
  }

  function getAllAlgosActive(algos: boolean[]) {
    return algos.every((val) => !!val);
  }
</script>

<div class="option">
  <div class="checkbox_container">
    <Checkbox
      onCheckedChange={() => toggleSortingAlgorithm()}
      checked={sortingAlgorithm === 'all'
        ? !!getAllAlgosActive([...$sortingActive.values()])
        : !!$sortingActive.get(sortingAlgorithm)}
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
