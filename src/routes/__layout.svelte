<script lang="ts">
	import { onMount } from 'svelte';
	import '../styles/global.css';

	let isPageLoaded = false;

	onMount(() => {
		isPageLoaded = true;
	});
</script>

<svelte:head>
	<title>KGC</title>
</svelte:head>

<header>
	<nav>
		<div class="links">
			<a href="/">index</a>
			<a href="/main">Main</a>
			<a href="/login">Test login</a>
			<a href="/tests/memory-leak">Test memory</a>
			<a href="/register">Test register</a>
			<a href="/settings">Settings</a>
			<a href="/services/todo-list">Todo</a>
			<a href="/tests/speed">Test speed</a>
			<a href="/tests/voicebot">Test voicebot</a>
			<a href="/tests/font">Test font</a>
			<a href="/tests/webrtc">Test WebRTC</a>
			<a href="/tests/local-webrtc">Test</a>
		</div>
	</nav>
</header>

{#if !isPageLoaded}
	<div class="loader">Loading...</div>
{/if}

<main>
	<slot />
</main>

<style>
	.loader {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		place-items: center;
		background-color: white;
		z-index: 9999;
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 20px;
	}
	a {
		font-family: Arial, Arial, Helvetica, sans-serif;
		font-size: 1rem;
		color: rgb(68, 61, 61);
		border: solid;
		border-color: greenyellow;
		border-radius: 10px;
		width: fit-content;
		padding: 10px;
		margin: 3px;
	}
	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	a:active {
		text-decoration: none;
	}
</style>
