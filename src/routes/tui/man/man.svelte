<script>
  import manData from "./man.json";
  let { name, fn } = $props();

  function quit(e) {
    if (e.keyCode === 27) {
      fn();
    }
  }

  document.addEventListener("keydown", quit);
</script>

<div class="man-div">
  <h2>{name}</h2>
  {#each manData[name] as obj}
    <h3 class="man-heading">{onj.title}</h3>
    <p class="man-para">{obj.content}</p>
  {/each}
</div>

<style>
  .man-div {
    position: absolute;

    width: 86vw;
    height: 60vh;

    z-index: 13;

    bottom: 0;
    left: 0;

    background-color: red;
  }
</style>
