<script lang="ts">
	import { onMount } from 'svelte';

	export let mediaQueryString = 'screen and (max-width: 767px), (orientation: portrait)';
	export let outlineColor = '#2B2B2B';

	let path = 'M281.527 177.738L391.62 102.15L409.853 140.772L281.527 177.738Z';
	// const bubble = document.querySelector('.bubble');

	onMount(() => {
		const screenSize = window.matchMedia(mediaQueryString);
		const putBubble = (screenSize) => {
			if (screenSize.matches) {
				path = 'M58.6451 254.298L29.4936 311.56L7.43998 293.115L58.6451 254.298Z';
			} else {
				path = 'M281.527 177.738L391.62 102.15L409.853 140.772L281.527 177.738Z';
			}
		};
		screenSize.addEventListener('change', () => {
			putBubble(screenSize);
		});
	});
</script>

<div class="bubble-container">
	<svg
		class="bubble"
		width="250"
		height="250"
		viewBox="0 0 250 250"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path id="bubble__path" d={path} fill={outlineColor} />
	</svg>
</div>

<style>
	:root {
		--face-size: 300px;
	}

	.bubble {
		width: var(--face-size);
		height: var(--face-size);
		overflow: visible;
	}
</style>
