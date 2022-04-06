<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import ControlFont from '$lib/components/control-font.svelte';
	import TestBtns from '$lib/components/test-btns.svelte';
	import Talk from './talk.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, heard, say, status } from '$lib/stores/bot';

	onMount(() => {
		console.log('all.svelte mounted');
		$say = '안녕하세요';
		$heard = 'hello';
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('all.svelte destroyed');
	});
</script>

<ControlFont />
<!-- <VoiceBot /> -->
<Talk />
<TestBtns />
