<script lang="ts">
	import Talk from '$lib/components/talk.svelte';
	import VoiceBot from '$lib/components/voicebot.svelte';
	import TestBtns from '$lib/components/test-btns.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, message, status } from '$lib/stores/bot';
	onMount(() => {
		console.log('voicebot.svelte mounted');
		$message = '안녕하세요';
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('voicebot.svelte destroyed');
	});
</script>

<Talk />
<VoiceBot />

<style>
</style>
