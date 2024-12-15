<script lang="ts">
    import { base } from "$app/paths";
    import Icon from "@iconify/svelte";
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
    type event = {
        name: string
    };

    const socials = [
        {icon: "circum:linkedin", label: "LinkedIn", link: ""},
        {icon: "hugeicons:meta", label: "Facebook", link: ""},
        {icon: "hugeicons:instagram", label: "Instagram", link: ""},
        {icon: "hugeicons:new-twitter", label: "Twitter", link: ""},
    ]
    
</script>

<h1 class="desktop:text-6xl text-5xl font-bold mt-32">Let's build from here</h1>
<p class="mt-3 font-medium text-xl">Connecting Cyber Security Enthusiasts and Professionals</p>

<div class="flex flex-wrap mt-6 space-y-4 desktop:space-y-0">
    <a href={base} class="font-medium px-6 py-3 rounded-full border-border border w-full desktop:text-start text-center desktop:w-fit hover:ring ring-border flex items-center gap-2 desktop:gap-3 desktop:justify-start justify-center">
        <Icon icon="simple-icons:discord" width="24" height="24" />
        Discord
    </a>
    <a href="" class="font-medium px-6 py-3 text-center w-full desktop:w-fit hover:underline">Kingston University &rightarrow;</a>
</div>

<div class="flex flex-col desktop:flex-row w-full mt-12">
    <div class="rounded-xl border border-border p-6 w-full desktop:max-w-96  flex flex-col">
        <h3 class="text-2xl font-medium">Upcoming Events</h3>
        <p class="mt-4 text-text-muted">Join us for our Events covering all things security.</p>
        <div class="flex-1 flex over flex-col space-y-6 min-h-48 my-3 rounded-xl font-medium">
            <h1 class="font-bold text-xl text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">This is text example and this is the elispes</h1>
            <div class="flex gap-3"><Icon icon="hugeicons:calendar-03" width="24" height="24" />2025-01-08</div>
            <div class="flex gap-3"><Icon icon="hugeicons:time-02" width="24" height="24" />16:00</div>
            <div class="flex gap-3"><Icon icon="hugeicons:location-01" width="24" height="24" />JG3032</div>
        </div>
        <button class="mt-auto px-6 py-4 bg-primary text-text-muted text-sm font-semibold hover:ring ring-border rounded-full">View All Events</button>
    </div>

    <div class="flex flex-col  desktop:ml-auto mt-12 ml-0 space-y-4 w-full max-w-96">
        <div class="flex flex-col w-full h-32">
            <h1 class="font-bold text-4xl">300+</h1>
            <p class="text-text-muted font-bold text-lg">Students learning and potential connections</p>
        </div>
        <div class="flex flex-col w-full h-32">
            <h1 class="font-bold text-4xl">10x</h1>
            <p class="text-text-muted font-bold text-lg">Your productivity with projects to put on your resume</p>
        </div>
        <div class="flex flex-col w-full h-32">
            <h1 class="font-bold text-4xl">5x</h1>
            <p class="text-text-muted font-bold text-lg">More Technical skills acquired</p>
        </div>
    </div>
</div>

<div class="mt-12 gap-6 grid grid-cols-1 desktop:grid-cols-4 grid-rows-1">
    {#each socials as link}
        <a href="" class="flex items-center gap-2 font-bold px-3 py-3 border border-border rounded-md"><Icon icon={link.icon} height="24" width="24" /> {link.label} <Icon icon="lucide:external-link" width="18" height="18" class="ml-auto" /></a>
    {/each}
</div>