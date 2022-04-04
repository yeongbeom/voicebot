<script lang='ts'>


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
