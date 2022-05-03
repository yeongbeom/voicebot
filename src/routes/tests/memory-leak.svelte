<script lang="ts">
	import VoiceBotTest from '$lib/components/VoiceBotTest.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';
	import { debugMode } from '$lib/stores/config';

	onMount(() => {
		$debugMode = false;
		console.log('voicebot.svelte mounted');
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('voicebot.svelte destroyed');
	});
</script>

<h1>test</h1>

<VoiceBotTest />
