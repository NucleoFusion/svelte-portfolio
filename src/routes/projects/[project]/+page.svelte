<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import projectData from "./projectData.json";

  let project = $page.params.project;

  onMount(() => {
    if (!(project in projectData)) {
      goto("/projects");
    }
  });
</script>
