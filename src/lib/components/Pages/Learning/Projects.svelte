<script lang="ts">
    import type { Project } from '@types';
    import { Projects } from '@stores';
    import { Icon } from "$lib";
    import { fade, fly } from 'svelte/transition';
    import { Accordion } from '@components';

    let overlayEnabled: boolean = $state(false);
    let overlayData: Project | null = $state(null);

    function toggleOverlay(project?: Project) {
       overlayData = project || null;
       overlayEnabled = !overlayEnabled;
    }
</script>

<div class="w-full mt-48 mb-12 relative">
    <div class="w-full max-w-screen-desktop mx-auto">
        <h3 class="text-xl font-semibold mt-6 mx-3">Find the right Project for you.</h3>
        <p class="text-text-muted mt-1.5 mx-3">Projects can be great for employability since it outlines your Experience with certain technologies.</p>
    </div>

    <div class="relative">
        {@render Overlay()}
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 desktop:grid-cols-3 gap-6 mt-12">
            {#each Projects as item}
                {@render project(item)}
            {/each}
        </div>
    </div>

    <h1 class="my-12 font-semibold text-xl w-full text-center">How to get Started?</h1>
    <Accordion />
</div>



{#snippet Overlay()}
     <!-- Overlay -->
     {#if overlayEnabled && overlayData}
     <div class="absolute inset-0 bg-background/80 z-[5] flex desktop:justify-center" 
         role="dialog"
         aria-labelledby="overlay-title"
         aria-modal="true" 
         transition:fade={{duration: 150}}>
         <div class="sticky top-20 border border-border rounded-lg w-96 h-fit bg-primary p-6" transition:fly={{y:-20, duration: 300}}>
             <!-- Overlay content -->
             <button class="flex items-center gap-1.5" onclick={() => toggleOverlay()}> <Icon icon="lucide:arrow-left" /> Back</button>
             <h2 class="mt-3 font-bold" id="overlay-title">{overlayData.title}</h2>
             <p class="text-text-muted mt-3">{overlayData.description}</p>
     
             <h2 class="font-bold mt-6 mx-auto">Prerequisites</h2>
             <ul class="flex flex-col text-sm list-disc gap-3 pl-5 mt-3">
                 {#each overlayData.prerequisites as prerequisite}
                     <li>{prerequisite}</li>
                 {/each}
             </ul>
     
             <div class="flex mt-6 text-sm flex-wrap gap-3">
                 {#each overlayData.skills as skill}
                     <p class="px-3 py-1.5 rounded-full border border-border">{skill}</p>
                 {/each}
             </div>
         </div>
     </div>
     {/if}
{/snippet}


{#snippet project(item: Project)}
<div class="flex flex-col gap-3 p-6 rounded-lg border border-border bg-primary aspect-square overflow-hidden relative">
    <p class="font-bold text-sm text-text-muted">{item.skills[0]}</p>
    <h1 class="font-semibold">{item.title}</h1>
    <p class="text-text-muted">{item.description}</p>

    <div class="flex items-center mt-auto pt-6 border-t border-border">

        <p class="text-sm text-text-muted font-bold overflow-hidden text-ellipsis text-nowrap w-3/4">{item.role}</p>

        <button onclick={() => toggleOverlay(item)} class="ml-auto size-10 grid place-items-center bg-border rounded-lg">
            <Icon icon="lucide:arrow-right" />
        </button>
    </div>
</div>
{/snippet}
