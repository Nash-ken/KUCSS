<script lang="ts">
    import type { Course } from '@types';
    import { Courses } from '@stores';
    import { Icon } from "$lib";

</script>

<div class="w-full mt-48 mb-12 relative left-0">
    <div class="w-full max-w-screen-desktop mx-auto">
        <h1 class="text-lg font-bold px-3 mt-6">Courses</h1>
        <p class="text-text-muted px-3">Online Courses are a great way to learn a particular skillset just from the comfort of your home.</p>

        <div class="border-l border-border bg-primary p-3 mt-6 font-bold">Note: <span class="text-text-muted font-normal">We do not own any of these Courses and are merely just recommendations.</span></div>

        <div class="grid desktop:grid-cols-2 gap-6 mt-6">
            {#each Courses as course}
                {@render Course(course)}
            {/each}
        </div>
    </div>
</div>

{#snippet Course(item: Course)}
    <div class="flex flex-col h-64 p-6 border border-border rounded-lg bg-primary">
        <div class="flex gap-3 w-full items-center text-sm font-semibold">
            <div class="border border-border text-text p-2 rounded-lg">
                <Icon icon={item.icon} width="24" height="24" />
            </div>
           
            <p class="text-text-muted">{item.provider}</p>
        </div>
        <h1 class="font-bold mt-3">{item.title}</h1>

        <p class="text-sm mt-3 text-text-muted text-ellipsis overflow-hidden"><b class="text-text">Skills Obtainable: </b> {item.skills}</p>
        <div class="flex items-center justify-between mt-auto text-sm">
            <p class="text-text-muted">Online &middot; Certificate &middot; {item.duration}</p>
            <a href={item.link} class="ml-auto">View</a>
        </div>
    </div>
{/snippet}