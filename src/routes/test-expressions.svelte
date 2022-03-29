<script lang="ts">
	import BasicExpression from '$lib/components/expressions/basic.svelte';
	import SpeechBubble from '$lib/components/speech-bubble.svelte';
	import { onMount, onDestroy } from 'svelte';

	let showTestBtns = false;

	onMount(() => {
		console.log('test-expressions.svelte mounted');
		showTestBtns = true;
	});
	onDestroy(() => {
		console.log('test-expressions.svelte destroyed');
	});
</script>

<div>
	<h1>test</h1>
	<h1>test</h1>
	<h1>test</h1>
	<h1>test</h1>
	<h1>test</h1>
	<h1>test</h1>
</div>

<div class="expression">
	<BasicExpression {showTestBtns} />
	<div class="bubble">
		<SpeechBubble />
	</div>
</div>

<style>
	.expression {
		position: relative;
	}
	.bubble {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
