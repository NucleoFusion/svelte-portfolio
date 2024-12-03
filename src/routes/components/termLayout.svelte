<script>
  import arch_tui from "$lib/assets/arch-tui.png";
  import git_tui from "$lib/assets/git-tui.png";

  let { name } = $props();
</script>

<div class="term-line-left">
  <img src={arch_tui} alt="arch logo" />
  <p class="term-user">NucleoFusion</p>
  <p class="term-dir">{name}</p>
  <img alt="git-logo" src={git_tui} />
  <p class="term-gitbranch">main</p>
</div>
<div class="term-line-right"></div>
