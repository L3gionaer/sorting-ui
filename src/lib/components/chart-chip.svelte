<script lang="ts">
    import { Chip } from '@svelteuidev/core';
    import { SortingAlgorithm } from '../helpers/sorting-types';
    import { sortingActive } from '../store/global.state';

    export let sortingAlgorithm: SortingAlgorithm;

    function toggleSortingAlgorithm() {
        sortingActive.toggleAlgorithm(sortingAlgorithm);
    }
</script>

<Chip 
    variant="outline" 
    on:change={() => toggleSortingAlgorithm()} 
    checked={!!$sortingActive.get(sortingAlgorithm)}
>
    {sortingAlgorithm}
</Chip>