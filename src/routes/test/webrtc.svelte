<script lang="ts">
	import { endpoints } from '$lib/stores/endpoints';
	import { genDomElem, webrtcStart, webrtcStop } from '$lib/webrtc';
	import { onDestroy, onMount } from 'svelte';

	const webrtcParams = {
		'datachannel-parameters': '{"ordered": true}',
		'audio-codec': 'opus/48000/2',
		'use-video': 'on',
		'video-resolution': '320x240',
		'video-transform': 'none',
		'video-codec': 'H264/90000',
		'use-stun': 'on'
	};
	const debugMode = false;

	onMount(() => {
		// get DOM elements
		const domElemLocal = genDomElem('-local');
		const domElemRemote = genDomElem('-remote');

		let webrtcLocal, webrtcRemote;

		webrtcLocal = webrtcStart($endpoints.offerLocalEndpoint, webrtcParams, debugMode, domElemLocal);
		webrtcRemote = webrtcStart(
			$endpoints.offerRemoteEndpoint,
			webrtcParams,
			debugMode,
			domElemRemote
		);
		domElemLocal.startBtn.style.display = 'none';
		domElemLocal.stopBtn.style.display = 'inline-block';
		domElemRemote.startBtn.style.display = 'none';
		domElemRemote.stopBtn.style.display = 'inline-block';

		domElemLocal.stopBtn.onclick = () => {
			webrtcStop(webrtcLocal);
			domElemLocal.stopBtn.style.display = 'none';
		};

		domElemRemote.stopBtn.onclick = () => {
			webrtcStop(webrtcRemote);
			domElemRemote.stopBtn.style.display = 'none';
		};
	});
</script>

<div class="flex-container">
	<div class="flex-col">
		<h1>GNICT</h1>
		<button id="start-local">Start</button>
		<button id="stop-local" style="display: none">Stop</button>

		<h2>State</h2>
		<p>ICE gathering state: <span id="ice-gathering-state-local" /></p>
		<p>ICE connection state: <span id="ice-connection-state-local" /></p>
		<p>Signaling state: <span id="signaling-state-local" /></p>

		<div id="media-local" style="display: none">
			<h2>Media</h2>

			<audio id="webrtc-audio-local" autoplay={true} />
			<video id="webrtc-video-local" autoplay={true} playsinline={true} />
		</div>

		<h2>Data channel</h2>
		<pre id="data-channel-local" style="height: 200px" />

		<h2>SDP</h2>

		<h3>Offer</h3>
		<pre id="offer-sdp-local" />

		<h3>Answer</h3>
		<pre id="answer-sdp-local" />
	</div>
	<div class="flex-col">
		<h1>KETI</h1>
		<button id="start-remote">Start</button>
		<button id="stop-remote" style="display: none">Stop</button>

		<h2>State</h2>
		<p>ICE gathering state: <span id="ice-gathering-state-remote" /></p>
		<p>
			ICE connection state: <span id="ice-connection-state-remote" />
		</p>
		<p>Signaling state: <span id="signaling-state-remote" /></p>

		<div id="media-remote" style="display: none">
			<h2>Media</h2>

			<audio id="webrtc-audio-local" autoplay={true} />
			<video id="webrtc-video-local" autoplay={true} playsinline={true} />
		</div>

		<h2>Data channel</h2>
		<pre id="data-channel-remote" style="height: 200px" />

		<h2>SDP</h2>

		<h3>Offer</h3>
		<pre id="offer-sdp-remote" />

		<h3>Answer</h3>
		<pre id="answer-sdp-remote" />
	</div>
</div>
