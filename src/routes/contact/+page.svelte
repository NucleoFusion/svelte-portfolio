<script>
  import InputField from "../components/InputField.svelte";
</script>

<div class="contact-container jetBrainsMono">
  <div class="top-bar">
    <h1 class="jetBrainsMono">Get In Touch With Me</h1>
  </div>
  <form class="mailForm">
    <InputField name="name" content="Name: " />
    <InputField name="email" content="Email: " />

    <div class="textInput">
      <h3 class="for-style">Body:</h3>
      <textarea name="content" id="content"></textarea>
    </div>

    <button type="submit" class="jetBrainsMono">Submit</button>
  </form>
</div>

<style>
  @import "./contact.css";
</style>
