<script lang="ts">
  import '../app.pcss';
  import { ModeWatcher } from 'mode-watcher';
  import Charts from '../lib/components/charts.svelte';
  import Controls from '../lib/components/controls.svelte';
  import Stats from '../lib/components/stats.svelte';
  import Tabs from '../lib/components/tabs.svelte';
  import { TabName } from '../lib/helpers/global-types';
  import AlgoDetails from '../lib/components/details/algo-details.svelte';

  let selectedTab = 'charts';

  function onTabSwitch(event: CustomEvent<{ name: TabName }>) {
    selectedTab = event.detail.name;
  }
</script>

<ModeWatcher />

<main>
  <Controls></Controls>
  <Tabs on:tabSwitch={onTabSwitch}></Tabs>

  {#if selectedTab === 'stats'}
    <Stats></Stats>
  {/if}

  <div class:hide={selectedTab === 'stats'}>
    <Charts></Charts>
  </div>

  <AlgoDetails></AlgoDetails>

  <slot />
</main>

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
