<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import X from 'lucide-svelte/icons/x';

  import { clickOutside } from '../../../helpers/custom-events/click-outside';
  import Button from '../button/button.svelte';

  export let title: string;

  let open = true;
  const dispatch = createEventDispatcher();

  function close() {
    open = false;

    setTimeout(() => {
      dispatch('close');
    }, 300);
  }
</script>

<div class="drawer-backdrop {open ? 'open' : 'closed'}"></div>
<div
  use:clickOutside
  on:clickOutside={close}
  class="drawer bg-background {open ? 'open' : 'closed'}"
>
  <div class="mb-5 flex flex-row items-center">
    <h1 class="text-lg font-semibold">{title}</h1>
    <Button class="ml-auto" variant="ghost" on:click={close}><X /></Button>
  </div>
  <slot />
</div>

<style lang="scss">
  .drawer-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.8;
    height: 100%;
    width: 100%;
    transition: opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1);
    background-color: black;
    z-index: 9998;

    &.open {
      opacity: 0.8;
    }

    &.closed {
      opacity: 0;
    }
  }

  .drawer {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 400px;
    height: 100%;
    transform: translateX(-100%);
    box-shadow: 2px 0px 8px rgb(0, 0, 0, 0.125);
    transition: transform ease-out 0.3s;
    animation: 0.3s ease-in 1 slideInFromLeft;
    overflow-y: auto;

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }

    &.open {
      transform: translateX(0%);
    }

    &.closed {
      transform: translateX(-100%);
    }
  }
</style>
