<script lang="ts">
	import Button from '$lib/shared/button.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const changeExpression = (e) => {
		dispatch('change-expression');
		// const expression = e.target.innerText;
	};
</script>

<div>
	<h1>expression controls</h1>
</div>

<div class="control-btn">
	<Button on:click={changeExpression} type="classic" flat={true}>neutral</Button>
	<Button on:click={changeExpression} type="classic" flat={true}>happy</Button>
	<Button on:click={changeExpression} type="classic" flat={true}>disgust</Button>
	<Button on:click={changeExpression} type="classic" flat={true}>surprise</Button>
	<Button on:click={changeExpression} type="classic" flat={true}>anger</Button>
	<Button on:click={changeExpression} type="classic" flat={true}>sad</Button>
	<Button on:click={changeExpression} type="classic" flat={true}>fear</Button>
	<Button on:click={changeExpression} type="classic" flat={true}>worry</Button>
	<Button on:click={changeExpression} type="classic" flat={true}>contempt</Button>
</div>
