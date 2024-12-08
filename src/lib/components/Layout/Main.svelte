<script lang="ts">
  import type { Snippet } from "svelte";

    type Prop = {
        children: Snippet;
    };

    let { children }: Prop = $props();
</script>

<main>
    {@render children()}
</main>