<script lang="ts">
	import { onMount } from 'svelte';

	export let message = '연결 중...<br />잠시만 기다려주세요';
	export let expressionSize = '300px';
	export let bubbleColor = '#2B2B2B';
	export let textColor = '#FFFFFF';
	export let mediaQueryString = 'screen and (max-width: 767px), (orientation: portrait)';

	let path = 'M281.527 177.738L391.62 102.15L409.853 140.772L281.527 177.738Z';

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
	<div class="msgBox" style="--bubble-color: {bubbleColor}; --text-color: {textColor}">
		{@html message}
	</div>
</div>

<style>
	.bubble {
		overflow: visible;
	}

	.msgZone {
		width: 50%;
		position: relative;
		/* float: left; */
		/* flex-direction: column; */
		/* overflow: visible; */
	}

	.msgBox {
		width: 90%;
		position: absolute;
		left: 450px;
		top: 60px;
		height: max-content;
		max-height: 50%;
		border-radius: 10px;
		font-weight: bolder;
		font-size: 25px;
		padding: 40px;
		/* overflow: auto; */
		color: var(--text-color);
		background-color: var(--bubble-color);
	}

	.msgBox::-webkit-scrollbar {
		display: none;
	}
</style>
