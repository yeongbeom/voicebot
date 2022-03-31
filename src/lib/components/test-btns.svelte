<script lang="ts">
	import Button from '$lib/shared/button.svelte';
	import { currentExpression, isTalking } from '$lib/stores/bot';

	const changeExpression = (e) => {
		$currentExpression = e.target.innerText.toLowerCase();
	};
	const toggleTalkStatus = () => {
		$isTalking = !$isTalking;
	};
</script>

<div class="expressions">
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
	<!-- control other expressions -->
	<div>
		<Button on:click={changeExpression} type="classic" flat={true}>think</Button>
		<Button on:click={changeExpression} type="classic" flat={true}>listen</Button>
	</div>
	<!-- control status -->
	<div>
		<Button on:click={toggleTalkStatus} type="primary" flat={true}>talking</Button>
	</div>
</div>

<div class="status">status</div>
