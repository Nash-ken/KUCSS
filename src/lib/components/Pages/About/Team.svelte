<script lang="ts">

    type Member = {
        name: string;
        role: string;
    }

    let team: Member[] = [
        {
        name: "Matthew",
        role: "President"
    },
    {
        name: "Sam",
        role: "Treasurer"
    },
    {
        name: "Max",
        role: "Media Officer"
    },
    {
        name: "Ansh",
        role: "Event Officer"
    },
    {
        name: "Noel",
        role: "Developer"
    }
    ];
</script>

<h2 class="text-lg font-bold mt-12 mx-auto">Meet our Team</h2>

<div class="mt-6 mb-12 gap-6 grid grid-cols-1 desktop:grid-cols-3">
    {#each team as member}
        <div class="flex justify-between items-center border-border border rounded-lg p-3">
            <h1>{member.name}</h1>
            <p class="h-full w-fit px-3 py-2 rounded-lg bg-primary">{member.role}</p>
        </div>
    {/each}
</div>