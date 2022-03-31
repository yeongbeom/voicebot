<script lang="ts">
	import BasicExpression from '$lib/components/expressions/basic.svelte';
	import Button from '$lib/shared/button.svelte';
	import { currentExpression, currentStatus, status } from '$lib/stores/bot';
	import { onMount, onDestroy } from 'svelte';

	let isTalking = false;

	const changeExpression = (e) => {
		$currentExpression = e.target.innerText.toLowerCase();
	};

	const toggleTalkStatus = () => {
		isTalking = !isTalking;
		if (isTalking) {
			$currentStatus = $status.talk;
		} else {
			$currentStatus = $status.idle;
		}
	};

	onMount(() => {
		console.log('expressions.svelte mounted');
	});
	onDestroy(() => {
		console.log('expressions.svelte destroyed');
	});
</script>

<BasicExpression />

<div class="test-btns">
	<!-- control emotional expressions -->
	<div>
		<Button on:click={changeExpression} type="classic" flat={true}>neutral</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>happiness</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>disgust</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>surprise</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>anger</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>sadness</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>fear</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>worry</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>contempt</Button>
	</div>
	<!-- control status -->
	<div>
		<Button on:click={changeExpression} type="classic" flat={true}>think</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>listen</Button>
	</div>
	<!-- control situation -->
	<div>
		<Button on:click={toggleTalkStatus} type="primary" flat={true}>talk</Button>
	</div>
</div>
