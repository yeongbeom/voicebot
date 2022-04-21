<script context="module">
	export const load = ({ session }) => {
		return { props: { session } };
	};
</script>

<script lang="ts">
	export let session;
	// import { session } from '$app/stores';
	let message = '';

	const login = async () => {
		const res = await fetch('/login/api.json', {
			method: 'POST',
			body: JSON.stringify({
				username: 'HShin',
				password: '4321'
			})
		});

		const data = await res.json();
		message = data.message;
		console.log(message);
	};
</script>

<h1>Login</h1>
<p>{message}</p>

<button on:click={login}>Login</button>

{JSON.stringify(session)}

<!-- {JSON.stringify($session)} -->
<style>
	p {
		color: green;
	}
</style>
