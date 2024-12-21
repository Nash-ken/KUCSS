<script lang="ts">
    import { Icon } from "$lib";
        const socials = [
        {icon: "circum:linkedin", label: "LinkedIn", link: ""},
        {icon: "hugeicons:meta", label: "Facebook", link: ""},
        {icon: "hugeicons:instagram", label: "Instagram", link: ""},
        {icon: "hugeicons:new-twitter", label: "Twitter", link: ""},
    ];
</script>

<div class="mt-6 gap-6 grid grid-cols-1 desktop:grid-cols-4 grid-rows-1">
    {#each socials as link}
        <a href="" class="flex items-center gap-2 font-bold px-3 py-3 border border-border rounded-md"><Icon icon={link.icon} height="24" width="24" /> {link.label} <Icon icon="lucide:external-link" width="18" height="18" class="ml-auto" /></a>
    {/each}
</div>