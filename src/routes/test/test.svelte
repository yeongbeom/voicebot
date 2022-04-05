<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		try {
			let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			var recognition = new SpeechRecognition();
		} catch (e) {
			console.error(e);
		}

		let recordingText = `Press the Play button to Start recording.`; // use this in HTML
		//recognition.continuous - If false, the recording will stop after a few seconds of silence.
		// When true, the silence period is longer (about 15 seconds)
		recognition.continuous = true;

		// onresult called every time the Speech API captures Voice.
		recognition.onresult = function (event) {
			let current = event.resultIndex;

			// Get a transcript of what was said.
			let transcript = event.results[current][0].transcript;
			console.log(transcript);
		};

		// Trigger on start
		recognition.onstart = function () {
			// setting the text to inform user about the action
			recordingText = 'Voice recognition Started. Try speaking into the microphone.';
		};
		// Trigger on end
		recognition.onspeechend = function () {
			// setting the text to inform user about the action
			recordingText = 'Voice recognition turned off.';
		};
		// Trigger on error
		recognition.onerror = function (event) {
			if (event.error == 'no-speech') {
				// setting the text to inform user about the action
				recordingText = 'No Voice was detected. Try again.';
			}
		};

		function readOutLoud(message) {
			let speech = new SpeechSynthesisUtterance();
			speech.text = message;
			speech.volume = 1;
			speech.rate = 1;
			speech.pitch = 1;
			window.speechSynthesis.speak(speech);
		}
	});
</script>

<h1>Test</h1>
