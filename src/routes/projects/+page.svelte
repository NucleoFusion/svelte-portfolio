<script>
  import ProjectHero from "../components/projectHero.svelte";
  import left from "$lib/assets/left-light.png";
  import right from "$lib/assets/right-light.png";
  import { fade } from "svelte/transition";

  //TODO: this.responsive
  //TODO: navbar auto close

  let projects = ["transpohub", "footballapi", "lapisblog", "lapisstore"];

  let curr = $state(1);
  let prev = $derived(curr - 1);
  let next = $derived(curr + 1);

  function increment() {
    if (curr < 3) {
      curr += 1;
    }
  }
  function decrement() {
    if (curr > 0) {
      curr -= 1;
    }
  }
</script>

<div class="projects-container jetBrainsMono">
  <div class="floater">
    <button onclick={decrement}>
      <img alt="arrow left" src={left} />
    </button>
    {#key curr}
      <ProjectHero projectName={projects[curr]} floater={true} />
    {/key}
    <button onclick={increment}><img alt="arrow right" src={right} /></button>
  </div>
  {#if prev >= 0}
    <div
      class="prev"
      out:fade={{ duration: 300 }}
      in:fade={{ delay: 100, duration: 300 }}
    >
      {#key prev}
        <ProjectHero projectName={projects[prev]} />
      {/key}
    </div>
  {/if}
  {#if next <= 3}
    <div
      class="next"
      out:fade={{ duration: 300 }}
      in:fade={{ delay: 100, duration: 300 }}
    >
      {#key next}
        <ProjectHero projectName={projects[next]} />
      {/key}
    </div>
  {/if}
</div>

<style>
  @import "./projects.css";
</style>
