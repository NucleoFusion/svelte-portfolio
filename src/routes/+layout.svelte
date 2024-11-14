<script>
  import Navbar from "./navbar.svelte";

  import { onMount } from "svelte";

  let mount = $state(false);
  onMount(() => (mount = true));

  let { children } = $props();
</script>

{#if mount}
  <Navbar />
{/if}

{@render children()}

<style>
  /* Global Styles */
  :global(body) {
    background-color: #303446;
  }

  :global(:root) {
    --bg-color: #303446;
    --secondary: #b7bdf8;
  }

  :global(.jetBrainsMono) {
    font-family: "JetBrains Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
  }

  :global(.bg) {
    background-color: black;
    opacity: 0;
    z-index: -10;

    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
  }
</style>
