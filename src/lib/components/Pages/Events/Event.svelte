<script lang="ts">
    import { Icon } from "$lib";
    import type { Event } from "@types";

    let { event }: { event: Event } = $props();

    // Calculate days until the event and return the appropriate message
    const daysUntilMessage = (() => {
        const diffDays = Math.ceil((new Date(event.date).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
        return diffDays === 0 ? "today" : diffDays > 0 && diffDays <= 3 ? `in ${diffDays} days` : null;
    })();

   
</script>

<div class="w-full h-fit max-w-96 flex flex-col gap-6">
    <h1 class="font-bold text-xl text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">{event.name}</h1>
    <div class="flex gap-3">
        <Icon icon="hugeicons:calendar-03" width="24" height="24" />
        {event.date}
    </div>
    <div class="flex gap-3">
        <Icon icon="hugeicons:time-02" width="24" height="24" />
        {event.time}
    </div>
    <div class="flex gap-3">
        <Icon icon="hugeicons:location-01" width="24" height="24" />
        {event.room}
    </div>
    <div class="h-12 px-3 flex items-center justify-between bg-primary rounded-lg">
        {event.type}
        {#if daysUntilMessage}
            <span class="text-sm capitalize text-text py-1.5  px-3 rounded-lg border-border border">{daysUntilMessage}</span>
        {/if}
    </div>
</div>
