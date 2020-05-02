<script>
  import { isValidUrl } from "./lib/UrlUtils.js";
  import { slide } from "svelte/transition";

  export let onAddLink;
  let link = "";
  let error = "";
  let handleClick = () => {
    error = "";
    if (isValidUrl(link)) onAddLink(link);
    else error = "Invalid URL";
  };
</script>

<style>
  div {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>

<div>
 <label for="link-input">URL</label>
 <input id="link-input" type="text" bind:value={link}/>
 <button on:click={handleClick}>Expose</button>
 {#if !!error}
  <div transition:slide>{error}</div>
 {/if}
</div>