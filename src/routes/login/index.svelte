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

	let emergencyMobile;
</script>

<h1>Login</h1>
<form action="/login/api.json" method="post">
	<div>
		<label>비상연락망</label>
		010
		<input
			bind:value={emergencyMobile}
			name="emergency-mobile"
			data-role="keypad"
			type="tel"
			maxlength="8"
			placeholder="00000000"
		/>
	</div>
	<button>확인</button>
</form>

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
