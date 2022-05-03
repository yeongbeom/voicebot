<script context="module" lang="ts">
	setInterval(() => {
		console.debug(process.memoryUsage());
	}, 1000);
</script>

<script lang="ts">
	import VoiceBotTest from '$lib/components/VoiceBotTest.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';
	import { debugMode } from '$lib/stores/config';

	onMount(() => {
		$debugMode = true;
		console.log('voicebot.svelte mounted');
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('voicebot.svelte destroyed');
	});
</script>

<h1>test</h1>

<VoiceBotTest />
