<script lang="ts">
	import { io } from 'socket.io-client';

	const port = 28080;

	const socket = io(`http://127.0.0.1:${port}`);

	let text;

	socket.on('eventFromDevice', (message) => {
		text = message;

		console.log('->', message, text);
	});
</script>

<h1>Lighting test</h1>
{text}
