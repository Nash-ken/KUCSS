<script lang="ts">
    import { Icon } from "$lib";

    type Objective = {
        icon: string;
        title: string;
        description: string;
    }

    let objectives: Objective[] = [
        {icon: 'lucide:shapes', title: 'Diversify', description: 'Organize different Events to introduce new skills.'},
        {icon: 'fluent:steps-20-filled', title: 'Career Growth', description: 'Provide guidance on career paths in cybersecurity and digital forensics.'},
        {icon: 'fluent:connected-20-filled', title: 'Connect', description: 'Join a network of 300+ Students to learn together'}
    ];
</script>

<h2 class="text-lg font-bold mt-12 mx-auto">Our Aim</h2>

<div class="mt-6 mx-auto gap-6 grid desktop:grid-cols-3 grid-cols-1 border-border border p-12 rounded-lg">
    {#each objectives as objective}
        <div class="flex flex-col w-64 gap-3 items-center text-center">
            <Icon icon={objective.icon} width="32" height="32" />
            <h1 class="text-lg bg-primary px-6 py-2 rounded-lg">{objective.title}</h1>
            <p class="text-text-muted">{objective.description}</p>
        </div>
    {/each}
</div>