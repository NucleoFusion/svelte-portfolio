<script>
  import InputField from "../components/InputField.svelte";
  import axios from "axios";
  import { PUBLIC_MAILER } from "$env/static/public";

  let mailSent = $state(false);

  function MailDone() {
    mailSent = false;
  }

  async function sendMail(e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const content = document.querySelector("#content").value;
    const subject = document.querySelector("#subject").value;

    if (email === "" || name === "" || content === "" || subject === "") {
      alert("Not all fields are filled.");
      return;
    }

    mailSent = true;

    await axios.post(
      PUBLIC_MAILER,
      {
        name: name,
        email: email,
        subject: subject,
        content: content,
      },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      },
    );

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#content").value = "";
    document.querySelector("#subject").value = "";
  }
</script>

<div class="contact-container jetBrainsMono">
  <div class="top-bar">
    <h1 class="jetBrainsMono">Get In Touch With Me</h1>
  </div>
  <form class="mailForm">
    <InputField name="name" content="Name: " />
    <InputField name="email" content="Email: " email={true} />
    <InputField name="subject" content="Subject: " />

    <div class="textInput">
      <h3 class="for-style">Body:</h3>
      <textarea name="content" id="content"></textarea>
    </div>

    <button type="submit" class="jetBrainsMono" onclick={sendMail}
      >Submit</button
    >
  </form>

  {#key mailSent}
    {#if mailSent}
      <div class="popup-div">
        <h4>The Mail has been Sent</h4>
        <button onclick={MailDone} class="jetBrainsMono">Ok</button>
      </div>
      <div class="contact-bg"></div>
    {/if}
  {/key}
</div>

<style>
  @import "./contact.css";
</style>
