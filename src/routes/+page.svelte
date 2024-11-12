<script>
  import Navbar from "./navbar.svelte";
</script>

<Navbar />

<style>
  @import "./home.css";

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
</style>
