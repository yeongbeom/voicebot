<script lang="ts">
	import SpeechBubble from '$lib/components/speech-bubble.svelte';
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		console.log('bubble.svelte mounted');
	});
	onDestroy(() => {
		console.log('bubble.svelte destroyed');
	});
</script>

<SpeechBubble />

<style>
</style>
