<script>
  import ProjectHero from "../components/projectHero.svelte";
  import left from "$lib/assets/left-light.png";
  import right from "$lib/assets/right-light.png";

  let projects = [
    "transpohub",
    "footballAPI",
    "lapisBlog",
    "e-comm",
    "lapisOAuth",
  ];

  let curr = $state(1);
  let prev = $derived(curr - 1);
  let next = $derived(curr + 1);

  function increment() {
    if (curr < 4) {
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
      <ProjectHero projectName={projects[curr]} />
    {/key}
    <button onclick={increment}><img alt="arrow right" src={right} /></button>
  </div>
  {#if prev >= 0}
    {#key prev}
      <div class="prev">
        <ProjectHero projectName={projects[prev]} />
      </div>
    {/key}
  {/if}
  {#if next <= 4}
    {#key next}
      <div class="next">
        <ProjectHero projectName={projects[next]} />
      </div>
    {/key}
  {/if}
</div>

<style>
  @import "./projects.css";
</style>
