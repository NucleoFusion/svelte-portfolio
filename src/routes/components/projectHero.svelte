<script>
  import projects from "./projects.json";

  import { fade } from "svelte/transition";

  let { projectName, floater } = $props();

  let currData = projects[projectName];
</script>

<div
  class="projectData"
  in:fade={{ delay: 400, duration: 300 }}
  out:fade={window.innerWidth > 830 ? { duration: 300 } : { duration: 0 }}
>
  <h1>{currData.title}</h1>
  <p>{currData.descr}</p>
  <div class="stack">
    {#each currData.stack as tech}
      <h3>{tech}</h3>
    {/each}
  </div>
  {#if floater}
    <div>
      <button>View Details</button>
    </div>
  {/if}
  {#if currData.onGoing && floater}
    <div class="ongoing">
      <h2>ONGOING</h2>
    </div>
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

    font-size: 1.75vh;
    color: #c6d0f5;

    border: solid #c6d0f5 1px;
    background: transparent;

    transition: all 0.3s ease-in-out;
  }

  .projectData button:hover {
    background: var(--secondary);
    color: var(--bg-color);
    cursor: pointer;
  }

  .projectData > div:has(button) {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .ongoing {
    position: absolute;
    top: 2vh;
    right: 1vw;

    background: orange;
    color: var(--bg-color);

    padding: 0vh 0.5vw;

    border-radius: 10px;
  }

  @media (max-width: 1800px) {
    .projectData button {
      width: 15vw;
    }
  }

  @media (max-width: 830px) {
    .projectData button {
      width: 30vw;
    }
  }
</style>
