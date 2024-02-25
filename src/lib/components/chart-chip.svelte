<script lang="ts">
    import { Checkbox } from "$lib/components/ui/checkbox";
    import { Label } from "$lib/components/ui/label";
    import { SortingAlgorithm } from '../helpers/sorting-types';
    import { sortingActive } from '../store/global.state';

    export let sortingAlgorithm: SortingAlgorithm;

    function toggleSortingAlgorithm() {
        sortingActive.toggleAlgorithm(sortingAlgorithm);
    }
</script>

<Checkbox
    onCheckedChange={() => toggleSortingAlgorithm()} 
    checked={!!$sortingActive.get(sortingAlgorithm)}
/>
<Label>{sortingAlgorithm}</Label>
