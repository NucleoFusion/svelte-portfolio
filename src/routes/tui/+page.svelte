<script>
  import TuiInput from "../components/tuiInput.svelte";
  import TuiOutput from "../components/tuiOutput.svelte";
  import tree from "./FolderTree.json";
  import interpreter from "./Interpreter.js";
  import Man from "./man/man.svelte";

  let history = $state([]);
  let curr = $state(tree);
  let displayMan = $state(false);
  let manVar = $state("");

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

    if (res.do === "m") {
      toggleMan(res.name);
    }
  }

  function toggleMan(name) {
    manVar = name;
    displayMan = !displayMan;
  }

  function quitMan() {
    displayMan = false;
  }
</script>

<div class="terminal-container jetBrainsMono">
  <div class="terminal">
    {#each history as obj}
      <TuiOutput {obj} />
    {/each}
    <TuiInput fn={execute} name={curr.id} />
    {#key displayMan}
      {#if displayMan}
        <Man name={manVar} fn={quitMan} />
      {/if}
    {/key}
  </div>
</div>
{#key displayMan}
  {#if displayMan}
    <div class="black-bg"></div>
  {/if}
{/key}

<style>
  @import "./tui.css";
</style>
