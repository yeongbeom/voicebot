<script lang="ts">
	import BasicExpression from '$lib/components/expressions/basic.svelte';
	import TestBot from '$lib/components/test-bot.svelte';
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		console.log('expressions.svelte mounted');
	});
	onDestroy(() => {
		console.log('expressions.svelte destroyed');
	});
</script>

<BasicExpression />
<TestBot />
