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

	let active = false;

	let chunks = [];

	let recognition = null;
	let mediaRecorder = null;
	let stream = null;

	const fetchSttData = async (empathyRes: EmpathyRes) => {
		const synthesize_url = 'https://kakaoi-newtone-openapi.kakao.com/v1/synthesize';
		const rest_api_key = 'b37f820cbbc5e27de9dd442ac1e6f0b6';
		const headers_synth = {
			'Content-Type': 'application/xml',
			Authorization: `KakaoAK ${rest_api_key}`
		};
		const synth_in = `<speak> <voice name='WOMAN_DIALOG_BRIGHT'> ${empathyRes.text} </voice> </speak>`;

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
		const empahtyReq: EmpathyReq = {
			audio: base64data,
			text: $heard,
			uid: 'temp-uid' // [TODO] connect to db
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
		setInterval(() => {
			console.debug(process.memoryUsage());
		}, 1000);

		active = true;

		const audioCtx = new AudioContext();

		const reader = new FileReader();
		const gnSpeechRecognition = (mediaRecorder) => {
			if ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition) {
				// @ts-ignore
				recognition = new webkitSpeechRecognition() || new SpeechRecognition();

				recognition.lang = 'ko-KR';
				recognition.interimResults = true;

				recognition.onstart = () => {
					console.debug('Speech recognition started');

					if ($currentStatus === $status.idle) {
						mediaRecorder.start();
						console.debug('Media recorder started');
					} else {
						setTimeout(() => {
							recognition.stop();
						}, 200);
					}
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

				// recognition.onerror = () => {
				//   console.error("Speech Recognition Error");
				// };

				recognition.onend = () => {
					console.debug('Speech recognition ended');

					if (active) {
						if (mediaRecorder.state === 'recording') {
							mediaRecorder.stop();
						}

						if ($currentStatus === $status.listening) {
							$currentStatus = $status.thinking;
						}

						recognition.start();
					}
				};

				recognition.start();
			} else {
				console.error('Speech Recognition Not Available');
			}
		};

		const talk = async () => {
			const constraints = {
				audio: true
			};

			try {
				stream = await navigator.mediaDevices.getUserMedia(constraints);
				console.debug('VAD:', stream);
				mediaRecorder = new MediaRecorder(stream);

				gnSpeechRecognition(mediaRecorder);

				mediaRecorder.ondataavailable = (e) => {
					chunks.push(e.data);
				};

				mediaRecorder.onstop = (e) => {
					console.debug('Media recorder ended');

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
						reader.readAsDataURL(blob);
					}
					chunks = [];
				};

				reader.onloadend = async () => {
					const base64data = reader.result;
					const empathyRes = await fetchEmpathyData(base64data);
					const audioData = await fetchSttData(empathyRes);

					audioCtx.decodeAudioData(audioData, (buffer) => {
						const audioSource = audioCtx.createBufferSource();
						audioSource.addEventListener('ended', () => {
							$currentStatus = $status.idle;
						});
						audioSource.buffer = buffer;
						audioSource.connect(audioCtx.destination);
						audioSource.start(0);
					});
					$currentExpression = $expression[`${empathyRes.emotion}`];

					$currentStatus = $status.talking;
					$say = empathyRes.text;
				};
			} catch (err) {
				console.error(err);
			}
		};

		$currentStatus = $status.idle;
		$say = '안녕하세요';
		talk();
	});

	onDestroy(() => {
		console.debug('talk.svelte destroyed');
		active = false;

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
