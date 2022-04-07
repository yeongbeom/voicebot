<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import ControlFont from '$lib/components/control-font.svelte';
	import TestBtns from '$lib/components/test-btns.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';
	import { debugMode } from '$lib/stores/config';

	onMount(() => {
		console.log('all.svelte mounted');
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('all.svelte destroyed');
	});
</script>

<ControlFont />
<VoiceBot />

{#if $debugMode}
	<TestBtns />
{/if}
