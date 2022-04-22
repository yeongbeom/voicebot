<script>
	let id = '',
		password = '',
		birthday = '',
		emergency = '';
</script>

<main class="form-signin">
	<form on:submit={submit}>
		<h1 class="h3 mb-3 fw-normal">회원가입</h1>

		<div class="form-floating">
			<input bind:value={id} type="tel" class="form-control" placeholder="휴대폰번호" />
			<label>휴대폰번호</label>
		</div>

		<div class="form-floating">
			<input bind:value={password} type="password" class="form-control" placeholder="비밀번호" />
			<label>비밀번호</label>
		</div>

		<div class="form-floating">
			<input bind:value={birthday} type="date" class="form-control" placeholder="YYMMDD" />
			<label>생년월일</label>
		</div>

		<div class="form-floating">
			<input bind:value={emergency} type="tel" class="form-control" placeholder="휴대폰번호" />
			<label>비상연락망</label>
		</div>

		<button class="w-100 btn btn-lg btn-primary" type="submit">확인</button>
	</form>
</main>
