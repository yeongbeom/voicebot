<script lang="ts">
	import Button from '$lib/shared/button.svelte';
	import EmotionalExpressions from '$lib/components/emotional-expressions.svelte';

	let expressionNo = 0;

	const changeExpression = (e) => {
		const expression = e.target.innerText;

		switch (expression) {
			case 'neutral':
				expressionNo = 0;
				break;
			case 'happy':
				expressionNo = 1;
				break;
			case 'worry':
				expressionNo = 2;
				break;
			case 'anger':
				expressionNo = 3;
				break;
			case 'surprise':
				expressionNo = 4;
				break;
			case 'sadness':
				expressionNo = 5;
				break;
			case 'fear':
				expressionNo = 6;
				break;
			case 'disgust':
				expressionNo = 7;
				break;
			case 'contempt':
				expressionNo = 8;
				break;
			case 'wait':
				expressionNo = 9;
				break;
			case 'listen':
				expressionNo = 10;
				break;
			default:
				console.log('Invalid input');
		}
		console.log('=>', expressionNo);
	};
</script>

<div>
	<EmotionalExpressions {expressionNo} />

	<div class="control-btn">
		<Button on:click={changeExpression} type="classic" flat={true}>neutral</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>happy</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>disgust</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>surprise</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>anger</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>sadness</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>fear</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>worry</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>contempt</Button>
	</div>
</div>

<style>
</style>
