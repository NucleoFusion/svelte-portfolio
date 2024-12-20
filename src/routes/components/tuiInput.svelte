<script>
  import TermLayout from "./termLayout.svelte";

  let { fn, name } = $props();
</script>

<div class="term-line">
  <TermLayout {name} />
  <div class="term-input active">
    <p>
      {">"}
    </p>
    <input
      name="input"
      class="jetBrainsMono"
      onkeydown={(e) => {
        if (e.key === "Enter") {
          let element = document.querySelector(".active input[name='input']");
          let val = element.value;
          element.value = "";
          fn(val);
          e.target.blur();
        }
      }}
    />
  </div>
</div>

<style>
</style>
