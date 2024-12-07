<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import github from "$lib/assets/github.png";
  import redirect from "$lib/assets/redirect.png";

  import projectData from "$lib/data.json";

  let project = $page.params.project;
  let parsed = false;

  onMount(() => {
    if (!(project in projectData) && project != "about" && project != "help") {
      goto("/projects");
    }
    project = projectData[project];
    parsed = true;
  });
</script>

<div class="projectPage-container jetBrainsMono">
  <div class="title">
    <h1>{project.title}</h1>
  </div>
  <div class="para">
    <h2>Experience</h2>
    <p>
      {#if parsed}
        {@html project.data.filter((item) => item.title === "Experience")[0]
          .content}
      {/if}
    </p>
  </div>
  <div class="para">
    <h2>What I Learnt</h2>
    <p>
      {#if parsed}
        {@html project.data.filter((item) => item.title === "What I Learnt")[0]
          .content}
      {/if}
    </p>
  </div>
  <div class="links">
    <a href="https://github.com">
      <img alt="github" src={github} />
    </a>
    <a href="https://google.com">
      <img alt="redirect" src={redirect} />
    </a>
  </div>
  <div class="description">
    {#if parsed}
      {project.data.filter((item) => item.title === "Introduction")[0].content}
    {/if}
  </div>
</div>

<style>
  @import "./projectpage.css";
</style>
