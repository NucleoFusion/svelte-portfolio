<script>
  import { fly } from "svelte/transition";
  import src from "$lib/assets/home.png";
  import dd from "$lib/assets/dd.png";
  import { goto } from "$app/navigation";

  let width = $state(window.innerWidth);
  window.onresize = function () {
    width = window.innerWidth;
  };

  let toggleDD = () => {
    console.log(document.querySelector("#dd").style.visibility);
    if (document.querySelector("#dd").style.visibility === "visible") {
      document.querySelector("#dd").style.visibility = "hidden";
      document.querySelector(".bg").style.opacity = "0";
      document.querySelector(".bg").style.zIndex = -10;
      return;
    }
    document.querySelector("#dd").style.visibility = "visible";
    document.querySelector(".bg").style.opacity = "0.6";
    document.querySelector(".bg").style.zIndex = 10;
  };
</script>

{#if width > 700}
  <div class="container jetBrainsMono" in:fly={{ y: -200, duration: 700 }}>
    <div>
      <a href="/">
        <img alt="home" {src} />
      </a>
    </div>
    <div>
      <div
        role="button"
        tabindex="0"
        class="button-style"
        onclick={() => {
          goto("/tui");
        }}
        onkeydown={() => {
          goto("/tui");
        }}
      >
        TUI
      </div>
      <div
        role="button"
        tabindex="0"
        class="button-style"
        onclick={() => {
          goto("/projects");
        }}
        onkeydown={() => {
          goto(302, "/projects");
        }}
      >
        Projects
      </div>
      <div
        role="button"
        tabindex="0"
        class="button-style"
        onclick={() => {
          goto("/about");
        }}
        onkeydown={() => {
          goto(302, "/about");
        }}
      >
        About
      </div>
      <div
        role="button"
        tabindex="0"
        class="button-style"
        onclick={() => {
          goto("/contact");
        }}
        onkeydown={() => {
          goto("/contact");
        }}
      >
        Contact
      </div>
    </div>
  </div>
{:else}
  <div class="dd-container jetBrainsMono" in:fly={{ y: -200, duration: 700 }}>
    <div>
      <a href="/">
        <img alt="home" {src} />
      </a>
    </div>
    <div class="dropdown" id="dd">
      <div>
        <div
          role="button"
          tabindex="0"
          class="button-style"
          onclick={() => {
            onclick("/tui");
          }}
          onkeydown={() => {
            onclick("/tui");
          }}
        >
          TUI
        </div>
      </div>
      <div>
        <div
          role="button"
          tabindex="0"
          class="button-style"
          onclick={() => {
            onclick("/projects");
          }}
          onkeydown={() => {
            onclick("/projects");
          }}
        >
          Projects
        </div>
      </div>
      <div>
        <div
          role="button"
          tabindex="0"
          class="button-style"
          onclick={() => {
            onclick("/about");
          }}
          onkeydown={() => {
            onclick("/about");
          }}
        >
          About
        </div>
      </div>
      <div>
        <div
          role="button"
          tabindex="0"
          class="button-style"
          onclick={() => {
            onclick("/contact");
          }}
          onkeydown={() => {
            onclick("/contact");
          }}
        >
          Contact
        </div>
      </div>
    </div>
    <div>
      <div
        class="button-style"
        role="button"
        tabindex="0"
        onclick={toggleDD}
        onkeydown={toggleDD}
      >
        <img alt="dropdown" src={dd} />
      </div>
    </div>
  </div>
{/if}

<style>
  .container {
    background-color: var(--secondary);

    width: 90vw;
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

    z-index: 11;
  }

  .dd-container {
    background-color: var(--secondary);

    width: 90vw;
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

    position: relative;

    z-index: 11;
  }

  .dd-container > div {
    display: grid;
    align-items: center;

    padding: 0 2vw;
  }

  .dd-container > div:last-child {
    justify-content: right;
  }

  .dd-container > div:last-child > .button-style {
    width: 9vw;
    border: none;
  }

  .dd-container > div:last-child img {
    width: 30px;
    height: 30px;
  }

  .dropdown {
    width: 90vw;
    height: 30vh;

    visibility: hidden;
    position: absolute;

    background-color: var(--secondary);
    bottom: -32vh;
    left: 0px;

    border-radius: 20px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    justify-content: center;
    align-items: center;

    text-align: center;

    z-index: 11;
  }

  .dropdown > div {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .dropdown > div > div {
    width: 30vw;
  }

  .container > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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

  @media (max-width: 1050px) {
    .container {
      grid-template-columns: 30vw 60vw;
    }
    .button-style {
      width: 10vw;
    }
  }

  @media (max-width: 800px) {
    .container {
      grid-template-columns: 20vw 70vw;
    }
    .button-style {
      width: 13vw;
    }
  }
</style>
