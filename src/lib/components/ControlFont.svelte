<script lang="ts">
	import FontBtn from '$lib/components/FontBtn.svelte';
	import { fontSize } from '$lib/stores/ui';

	let clicked = [false, true, false];
	let mobile = true;

	const btnSizes = ['small', 'medium', 'large'];
	const handleClick = (e) => {
		$fontSize = e.detail;

		switch ($fontSize) {
			case btnSizes[0]:
				clicked = [true, false, false];
				break;
			case btnSizes[1]:
				clicked = [false, true, false];
				break;
			case btnSizes[2]:
				clicked = [false, false, true];
				break;
			default:
				console.error('Invalid font click event');
				break;
		}
	};
</script>

<div class="font-btns">
	{#each btnSizes as size, idx}
		<FontBtn on:font-clicked={handleClick} {size} clicked={clicked[idx]} {mobile} />
	{/each}
</div>

<style>
	.font-btns {
		display: flex;
		justify-content: flex-end;
		margin-right: 20px;
		margin-top: 20px;
	}
</style>
