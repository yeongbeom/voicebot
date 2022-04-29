<script lang="ts">
	import VoiceBot from '$lib/components/VoiceBot.svelte';
	import ControlFont from '$lib/components/ControlFont.svelte';
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
