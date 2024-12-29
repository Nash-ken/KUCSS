<script lang="ts">
    import { Icon } from "$lib";
    import { Socials } from "@components";
    import { pages } from "@stores";
</script>

<footer>
    <div class="w-full px-6 desktop:px-0  max-w-screen-desktop mx-auto border-t border-border py-12 flex items-start justify-start desktop:flex-row flex-col ">
        <div class="flex flex-col gap-6 mb-6 desktop:mb-0 w-full desktop:w-1/3 desktop:mr-12 mr-0">
            <h1 class="text-xl font-bold text-text-muted">./ <span class="text-text">KUCSS</span></h1>
            <p class="text-text-muted">Official Website for Kingston University London Cyber Security Society</p>
            
            <div class="flex pr-6 w-fit gap-3 items-center bg-primary rounded-lg">
                <div class="p-3 bg-border rounded-l-lg">
                    <Icon icon="fluent:mail-20-regular" width="24" height="24" />
                </div>
               
                 <p>team@kucybersec.co.uk</p>
            </div>
            
            
        </div>
        <Socials />

        <div class="flex flex-col gap-3 mt-6 desktop:mt-0 desktop:ml-32">
            <h1 class="font-bold">Content</h1>
            {#each pages as anchor}
                <a class="text-text-muted" href={anchor.link}>{anchor.label}</a>
            {/each}
        </div>
    </div>
</footer>