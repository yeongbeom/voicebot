<script lang="ts">
	import Button from '$lib/shared/button.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let expression = 'neutral';
	let talk = false;

	const changeExpression = (e) => {
		expression = e.target.innerText.toLowerCase();
	};

	const toggleTalkStatus = () => {
		talk = !talk;
	};
</script>

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
