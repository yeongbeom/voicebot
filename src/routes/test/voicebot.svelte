<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import TestBtns from '$lib/components/test-btns.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, say, heard, status } from '$lib/stores/bot';

	onMount(() => {
		console.log('voicebot.svelte mounted');
		$say = '안녕하세요';
		$heard = 'hihi';
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('voicebot.svelte destroyed');
	});
</script>

<VoiceBot />
<TestBtns />
