<script type="module" src="js/debug.js"></script>

<div id="debugZone" style="display: none">
	<h1>Emotion Control</h1>
	<nav class="menuBar">
		<ul class="btn-emotions">
			<li><a id="btn1" class="btn_emotion">NEUTRAL</a></li>
			<li><a id="btn2" class="btn_emotion">HAPPY</a></li>
			<li><a id="btn3" class="btn_emotion">DISGUST</a></li>
			<li><a id="btn4" class="btn_emotion">SURPRISE</a></li>
			<li><a id="btn5" class="btn_emotion">ANGER</a></li>
			<li><a id="btn6" class="btn_emotion">SADNESS</a></li>
			<li><a id="btn7" class="btn_emotion">FEAR</a></li>
			<li><a id="btn8" class="btn_emotion">WORRY</a></li>
			<li><a id="btn9" class="btn_emotion">CONTEMPT</a></li>
		</ul>
	</nav>

	<h1>Light Control</h1>
	<nav class="menuBar">
		<ul class="btn-lights">
			<li><a class="btn-light" id="lightOn">POWER ON</a></li>
			<li><a class="btn-light" id="lightOff">POWER OFF</a></li>
			<li>R <input type="number" class="inp-light" id="inputRed" /></li>
			<li>G <input type="number" class="inp-light" id="inputGreen" /></li>
			<li>B <input type="number" class="inp-light" id="inputBlue" /></li>
			<li><a class="btn-light" id="lightColor">COLOR</a></li>
			<li><a class="btn-light" id="lightPlus">LIGHT +</a></li>
			<li><a class="btn-light" id="lightMinus">LIGHT -</a></li>
		</ul>
	</nav>

	<div class="status" />

	<h1>Audio test</h1>
	<div class="wrapper">
		<section class="sound-clips" />
	</div>

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

				<audio id="webrtc-audio-local" autoplay="true" />
				<video id="webrtc-video-local" autoplay="true" playsinline="true" />
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

				<audio id="webrtc-audio-remote" autoplay="true" />
				<video id="webrtc-video-remote" autoplay="true" playsinline="true" />
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
</div>
