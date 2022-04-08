<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	let video;
	onMount(async () => {
		video = document.getElementById('video');
		// @ts-ignore
		const constraints = (window.constraints = {
			audio: false,
			video: true
		});

		if (window.isSecureContext) {
			console.log('Secure');
		} else {
			console.log('Not Secure');
		}
		try {
			if (browser) {
				const stream = await navigator.mediaDevices.getUserMedia(constraints);
				console.log('this a stream = > ', stream);
				handleSuccess(stream);
			}
		} catch (error) {
			console.log(error);
		}
	});

	//==========================================================

	// handle success
	function handleSuccess(stream) {
		const video = document.querySelector('video');
		const videoTrack = stream.getVideoTracks();
		console.log('videoTrack', videoTrack);
		console.log(`using video device : ${videoTrack[0].label}`);
		// @ts-ignore
		window.stream = stream;
		video.srcObject = stream;
	}
</script>

<video id="video" playsinline autoplay>
	<track kind="captions" />
</video>
