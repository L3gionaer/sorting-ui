<script lang="ts">
  import { Tabs } from '@svelteuidev/core';
  import { createEventDispatcher } from "svelte";
  import { TabName } from '$lib/helpers/global-types';

  const dispatch = createEventDispatcher<{ tabSwitch: { name: TabName } }>();

  let active = 0;
  const tabNames = Object.values(TabName)

  function onTabChange(event) {
    const { index } = event.detail;

    dispatch('tabSwitch', {
      name: tabNames[index]
    })
  }
</script>

<Tabs bind:active on:change={onTabChange}>
  {#each tabNames as tabName}
    <Tabs.Tab label={tabName}></Tabs.Tab>
  {/each}
</Tabs>