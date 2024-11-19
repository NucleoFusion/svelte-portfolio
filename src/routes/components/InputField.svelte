<script>
  let { content, name } = $props();
</script>

<div>
  <label for={name}>{content}</label>
  <input {name} id={name} />
</div>
