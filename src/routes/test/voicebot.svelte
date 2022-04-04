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

<div class="test-container">
	<div class="voicebot">
		<VoiceBot />
	</div>
	<div class="testBtns">
		<TestBtns />
	</div>
</div>

<style>
	.testBtns {
		padding-top: 200px;
	}
</style>
