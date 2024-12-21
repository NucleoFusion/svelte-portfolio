<script>
  let { content, name, email } = $props();
</script>

<div>
  <label for={name}>{content}</label>
  {#if email}
    <input required id={name} type="email" />
  {:else}
    <input required {name} id={name} />
  {/if}
</div>
