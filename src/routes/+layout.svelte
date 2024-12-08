<script lang="ts">
	import { Navigation, Main, Footer } from "@components";
	import "../app.css";
	import "@fontsource-variable/plus-jakarta-sans";
	let { children } = $props();
</script>

<Navigation />
<Main>{@render children()}</Main>
<Footer />


