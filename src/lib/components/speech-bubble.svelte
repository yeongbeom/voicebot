<script lang="ts">
	import { onMount } from 'svelte';

	export let expressionSize = '300px';
	export let bubbleColor = '#2B2B2B';
	export let textColor = '#FFFFFF';
	export let mediaQueryString = 'screen and (max-width: 767px), (orientation: portrait)';

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

<div class="msgZone">
	<div class="msgBox" id="msgBox" style="--bubble-color: {bubbleColor}; --text-color: {textColor}">
		연결 중...<br />잠시만 기다려주세요
	</div>
</div>

<div class="bubble-container">
	<svg
		class="bubble"
		width={expressionSize}
		height={expressionSize}
		viewBox="0 0 250 250"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path id="bubble__path" d={path} fill={bubbleColor} />
	</svg>
</div>

<style>
	.bubble {
		overflow: visible;
	}

	.msgZone {
		width: 50%;
		float: left;
		flex-direction: column;
		position: relative;
		overflow: visible;
	}

	.msgBox {
		width: 90%;
		height: max-content;
		max-height: 50%;
		border-radius: 10px;
		color: var(--text-color);
		font-weight: bolder;
		font-size: 25px;
		padding: 40px;
		overflow: auto;
		background-color: var(--bubble-color);
	}

	.msgBox::-webkit-scrollbar {
		display: none;
	}
</style>
