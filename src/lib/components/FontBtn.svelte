<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let size: string;
	export let clicked = false;
	export let mobile = true;

	let btnText: string;
	let fontSize: number;

	let dispatch = createEventDispatcher();

	switch (size) {
		case 'small':
			btnText = '작은';
			fontSize = 16;
			break;
		case 'medium':
			btnText = '중간';
			fontSize = 20;
			break;
		case 'large':
			btnText = '큰';
			fontSize = 24;
			break;
		default:
			console.error('Invalid font size');
	}

	if (!mobile) {
		btnText = btnText + '<br />글씨';
	}

	const handleClick = () => {
		dispatch('font-clicked', size);
	};
</script>

<button on:click={handleClick} class="font-btn" class:clicked style="--font-size: {fontSize}pt"
	>{@html btnText}</button
>

<style>
	.font-btn {
		margin: 3px;
		padding: 3px;
		width: 80px;
		height: 80px;
		background-color: var(--btn-color);
		color: var(--point-color);
		font-size: var(--font-size);
		font-weight: bolder;
		line-height: 34px;
		border-radius: 10px;
		border-style: solid;
	}

	.clicked {
		background-color: var(--point-color);
		color: var(--btn-color);
	}
</style>
