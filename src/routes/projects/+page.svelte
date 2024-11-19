<script>
  let projects = [
    "transpohub",
    "footballAPI",
    "shortIt",
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
    <button onclick={decrement}>{"<"}</button>
    <h1>{curr}</h1>
    <button onclick={increment}>{">"}</button>
  </div>
  {#if prev > 0}
    <div>{prev}</div>
  {/if}
  {#if curr < 4}
    <div>{next}</div>
  {/if}
</div>

<style>
  @import "./projects.css";
</style>
