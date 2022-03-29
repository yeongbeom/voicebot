<script lang="ts">
	import BasicExpression from '$lib/components/expressions/basic.svelte';
	import SpeechBubble from '$lib/components/speech-bubble.svelte';
	import Button from '$lib/shared/button.svelte';
	import { onMount, onDestroy } from 'svelte';

	let showTestBtns = false;
	let expression = 'neutral';
	let talk = false;

	const changeExpression = (e) => {
		expression = e.target.innerText.toLowerCase();
	};

	const toggleTalkStatus = () => {
		talk = !talk;
	};

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
</div>

<div class="expression">
	<BasicExpression {expression} {talk} />
	<div class="bubble">
		<SpeechBubble />
	</div>
</div>

<div class="test-btns" class:show-test-btns={showTestBtns}>
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
	<!-- control status-->
	<div>
		<Button on:click={changeExpression} type="classic" flat={true}>wait</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>listen</Button>
	</div>
	<div>
		<Button on:click={toggleTalkStatus} type="primary" flat={true}>talk</Button>
	</div>
</div>

<style>
	/* buttons */
	.test-btns {
		display: none;
	}
	.show-test-btns {
		display: block;
	}

	.expression {
		position: relative;
	}
	.bubble {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
