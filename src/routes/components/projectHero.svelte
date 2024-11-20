<script>
  import projects from "./projects.json";

  import { fade } from "svelte/transition";

  let { projectName } = $props();

  let currData = projects[projectName];
</script>

<div class="projectData" in:fade={{ duration: 2000 }}>
  <h1>{currData.title}</h1>
  <p>{currData.descr}</p>
  <div class="stack">
    {#each currData.stack as tech}
      <h3>{tech}</h3>
    {/each}
  </div>
  <div>
    <button>View Details</button>
  </div>
  {#if currData.onGoing}
    <div></div>
    <h1>ONGOING</h1>
  {/if}
</div>

<style>
  .projectData {
    height: 64vh;

    padding: 2vh 3vw;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 0.5fr 1fr;

    text-align: center;
  }

  .stack {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
  }

  .projectData button {
    width: 7vw;
    height: 5vh;

    border-radius: 10px;

    font-size: 1.5vh;
    color: #c6d0f5;

    border: solid #c6d0f5 1px;
    background: transparent;
  }

  .projectData > div:has(button) {
    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>
