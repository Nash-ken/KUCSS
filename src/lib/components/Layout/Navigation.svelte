<script lang="ts">
    import { pages } from "@stores";
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
  import { blur } from "svelte/transition";

    let currentPath: string = $derived($page.url.pathname);

    const isActive = (page: string): boolean => currentPath === page;

    let menuOpen: boolean = $state(false);
    let screenW: number = $state(0);

    const toggleMenu = () => (menuOpen = !menuOpen);
</script>

<svelte:window bind:outerWidth={screenW} />

<nav class="flex items-center">
    <div class="flex items-center text-lg font-bold font-geist">
        <span class="text-text-muted">./</span>
        <span>KUCSS</span>
    </div>

    <ul class="hidden desktop:flex ml-6 space-x-6 items-center">
        {#each pages as { link, label }}
            <li>
                <a href={link} 
                   class="font-semibold" 
                   class:active={isActive(link)}>
                    {label}
                </a>
            </li>
        {/each}
    </ul>

    <button class="desktop:hidden flex ml-auto z-50 transition-transform ease-in-out duration-200" class:rotate-90={menuOpen} onclick={toggleMenu}>
        {#if menuOpen}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 6l-6 6m0 0l-6 6m6-6l6 6m-6-6L6 6" color="currentColor" />
        </svg>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8.5h16m-16 7h16" color="currentColor" />
        </svg>
        {/if}
    </button>
    
</nav>

{#if menuOpen && screenW < 1000}
    <div transition:blur={{duration: 300}}  class="fixed w-full inset-0 top-16 bg-background flex flex-col items-center justify-start pt-24 z-50">
        <ul class="flex w-full px-6 flex-col items-start gap-3">
            {#each pages as { link, label }}
                <li class="text-lg p-3 w-full flex items-center justify-between">
                    <a onclick={toggleMenu} href={link} 
                       class="font-semibold w-full flex items-center justify-between" 
                       class:active={isActive(link)}>
                        {label}
                        <Icon icon="fluent:chevron-right-20-regular" width="24" height="24" />
                    </a>
                   
                </li>
            {/each}
        </ul>

        <h1 class="mt-auto w-3/4 border-border border p-3 rounded-lg mb-24 text-pretty text-lg text-center text-text-muted font-bold">Kingston University <br> Cyber Security Society</h1>
    </div>
{/if}

<style lang="postcss">
    a.active {
        @apply text-text;
    }

    a:not(.active) {
        @apply text-text-muted;
    } 
</style>