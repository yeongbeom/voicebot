<script lang="ts">
	import Button from '$lib/shared/Button.svelte';
	import { currentExpression, currentStatus, isTalking } from '$lib/stores/bot';

	const changeExpression = (e) => {
		$currentExpression = e.target.innerText.toLowerCase();
	};
	const toggleTalkStatus = () => {
		$isTalking = !$isTalking;
	};
	const updateStatus = (e) => {
		$currentStatus = e.target.innerText.toLowerCase();
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
	<!-- control talking status -->
	<div>
		<Button on:click={toggleTalkStatus} type="primary" flat={true}>talking</Button>
	</div>
</div>

<div class="speech-bubble">
	<!-- control status -->
	<div>
		<Button on:click={updateStatus} type="secondary" flat={true}>init</Button>
		<Button on:click={updateStatus} type="secondary" flat={true}>idle</Button>
		<Button on:click={updateStatus} type="secondary" flat={true}>listening</Button>
		<Button on:click={updateStatus} type="secondary" flat={true}>thinking</Button>
		<Button on:click={updateStatus} type="secondary" flat={true}>talking</Button>
	</div>
</div>
