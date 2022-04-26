<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';
	import { debugMode } from '$lib/stores/config';

	$debugMode = false;

	onMount(() => {
		console.log('all.svelte mounted');
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('all.svelte destroyed');
	});
</script>

<div>
	<VoiceBot />
</div>

<style>
	div {
		margin: 50px;
	}
</style>
