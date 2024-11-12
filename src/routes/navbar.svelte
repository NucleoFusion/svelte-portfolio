<script>
  import { redirect } from "@sveltejs/kit";

  import src from "$lib/assets/home.png";

  function onclick(url) {
    redirect(302, url);
  }
</script>

<div class="container jetBrainsMono">
  <div>
    <div>
      <a href="/">
        <img alt="home" {src} />
      </a>
    </div>
  </div>
  <div>
    <div
      class="button-style"
      onclick={() => {
        onclick("/projects");
      }}
    >
      <a href="/projects" aria-disabled="true">Projects</a>
    </div>
    <div
      class="button-style"
      onclick={() => {
        onclick("/projects");
      }}
    >
      <a href="/projects" aria-disabled="true">About</a>
    </div>
    <div
      class="button-style"
      onclick={() => {
        onclick("/contact");
      }}
    >
      <a href="/contact" aria-disabled="true">Contact</a>
    </div>
  </div>
</div>

<style>
  .container {
    background-color: var(--secondary);

    width: 94vw;
    height: 10vh;

    margin-top: 3vh;
    margin-left: 3vw;

    border-radius: 20px;

    box-shadow:
      5px 5px 20px rgb(0, 0, 0, 0.3),
      -5px -5px 20px rgb(0, 0, 0, 0.3);

    border: solid var(--bg-color) 2px;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;

    padding: 0vh 1vw;
  }

  .container > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
  }

  .container > div:first-child {
    display: grid;

    align-items: center;

    margin-left: 2vw;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .button-style {
    width: 8vw;
    height: 5vh;

    border-radius: 10px;
    border: solid var(--bg-color) 1px;

    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;

    transition: all 0.3s ease-out;

    cursor: pointer;
  }

  .button-style:hover {
    background-color: #8aadf4;
    transform: scale(0.95);
  }

  .button-style a {
    color: inherit;
    text-decoration: none;
  }
</style>
