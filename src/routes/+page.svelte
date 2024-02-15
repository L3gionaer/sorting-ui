<script lang="ts">
    import Charts from '$lib/components/charts.svelte';
    import Controls from '$lib/components/controls.svelte';
</script>
  
<style lang="scss">
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }
</style>

<Controls />
<Charts />
