<script lang="ts">
	import '../styles/global.css';
</script>

<svelte:head>
	<title>KGC</title>
</svelte:head>

<header>
	<nav>
		<div class="links">
			<a href="/">Main</a>
			<a href="/settings">Settings</a>
			<a href="/test/voicebot">Test voicebot</a>
			<a href="/test/font">Test font</a>
			<a href="/test/webrtc">Test WebRTC</a>
			<a href="/test/local-webrtc">Test</a>
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<div class="copyright">copyright 2022</div>
</footer>

<style>
	nav {
		display: flex;
		align-items: center;
		padding: 30px;
	}
	.links {
		margin: auto;
	}
	a {
		font-family: Arial, Arial, Helvetica, sans-serif;
		font-size: 2rem;
		color: rgb(68, 61, 61);
		border: solid;
		border-color: greenyellow;
		border-radius: 10px;
		width: fit-content;
		padding: 10px;
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
	footer {
		padding: 40px;
		text-align: center;
	}
	.copyright {
		color: #aaa;
		font-size: 14px;
		display: inline-block;
		padding: 20px;
		border-top: 1px solid #ddd;
	}
</style>
