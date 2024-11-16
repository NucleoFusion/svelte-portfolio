<script>
  import left from "$lib/assets/left.png";
  import right from "$lib/assets/right.png";

  import rust from "$lib/assets/rust.png";
  import py from "$lib/assets/py.png";
  import cpp from "$lib/assets/cpp.png";
  import go from "$lib/assets/go.png";
  import js from "$lib/assets/js.png";
  import etc from "$lib/assets/etc.png";

  import sqlite from "$lib/assets/sqlite.png";
  import mongo from "$lib/assets/mongo.png";
  import pg from "$lib/assets/pg.png";
  import react from "$lib/assets/react.png";
  import svelte from "$lib/assets/svelte.png";
  import node from "$lib/assets/node.png";
  import express from "$lib/assets/express.png";

  import github from "$lib/assets/github.png";
  import git from "$lib/assets/git.png";
  import vim from "$lib/assets/vim.png";
  import arch from "$lib/assets/arch.png";
  import zsh from "$lib/assets/zsh.svg";

  let current = $state(0);
  let max = 3;

  $effect(() => {
    if (current == max) {
      current = 0;
    }
    if (current == -1) {
      current = max - 1;
    }
  });

  let increment = () => (current += 1);
  let decrement = () => (current -= 1);
</script>

<div class="skills-container">
  <button onclick={increment}>
    <img src={left} alt="left-arrow" />
  </button>
  <div>
    {#if current == 0}
      <h1>Languages</h1>
      <div class="x2x2">
        <img src={go} alt="golang" />
        <img src={js} alt="javascript" />
        <img src={rust} alt="rust" />
        <img src={cpp} alt="c++" />
        <img src={py} alt="python" />
        <img src={etc} alt="and more" id="etc" />
      </div>
    {:else if current == 1}
      <h1>Frameworks and Databases</h1>
      <div>
        <img src={svelte} alt="Svelte" />
        <img src={react} alt="React" />
        <img src={node} alt="NodeJS" />
        <img src={express} alt="ExpressJS" />
        <img src={mongo} alt="MongoDB" />
        <img src={pg} alt="PostgreSQL" />
        <img alt="sqlite" src={sqlite} />
        <img alt="and more" src={etc} id="etc" />
      </div>
    {:else if current == 2}
      <h1>Tools</h1>
      <div>
        <img src={github} alt="github" />
        <img src={git} alt="git" />
        <img src={arch} alt="arch linux" />
        <img src={zsh} alt="zsh" />
        <img src={vim} alt="vim" />
        <img src={etc} alt="etc" id="etc" />
      </div>
    {/if}
  </div>
  <button onclick={decrement}>
    <img alt="right-arrow" src={right} />
  </button>
</div>

<style>
  @import "./skills.css";
</style>
