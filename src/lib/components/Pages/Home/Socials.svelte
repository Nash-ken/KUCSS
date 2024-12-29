<script lang="ts">
    import { Icon } from "$lib";
        const socials = [
        {icon: "circum:linkedin", label: "LinkedIn", link: "https://www.linkedin.com/company/kucybersec/"},
        {icon: "hugeicons:meta", label: "Facebook", link: "https://www.facebook.com/KUcybersociety"},
        {icon: "hugeicons:instagram", label: "Instagram", link: "https://www.instagram.com/kucybersec/"},
        {icon: "hugeicons:new-twitter", label: "Twitter", link: "https://x.com/KUCyberSec?mx=2"},
    ];
</script>

<div class="flex flex-col gap-3">
    <h1 class="font-bold">Contact</h1>
    {#each socials as link}
      <a class="text-text-muted flex items-center gap-3" href={link.link}><Icon icon={link.icon} width="20" height="20" /> {link.label}</a>
    {/each}
</div>