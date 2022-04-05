<script lang="ts">
	import ControlFont from '$lib/components/control-font.svelte';
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		console.log('font.svelte mounted');
	});
	onDestroy(() => {
		console.log('font.svelte destroyed');
	});
</script>

<ControlFont />

<style>
</style>
