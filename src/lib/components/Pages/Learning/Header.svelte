<script lang="ts">
  import type { Component } from "svelte";
  import { Courses, Projects } from "@components";
  import { fly } from "svelte/transition";

    let { panel = $bindable() }: {panel: Component} = $props();
    let isOpen: boolean = $state(false);
    let selected: string = $derived(panel === Courses ? "Courses" : "Projects")

    function toggleDropDown() {
        isOpen = !isOpen;
    }

    function select(Panel: Component) {
        panel = Panel;
        isOpen = false;
    }
</script>

<div class="w-full h-20 border-b flex items-center border-border bg-primary -mt-8 absolute left-0">
    <div class="flex px-6 desktop:px-0 justify-between desktop:justify-start w-full max-w-screen-desktop mx-auto items-center gap-6">
        <h1 class="font-bold text-xl">Learning</h1>
        <div class="relative inline-block">
            <button class="flex items-center w-48 p-4 border border-border rounded-lg relative" onclick={toggleDropDown}>
                <div class="flex w-full h-full">{selected}</div>
                <svg class:rotate-180={isOpen} class="transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M15.794 7.733a.75.75 0 0 1-.026 1.06l-5.25 5.001a.75.75 0 0 1-1.035 0l-5.25-5a.75.75 0 0 1 1.034-1.087l4.734 4.509l4.733-4.51a.75.75 0 0 1 1.06.027" />
                </svg>
            </button>
        
            {#if isOpen}
                <section class="absolute z-10 left-0 top-full mt-2 w-full flex flex-col gap-1.5 p-3 rounded-xl border border-border bg-primary" transition:fly={{y:-20, duration: 300}}>
                   <button class="flex p-3 rounded-lg hover:bg-background" class:bg-border={selected === "Projects"} onclick={() => select(Projects)}>Projects</button>
                   <button class="flex p-3 rounded-lg hover:bg-background" class:bg-border={selected === "Courses"} onclick={() => select(Courses)}>Courses</button>
                </section>
            {/if}
        </div>
    </div>
</div>

<div class="flex items-center w-full h-32 p-6 bg-primary mt-12 absolute left-0">
    <div class="flex items-center w-full max-w-screen-desktop mx-auto">
        <h1 class="font-bold text-3xl">Build Your Portfolio.</h1>
    </div>
</div>



