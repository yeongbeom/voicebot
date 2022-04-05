<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import ControlFont from '$lib/components/control-font.svelte';
	import TestBtns from '$lib/components/test-btns.svelte';
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

<div class="test-container">
	<div class="voicebot">
		<ControlFont />
		<VoiceBot />
	</div>
	<div class="testBtns">
		<TestBtns />
	</div>
</div>

<style>
</style>
