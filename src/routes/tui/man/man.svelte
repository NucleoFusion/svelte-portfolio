<script>
  import manData from "$lib/data.json";
  let { name, fn } = $props();

  function quit(e) {
    if (e.keyCode === 27) {
      fn();
    }
  }

  $effect(() => {
    document.addEventListener("keydown", quit);
  });
</script>

<div class="man-div">
  <h2>{manData[name].title}</h2>
  {#each manData[name].data as obj}
    <h3 class="man-heading">{obj.title}</h3>
    <p class="man-para">{@html obj.content}</p>
  {/each}
</div>

<style>
  .man-div {
    position: absolute;

    width: 86vw;
    height: 60vh;

    z-index: 13;

    bottom: 4vh;
    left: 2vw;

    background-color: #232634;
    color: var(--secondary);

    overflow-y: scroll;
  }

  .man-div > *:not(:first-child) {
    width: 50vw;
  }

  .man-div h2 {
    text-align: center;
  }

  .man-heading {
    margin-left: 3vw;
  }

  .man-para {
    margin-left: 5vw;
  }
</style>
