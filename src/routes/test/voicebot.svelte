<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import TestBtns from '$lib/components/test-btns.svelte';
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		console.log('expressions.svelte mounted');
	});
	onDestroy(() => {
		console.log('expressions.svelte destroyed');
	});
</script>

<VoiceBot />
<TestBtns />
