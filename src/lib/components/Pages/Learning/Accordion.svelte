<script lang="ts">
    import { slide } from 'svelte/transition';
    import { Icon } from "$lib";

    // Define the structure for each FAQ item
    interface FAQ {
        question: string;
        answer: string;
        svg: string;
    }

    // Sample FAQ data with SVG icons
    let faqs: FAQ[] = [
        {
            question: "Getting Started",
            answer: "Start by choosing a project that interests you. Whether it's cybersecurity, web development, or any other field, pick something you're passionate about.",
            svg: 'fluent:rocket-20-regular' // SVG icon can be added here
        },
        {
            question: "Research & Plan",
            answer: "Once you have a project idea, research it thoroughly. Plan how you'll build it and identify the resources you'll need, such as tools and learning materials.",
            svg: 'fluent:lightbulb-filament-20-regular'
        },
        {
            question: "Build & Document",
            answer: "Start building your project while documenting the process. This can be done digitally via GitHub or a blog, and it will be helpful later as proof of your work.",
            svg: 'fluent:document-20-regular'
        },
        {
            question: "Important Tips",
            answer: "Remember, projects are optional but can greatly boost your skills and potential. Focus on projects that showcase your abilities and passion. Projects are Experience and can be used for applications for your employer to measure your potential.",
            svg: 'fluent:important-20-regular'
        }
    ];

    let activeIndex: number | null = null;
</script>

<div class="max-w-3xl mx-auto p-6 bg-primary rounded-xl shadow space-y-4 select-none">
    {#each faqs as { question, answer, svg }, index}
        <div class="border-b border-border pb-4">
            <button
                class="w-full flex items-center text-left py-2 font-semibold  text-text focus:outline-none"
                on:click={() => activeIndex = activeIndex === index ? null : index}
            >
                <!-- SVG Icon -->
                <Icon icon={svg} width="24" height="24" />
                <!-- Question Text -->
                <span class="ml-2">{question}</span>
                <!-- Toggle Icon -->
                <svg class="ml-auto transition-transform" class:rotate-180={activeIndex === index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M15.854 7.646a.5.5 0 0 1 .001.707l-5.465 5.484a.55.55 0 0 1-.78 0L4.147 8.353a.5.5 0 1 1 .708-.706L10 12.812l5.147-5.165a.5.5 0 0 1 .707-.001" />
                </svg>
            </button>
            {#if activeIndex === index}
                <p class="mt-2 font-semibold text-text-muted" transition:slide>{answer}</p>
            {/if}
        </div>
    {/each}
</div>

