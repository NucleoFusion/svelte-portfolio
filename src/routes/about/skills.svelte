<script>
  let current = $state(0);
  let max = 3;

  $effect(() => {
    if (current == max) {
      current = 0;
    }
    if (current == -1) {
      current = max - 1;
    }
  });

  let increment = () => (current += 1);
  let decrement = () => (current -= 1);
</script>

<div class="skills-container">
  <button onclick={increment}>{"<"}</button>
  <div>
    {#if current == 0}
      <h1>Languages</h1>
    {:else if current == 1}
      <h1>Frameworks</h1>
    {:else if current == 2}
      <h1>Tools</h1>
    {/if}
  </div>
  <button onclick={decrement}>{">"}</button>
</div>

<style>
  @import "./skills.css";
</style>
