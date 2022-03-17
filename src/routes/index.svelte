<script lang="ts">
	import FontControls from '$lib/components/font-controls.svelte';
	import EmotionalExpressions from '$lib/components/emotional-expressions.svelte';
</script>

<div>
	<a href="/test-expressions">Test expressions</a>

	<FontControls />

	<EmotionalExpressions />
</div>

<style>
	a {
		font-size: 5rem;
	}
</style>
