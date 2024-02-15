<script lang="ts">
    import { Chip } from '@svelteuidev/core';
    import { SortingAlgorithm } from '../helpers/sorting-types';
    import { sortingAlgorithmsActive } from '../store/global.state';

    export let sortingAlgorithm: SortingAlgorithm;

    function toggleSortingAlgorithm() {
        sortingAlgorithmsActive.toggleAlgorithm(sortingAlgorithm);
    }
</script>

<Chip 
    variant="outline" 
    on:change={() => toggleSortingAlgorithm()} 
    checked={!!$sortingAlgorithmsActive.get(sortingAlgorithm)}
>
    {sortingAlgorithm}
</Chip>