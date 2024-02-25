<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import { createEventDispatcher } from "svelte";
  import { TabName } from '$lib/helpers/global-types';

  const dispatch = createEventDispatcher<{ tabSwitch: { name: TabName } }>();

  const tabNames = Object.values(TabName)

  function onTabChange(event) {
    console.log('event', event)
    dispatch('tabSwitch', {
      name: event
    })
  }
</script>

<Tabs.Root onValueChange={(event) => onTabChange(event)}>
  <Tabs.List>
    {#each tabNames as tabName}
      <Tabs.Trigger value={tabName}>{tabName}</Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>