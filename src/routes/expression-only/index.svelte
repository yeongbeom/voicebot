<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import ControlFont from '$lib/components/control-font.svelte';
	import { onMount } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';

	onMount(() => {
		$currentStatus = $status.idle;
	});
</script>

<ControlFont />
<VoiceBot />
