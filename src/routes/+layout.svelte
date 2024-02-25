<script lang="ts">
  import "../app.pcss";
  import Charts from '$lib/components/charts.svelte';
  import Controls from '$lib/components/controls.svelte';
  import Stats from '$lib/components/stats.svelte';
  import Tabs from '$lib/components/tabs.svelte';
  import { TabName } from '$lib/helpers/global-types';

  let selectedTab = 'charts';

  function onTabSwitch(event: CustomEvent<{ name: TabName }>) {
    console.log('switch', event);
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
  <Controls></Controls>
  <Tabs on:tabSwitch="{onTabSwitch}"></Tabs>

  {#if selectedTab === 'stats'}
    <Stats></Stats>
  {/if}

  <div class:hide="{selectedTab === 'stats'}">
    <Charts></Charts>
  </div>

  <slot></slot>
</div>
