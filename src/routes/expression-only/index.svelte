<script lang="ts">
	import VoiceBot from '$lib/components/VoiceBot.svelte';
	import ControlFont from '$lib/components/ControlFont.svelte';
	import { onMount } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';

	onMount(() => {
		$currentStatus = $status.idle;
	});
</script>

<ControlFont />
<VoiceBot />
