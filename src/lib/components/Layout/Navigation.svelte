<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";

    let currentPath: string = $derived($page.url.pathname);

    const pages = [
        {label: "Home", link: `${base}/`},
        {label: "Events", link: `${base}/Events`},
        {label: "Learning", link: `${base}/Learning`},
        {label: "About", link: `${base}/About`},
    ]

   

    function isActive(page: string): boolean {
        if(currentPath === page) {
            return true
        }
        return false
    }
</script>

<nav>
    <div class="flex items-center text-lg font-bold font-geist">
        <span class="text-text-muted text-lg">./</span>
        <span>KUCSS</span>
    </div>
      
    <ul class="desktop:flex ml-6 space-x-6 items-center hidden">
       {#each pages as anchor}
            <a href={anchor.link} class="font-semibold" class:active={isActive(anchor.link)}>{anchor.label}</a>
       {/each}
    </ul>


    <button class="ml-auto desktop:hidden flex">
        <Icon icon="heroicons-outline:menu-alt-4" width="32" height="32" />
    </button>
</nav>


<style lang="postcss">
    a.active {
        @apply text-text;
    }

    a:not(.active) {
        @apply text-text-muted;
    }
</style>