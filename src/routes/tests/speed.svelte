<script lang="ts">
	import VoiceBot from '$lib/components/VoiceBot.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';
	import WebRtc from './webrtc.svelte';
	import { debugMode } from '$lib/stores/config';

	onMount(() => {
		$debugMode = false;
		console.log('voicebot.svelte mounted');
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('voicebot.svelte destroyed');
	});

	const st = new Date().getTime();
	const measure = () => {
		const d = new Date();
		console.log(`${$currentStatus}: ${d.getTime() - st}`);
	};

	$: {
		$currentStatus, measure();
	}
</script>

<VoiceBot />
<WebRtc />
