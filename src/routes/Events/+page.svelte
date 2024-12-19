<script>
  import { onMount } from "$lib";
  import { Event } from "@components";
  import { events, loadEvents } from "@stores/events";


  onMount(async() => {
        loadEvents();
        console.log($events);
    })
</script>
<h1 class="text-5xl font-bold mt-12">You're Invited</h1>
<p class="text-lg ml-2 font-semibold text-text-muted mt-2">Join us for Lectures, Workshops and more.</p>

<div class="mt-6 p-6 border-border border rounded-lg grid desktop:grid-cols-3 grid-cols-1 gap-6">
    {#each $events as event}
        <Event {event} />
    {/each}
</div>