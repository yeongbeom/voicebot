<script lang="ts">
	import VoiceBot from '$lib/components/voicebot.svelte';
	import TestBtns from '$lib/components/test-btns.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { currentStatus, status } from '$lib/stores/bot';

	onMount(() => {
		console.log('expressions.svelte mounted');
		$currentStatus = $status.idle;
	});
	onDestroy(() => {
		console.log('expressions.svelte destroyed');
	});
</script>

<div class="test-container">
	<div class="voicebot">
		<VoiceBot />
	</div>
	<div class="testBtns">
		<TestBtns />
	</div>
</div>

<style>
</style>
