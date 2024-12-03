<script>
  import TermLayout from "./termLayout.svelte";
  let { obj } = $props();
</script>

<div class="jetBrainsMono output-inp">
  <TermLayout name={obj.dir} />
  <div class="term-input">
    <p>{">"}</p>
    <div class="prev-input">{obj.input}</div>
  </div>
</div>
<div class="output-outp" style="{`grid-row: span ${obj.output.length}`};">
  {#each obj.output as op}
    <p>{op}</p>
  {/each}
</div>

<style>
  .output-inp,
  .output-outp {
    color: var(--secondary);
  }

  .output-inp {
    grid-row: span 2;
  }

  .output-outp {
    margin-top: 0.5vh;
    font-weight: 700;
  }

  .prev-input {
    margin-left: 0.75vw;
  }

  .output-outp p {
    margin-top: 0;
  }
</style>
