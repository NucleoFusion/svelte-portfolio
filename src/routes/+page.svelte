<script>
  import Navbar from "./navbar.svelte";

  import linkedin from "$lib/assets/linkedin.png";
  import leetcode from "$lib/assets/leetcode.png";
  import resume from "$lib/assets/resume.png";
  import github from "$lib/assets/github.png";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let mount = false;
  onMount(() => {
    mount = true;
  });

  import resumepdf from "$lib/assets/lakshitresume.pdf";
</script>

{#if mount}
  <div class="home-container jetBrainsMono">
    <div class="name" in:fly={{ x: -200, duration: 850 }}>
      <h1>Lakshit Singh</h1>
    </div>
    <div class="about" in:fly={{ x: 200, duration: 850 }}>
      A software developer specializing in Back-End Development from Delhi,
      India.
    </div>
    <div class="icons" in:fly={{ x: -200, duration: 850 }}>
      <a href={resumepdf} download><img src={resume} alt="resume" /></a>
      <a href="https://github.com/NucleoFusion"
        ><img src={github} alt="github" /></a
      >
      <a href="https://www.linkedin.com/in/lakshit-singh-41583a287/"
        ><img src={linkedin} alt="linkedin" /></a
      >
      <a href="https://leetcode.com/u/NucleoFusion/"
        ><img src={leetcode} alt="leetcode" /></a
      >
    </div>
  </div>
{/if}

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
