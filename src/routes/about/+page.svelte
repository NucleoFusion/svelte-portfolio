<script>
  import { onMount } from "svelte";

  let mount = $state(false);
  onMount(() => (mount = true));
</script>

{#if mount}
  <div class="main-container jetBrainsMono">
    <div class="descr">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet
      vero, harum qui id adipisci dicta suscipit, odio et nisi labore a
      accusantium facere eum aspernatur expedita veritatis, quis nam.
    </div>
    <div class="experience">
      <h2>Experience</h2>
      <div class="experience-div">
        <div>
          <h3>
            Saas Implementation and API Intgrations for CRM - Courtyard Farms
          </h3>
          <h3>May - July, 2024</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          soluta, vel repellat atque explicabo nulla laboriosam odit a dolorem
          totam! Soluta dolores reiciendis numquam assumenda aliquam eveniet
          doloremque deserunt asperiores!
        </p>
      </div>
    </div>
    <div>Skills</div>
    <div>Education</div>
  </div>
{/if}

<style>
  @import "./about.css";
</style>
