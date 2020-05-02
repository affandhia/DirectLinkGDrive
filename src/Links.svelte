<script>
  import { flip } from "svelte/animate";
  const { onRemoveLink } = getContext("Links");
  import { getContext } from "svelte";
  export let links;
  const handleRemove = id => () => {
    onRemoveLink(id);
  };
</script>


{#each links as link (link.id)}
	<li 
	animate:flip
	>
	<a target="_blank" href="{link.url}">
		{link.url}
	</a>
	{#if link.directUrl}
	<a target="_blank" href="{link.directUrl}">
		<button>Download</button>
	</a>
	{:else}
	<button type="button" disabled aria-disabled="download button is disabled">INVALID</button>
	{/if}

	<button title="delete" on:click|preventDefault={handleRemove(link.id)}>X</button>
	</li>
{/each}
