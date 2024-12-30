<script lang="ts">
    import { Icon } from "$lib";
    import { Upcoming, Statistic } from "@components";
</script>

<h1 class="desktop:text-6xl text-5xl font-bold mt-32">Let's build from here</h1>
<p class="mt-3 font-medium text-xl">Connecting Cyber Security Enthusiasts and Professionals</p>

<div class="flex flex-wrap mt-6 space-y-4 desktop:space-y-0">
    <a href="https://discord.com/invite/HCnFVC66nG" class="font-medium px-6 py-3 rounded-full border-border border w-full desktop:text-start text-center desktop:w-fit hover:ring ring-border flex items-center gap-2 desktop:gap-3 desktop:justify-start justify-center">
        <Icon icon="simple-icons:discord" width="24" height="24" />
        Discord
    </a>
    <a href="https://www.kingston.ac.uk/" class="font-medium px-6 py-3 text-center w-full desktop:w-fit hover:underline">Kingston University &rightarrow;</a>
</div>

<div class="flex flex-col desktop:flex-row w-full mt-6">
    <Upcoming />
</div>
<Statistic />

