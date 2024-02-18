<script lang="ts">
  import Charts from '$lib/components/charts.svelte';
  import Controls from '$lib/components/controls.svelte';
  import Stats from '$lib/components/stats.svelte';
  import Tabs from '$lib/components/tabs.svelte';
  import { TabName } from '$lib/helpers/global-types';

  let selectedTab = 'charts';

  function onTabSwitch(event: CustomEvent<{ name: TabName }>) {
    selectedTab = event.detail.name;
  }
</script>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .hide {
    display: none;
  }
</style>

<div>
  <Controls />
  <Tabs on:tabSwitch={onTabSwitch}/>
  
  {#if selectedTab === 'stats'}
    <Stats />
  {/if}

  <div class:hide={selectedTab === 'stats'}>
    <Charts />
  </div>
</div>
