<script>
  import InputLink from "./InputLink.svelte";
  import { setContext } from "svelte";
  import { getDirectLink } from "./lib/UrlUtils.js";
  import Links from "./Links.svelte";
  import { flip } from "svelte/animate";

  let links = [];
  let id = 0;

  let onAddLink = link => {
    if (!link) return;
    links = [{ id: id++, url: link, directUrl: getDirectLink(link) }, ...links];
  };

  const onRemoveLink = id => {
    links = links.filter(i => i.id !== id);
  };

  setContext("Links", {
    onRemoveLink
  });
</script>

<div>
  <InputLink onAddLink={onAddLink} />
  <Links bind:links={links} />
</div>