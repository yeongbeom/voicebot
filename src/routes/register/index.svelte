<script>
	let emergencyMobile = '';

	$: {
		if (emergencyMobile.length >= 7) {
			console.log(emergencyMobile);
		}
	}
</script>

<h1>Register</h1>
<form action="/register/api.json" method="post">
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
