<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import ControlFont from '$lib/components/control-font.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';

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
