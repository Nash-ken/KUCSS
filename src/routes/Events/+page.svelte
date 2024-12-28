<script>
  import { onMount } from "$lib";
  import { Event } from "@components";
  import { events, loadEvents } from "@stores/events";
  
  onMount(async() => {
        loadEvents();
    })
</script>
<h1 class="text-5xl font-bold mt-12">You're Invited</h1>
<p class="text-lg ml-2 font-semibold text-text-muted mt-2">Join us for Lectures, Workshops and more.</p>

{#if $events.length > 0}
    <div class="mt-6 p-6 border-border border rounded-lg grid desktop:grid-cols-3 grid-cols-1 gap-6" >
        {#each $events as event}
            <Event {event} />
        {/each}
    </div>
{:else}
<div class="mt-6 p-6 border-border border rounded-lg flex flex-col items-center justify-center h-80 w-full gap-6">
        <h1 class="text-4xl mx-auto">( ._.)</h1>
        <p class="text-center">Hmm... seems like there aren't any events organized just yet.</p>
    </div>
{/if}