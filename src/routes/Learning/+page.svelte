<script lang="ts">
    import { Header, Courses, Projects } from "@components";
  import type { Component } from "svelte";

    let Panel: Component = $state(Courses);

</script>

<Header bind:panel={Panel} />

<Panel />