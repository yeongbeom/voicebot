<script lang="ts">
	import FontControls from '$lib/components/font-controls.svelte';

	import EmotionalExpressions from '$lib/components/emotional-expressions.svelte';

	import ExpressionControls from '$lib/components/expression-controls.svelte';
	import expressionPaths from '$lib/stores/expression-paths';
</script>

<div>
	<FontControls />

	<EmotionalExpressions />

	<ExpressionControls />
	{$expressionPaths[0].id}
</div>
