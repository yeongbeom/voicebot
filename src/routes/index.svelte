<script lang="ts">
	import VoiceBot from '$lib/components/VoiceBot.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';
	import { debugMode } from '$lib/stores/config';

	onMount(() => {
		$debugMode = false;
		console.log('all.svelte mounted');
		$currentStatus = $status.idle;
		console.log(import.meta.env.VITE_TTS_API_KEY);
	});
	onDestroy(() => {
		console.log('all.svelte destroyed');
	});
</script>

<VoiceBot />
