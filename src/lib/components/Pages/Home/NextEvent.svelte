<script lang="ts">
    import { loadEvents, upcoming } from "@stores";
    import { onMount, Icon, base } from "$lib";
    
    onMount(async() => {
        loadEvents();
    })

</script>


{#await $upcoming}
    <p>Loading...</p>
{:then nextEvent } 
    {#if nextEvent}
    <div class="rounded-xl border border-border p-6 w-full desktop:max-w-96  flex flex-col">
        <h3 class="text-2xl font-medium">Upcoming Events</h3>
        <p class="mt-4 text-text-muted">Join us for our Events covering all things security.</p>
        <div class="flex-1 flex over flex-col space-y-6 min-h-48 my-3 rounded-xl font-medium">
            <h1 class="font-bold text-xl text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">{nextEvent?.name}</h1>
            <div class="flex gap-3"><Icon icon="hugeicons:calendar-03" width="24" height="24" />{nextEvent?.date}</div>
            <div class="flex gap-3"><Icon icon="hugeicons:time-02" width="24" height="24" />{nextEvent?.time}</div>
            <div class="flex gap-3"><Icon icon="hugeicons:location-01" width="24" height="24" />{nextEvent?.room}</div>
        </div>
        <a href="{base}/Events" class="text-center mt-auto px-6 py-4 bg-primary text-text-muted text-sm font-semibold hover:ring ring-border rounded-full">View All Events</a>
    </div>
    {:else}
       <div class="p-6 flex flex-col items-center justify-center gap-6 w-full desktop:mr-48 h-full border border-border rounded-lg">
        <h1 class="text-4xl mx-auto">( ._.)</h1>
        <p class="text-center">Hmm... seems like there aren't any events organized just yet.</p>
       </div>
    {/if}
    
{/await}
