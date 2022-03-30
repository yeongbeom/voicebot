<script lang="ts">
	import { onMount } from 'svelte';

	export let message =
		'연결 중...<br />잠시만 기다려주세요@@@@@@<br />@@@<br /><br />@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@';
	export let expressionSize = 300;
	export let bubbleColor = '#2B2B2B';
	export let textColor = '#FFFFFF';
	export let mediaQueryString = 'screen and (max-width: 767px), (orientation: portrait)';

	let exprSize = `${expressionSize}px`;
	let top = '300px';
	let left = '0px';

	let path = 'M58.6451 254.298L29.4936 311.56L7.43998 293.115L58.6451 254.298Z';

	onMount(() => {
		const screenSize = window.matchMedia(mediaQueryString);
		const putBubble = (screenSize) => {
			if (screenSize.matches) {
				path = 'M58.6451 254.298L29.4936 311.56L7.43998 293.115L58.6451 254.298Z';
				top = '330px';
				left = '0px';
			} else {
				path = 'M281.527 177.738L391.62 102.15L409.853 140.772L281.527 177.738Z';
				top = '60px';
				left = '430px';
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
			width={exprSize}
			height={exprSize}
			viewBox="0 0 250 250"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path id="bubble__path" d={path} fill={bubbleColor} />
		</svg>
	</div>
	<div
		class="msgBox"
		style="--top: {top}; --left: {left}; --bubble-color: {bubbleColor}; --text-color: {textColor}"
	>
		{@html message}
	</div>
</div>

<style>
	.bubble {
		overflow: visible;
	}

	.msgZone {
		height: 100%;
		width: 50%;
		position: relative;
		/* flex-direction: column; */
		/* float: left; */
		/* overflow: visible; */
	}

	.msgBox {
		width: 90%;
		position: absolute;
		overflow-wrap: break-word;
		top: var(--top);
		left: var(--left);
		height: max-content;
		max-height: 50%;
		border-radius: 10px;
		font-weight: bolder;
		overflow: scroll;
		font-size: 25px;
		padding: 40px;
		color: var(--text-color);
		background-color: var(--bubble-color);
	}

	.msgBox::-webkit-scrollbar {
		display: none;
	}
</style>
