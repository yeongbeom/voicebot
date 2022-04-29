<script lang="ts">
	import VoiceBot from '$lib/components/VoiceBot.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';

	onMount(() => {
		console.log('voicebot.svelte mounted');
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('voicebot.svelte destroyed');
	});
</script>

<VoiceBot />
