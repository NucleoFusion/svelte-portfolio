<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import github from "$lib/assets/github.png";
  import redirect from "$lib/assets/redirect.png";

  import projectData from "./projectData.json";

  let project = $page.params.project;

  onMount(() => {
    if (!(project in projectData)) {
      goto("/projects");
    }
    project = projectData[project];
  });
</script>

<div class="projectPage-container jetBrainsMono">
  <div class="title">
    <h1>{project.title}</h1>
  </div>
  <div class="para">
    <h2>Experience</h2>
    <p>
      {@html project.experience}
    </p>
  </div>
  <div class="para">
    <h2>What I Learnt</h2>
    <p>
      {@html project.learnt}
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
  <div class="description">{project.descr}</div>
</div>

<style>
  @import "./projectpage.css";
</style>
