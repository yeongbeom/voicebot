<script lang="ts">
	import BasicExpressions from '$lib/components/expressions/Basic.svelte';
	import SpeechBubble from '$lib/components/SpeechBubble.svelte';
	import { debugMode } from '$lib/stores/config';
	// import Talk from '$lib/components/Talk.svelte';
	import TestBtns from '$lib/components/TestBtns.svelte';
</script>

<div class="voicebot">
	<div class="expressions">
		<BasicExpressions />
	</div>
	<div class="speech-bubble">
		<SpeechBubble />
	</div>
</div>

<!-- <Talk /> -->

{#if $debugMode}
	<div>
		<TestBtns />
	</div>
{/if}

<style>
	.voicebot {
		display: grid;
		grid-template-columns: 1fr;
	}
	.voicebot div {
		grid-row-start: 1;
		grid-column-start: 1;
	}
</style>
