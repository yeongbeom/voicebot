<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import {
		currentStatus,
		say,
		heard,
		status,
		currentExpression,
		expression
	} from '$lib/stores/bot';
	import { endpoints } from '$lib/stores/endpoints';
	import { debugMode } from '$lib/stores/config';
	import { ttsApiKey } from '$lib/stores/api-keys';
	import axios from 'axios';

	let isActive = false;
	let errorNoReason = false;

	let chunks = [];

	let recognition = null;
	let mediaRecorder = null;
	let stream = null;

	let recog_error = null;

	function sleep(ms) {
		console.log('sleep ' + ms + 'ms');
		return new Promise((r) => setTimeout(r, ms));
	}

	const setIdle = () => {
		$currentStatus = $status.idle;
		if ($currentStatus === $status.idle) {
			recognition.start();
		}
	};

	let voices = [];

	function setVoiceList() {
		voices = window.speechSynthesis.getVoices();
	}

	function Web_Speech_API_TTS(empathyRes) {
		setVoiceList();
		if (window.speechSynthesis.onvoiceschanged !== undefined) {
			window.speechSynthesis.onvoiceschanged = setVoiceList;
		}

		if (!window.speechSynthesis) {
			console.log(
				'음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요'
			);
			return;
		}

		var lang = 'ko-KR';

		var utterThis = new SpeechSynthesisUtterance(empathyRes.text);

		utterThis.onend = function (event) {
			setIdle();
		};

		utterThis.onerror = function (event) {
			console.log('error', event);
		};

		var voiceFound = false;

		for (var i = 0; i < voices.length; i++) {
			if (
				voices[i].lang.indexOf(lang) >= 0 ||
				voices[i].lang.indexOf(lang.replace('-', '_')) >= 0
			) {
				utterThis.voice = voices[i];
				voiceFound = true;
			}
			if (i == voices.length - 1 && !voiceFound) {
				console.log('voice not found');
				return;
			}
		}

		utterThis.lang = lang;
		utterThis.pitch = 1;
		utterThis.rate = 1;
		console.log(utterThis);

		window.speechSynthesis.speak(utterThis);

		/*
		const speechMsg = new SpeechSynthesisUtterance()

		speechMsg.lang = 'ko-KR';
		speechMsg.pitch = 1;
		speechMsg.rate = 1;
		speechMsg.text = empathyRes.text;
		window.speechSynthesis.speak(speechMsg);
		*/
	}

	const fetchTtsData = async (empathyRes: EmpathyRes) => {
		/*
		const synthesize_url = 'https://naveropenapi.apigw.ntruss.com/voice/v1/tts';
		const headers_synth = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'X-NCP-APIGW-API-KEY-ID': '',
			'X-NCP-APIGW-API-KEY': ''
		};
		const res = await fetch(synthesize_url, {
			method: 'POST',
			headers: headers_synth,
			body: JSON.stringify({
				data: 'speaker=mijin&speed=0&text=만나서 반갑습니다'
			})
		});
		console.log(res);
		*/
		/*
		const synthesize_url =
			'https://speech.api.nhncloudservice.com/v1.0/appkeys/qD9Ea8c5mWL3udXa/tts';
		const headers_synth = {
			'Content-Type': 'application/json',
			Authorization: ''
		};
		const res = await fetch(synthesize_url, {
			method: 'POST',
			headers: headers_synth,
			body: JSON.stringify({
				inputText: 'hi'
			})
		});
		console.log(res);
		*/

		const synthesize_url = 'https://kakaoi-newtone-openapi.kakao.com/v1/synthesize';
		const headers_synth = {
			'Content-Type': 'application/xml',
			Authorization: 'KakaoAK ${$ttsApiKey}'
		};
		const synth_in = `<speak> <voice name='WOMAN_READ_CALM'> ${empathyRes.text} </voice> </speak>`;

		const res = await fetch(synthesize_url, {
			method: 'POST',
			headers: headers_synth,
			body: JSON.stringify({
				data: synth_in
			})
		});

		if (!res.ok) {
			const message = await res.text();
			throw new Error(message);
		}

		return await res.arrayBuffer();
	};

	const fetchEmpathyData = async (base64data) => {
		console.log('base64data: ' + base64data.slice(-10));
		const empahtyReq: EmpathyReq = {
			audio: base64data,
			text: $heard,
			uid: 'keti-id' // [TODO] connect to db
		};
		const res = await fetch($endpoints.talkEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(empahtyReq)
		});

		if (!res.ok) {
			const message = await res.text();
			throw new Error(message);
		}

		return await res.json();
	};

	onMount(() => {
		console.debug('talk.svelte mounted');

		// setVoiceList();

		isActive = true;

		const audioCtx = new AudioContext();
		let audioSource;

		const gnSpeechRecognition = (mediaRecorder) => {
			if ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition) {
				// @ts-ignore
				recognition = new webkitSpeechRecognition() || new SpeechRecognition();

				recognition.lang = 'ko-KR';
				recognition.interimResults = true;

				recognition.onstart = () => {
					console.debug(`Speech recognition started | ${$currentStatus}`);

					if (audioSource && audioSource.removeEventListenr) {
						audioSource.removeEventListenr('ended', setIdle);
					}
					mediaRecorder.start();
					console.debug(`Media recorder started | ${$currentStatus}`);
				};

				recognition.onresult = (e) => {
					if ($currentStatus === $status.idle || $currentStatus === $status.listening) {
						$currentStatus = $status.listening;
						const text = Array.from(e.results)
							.map((result) => result[0])
							.map((result) => result.transcript)
							.join('');

						if (e.results[0].isFinal) {
							if (text.includes('확인')) {
								console.log('확인?');
							}
							$say = text;
						}

						$heard = text;
					}
				};

				recognition.onerror = (e: SpeechRecognitionErrorEvent) => {
					recog_error = e.error;
					// console.error('Speech Recognition Error: ' + recog_error);
					errorNoReason = true;
				};

				recognition.onend = () => {
					console.debug(`Speech recognition ended | ${$currentStatus}`);

					if (!isActive) return;

					if (mediaRecorder.state === 'recording') mediaRecorder.stop();
					if ($currentStatus === $status.listening) $currentStatus = $status.thinking;

					if (errorNoReason && recog_error !== 'no-speech') {
						console.error('Error occurred by ' + recog_error);
						if (recog_error == 'audio-capture') {
							console.log('MediaRecorder resume!');
							console.log('currentStatus: ' + $currentStatus);
							mediaRecorder.resume();
						}
						// console.error('Error occurred without reason');
						// $currentStatus = $status.idle;
						errorNoReason = false;
					}

					if ($currentStatus === $status.idle) {
						recognition.start();
					}
				};

				recognition.start();
			} else {
				console.error('Speech Recognition Not Available');
			}
		};

		const startMediaRecorder = async (stream) => {
			mediaRecorder = new MediaRecorder(stream);

			mediaRecorder.ondataavailable = (e) => {
				chunks.push(e.data);
			};

			mediaRecorder.onstop = (e) => {
				console.debug(`Media recorder ended | ${$currentStatus}`);

				if ($currentStatus === $status.thinking) {
					const soundClips = document.querySelector('.sound-clips');
					const blob = new Blob(chunks, {
						type: 'audio/webm; codecs=opus'
					});

					if ($debugMode) {
						const clipContainer = document.createElement('article');
						const audio = document.createElement('audio');

						clipContainer.classList.add('clip');
						audio.setAttribute('controls', '');

						clipContainer.appendChild(audio);
						soundClips.appendChild(clipContainer);

						const audioURL = window.URL.createObjectURL(blob);
						audio.src = audioURL;
					}

					const reader = new FileReader();
					reader.readAsDataURL(blob);
					reader.onloadend = async () => {
						const base64data = reader.result;
						const empathyRes = await fetchEmpathyData(base64data);

						Web_Speech_API_TTS(empathyRes);

						/*
						const audioData = await fetchTtsData(empathyRes);
						
						audioCtx.decodeAudioData(audioData, (buffer) => {
							audioSource = audioCtx.createBufferSource();
							audioSource.addEventListener('ended', setIdle);
							audioSource.buffer = buffer;
							audioSource.connect(audioCtx.destination);
							audioSource.start(0);
						});
						*/

						$currentExpression = $expression[`${empathyRes.emotion}`];

						$currentStatus = $status.talking;
						$say = empathyRes.text;
					};
				}
				chunks = [];
			};

			mediaRecorder.onerror = (event) => {
				console.log('MediaRecorder error occurred!!!');
				console.error('mediaRecorder error: ${event.error.name}');
				mediaRecorder.resume();
				console.log('MediaRecorder resumed');
			};
			/*
			mediaRecorder.onerror = (e: MediaRecorderErrorEvent) => {
				const error = e.error;
				console.log('mediaRecorder error: ' + error);
				console.error(`startMediaRecorder: ${error}`);

				mediaRecorder.resume();
				console.log('MediaRecorder resumed');
				console.debug('MediaRecorder resumed');
			};
			*/
		};

		const talk = async () => {
			try {
				const constraints = {
					audio: true
				};

				stream = await navigator.mediaDevices.getUserMedia(constraints);
				console.debug('VAD:', stream);
				startMediaRecorder(stream);
				gnSpeechRecognition(mediaRecorder);
			} catch (err) {
				console.error('In talk function:', err);
			}
		};

		$currentStatus = $status.idle;
		$say = '안녕하세요';
		talk();
	});

	onDestroy(() => {
		console.debug('talk.svelte destroyed');
		isActive = false;

		$currentStatus === $status.idle;
		console.debug('status reset to idle');

		if (mediaRecorder !== null) mediaRecorder.stop();
		if (recognition !== null) recognition.stop();

		if (stream !== null) {
			stream
				.getTracks() // get all tracks from the MediaStream
				.forEach((track) => track.stop()); // stop each of them
			console.debug('stream stopped');
		}
	});
</script>

{#if $debugMode}
	<div>
		<h1>VAD debug</h1>
		<section class="sound-clips" />
	</div>
{/if}
