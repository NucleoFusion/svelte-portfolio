<script>
  import TuiInput from "../components/tuiInput.svelte";
  import TuiOutput from "../components/tuiOutput.svelte";
  import tree from "./FolderTree.json";
  import interpreter from "./Interpreter.js";

  let history = $state([]);
  let curr = $state(tree);

  function execute(a) {
    let obj = {
      input: a,
      output: "",
      dir: curr.id,
    };

    let res = interpreter(a, curr);
    obj.output = res.op;
    if (res.curr !== null) {
      curr = res.curr;
    }

    history.push(obj);

    if (res.do === "c") {
      history = [];
    }

    if (res.do === "g") {
      window.location.href = res.link;
    }
  }
</script>

<div class="terminal-container jetBrainsMono">
  <div class="terminal">
    {#each history as obj}
      <TuiOutput {obj} />
    {/each}
    <TuiInput fn={execute} name={curr.id} />
  </div>
</div>

<style>
  @import "./tui.css";
</style>
