<script>
  import { onMount } from "svelte";
  import Skills from "./skills.svelte";

  let mount = $state(false);
  onMount(() => (mount = true));
</script>

{#if mount}
  <div class="main-container jetBrainsMono">
    <div class="descr">
      <h2>Hi!</h2>
      <p>
        I am a Software Developer who specializes in Backend Development, I am
        fluent in working with Go, Node, C++, Python and Also have know React
        and Svelte For UI Development.
      </p>
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
    <Skills />
    <div class="education">
      <h2>Education</h2>
      <div class="edu-div">
        <div>
          <h3>Bachelors of Science in Computer Science</h3>
          <h3>2023-27</h3>
        </div>
        <div>
          <h4>University of Delhi</h4>
          <h5>Grade: In Progress</h5>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  @import "./about.css";
</style>
