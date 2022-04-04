<!-- <script lang="ts">
	const fontControl = () => {
		const btn_fonts = document.querySelectorAll('.btn_font');
		const _msg = document.querySelector('#msgBox');
		var size = '';
		for (let btn_font of btn_fonts) {
			btn_font.addEventListener('click', (event) => {
				for (var i = 0; i < btn_fonts.length; i++) {
					btn_fonts[i].classList.remove('clicked');
				}
				size = event.target.id;
				event.target.classList.add('clicked');

				if (size == 'big_font') {
					_msg.setAttribute('style', 'font-size:24pt');
				} else if (size == 'small_font') {
					_msg.setAttribute('style', 'font-size:16pt');
				} else if (size == 'normal_font') {
					_msg.setAttribute('style', 'font-size:20pt');
				}
			});
		}
	};
</script>

<div class="fontZone">
	<ul class="btns_font">
		<li>
			<a class="btn_font" id="small_font" style="font-size: 16pt">작은<br />글씨</a>
		</li>
		<li>
			<a class="btn_font clicked" id="normal_font" style="font-size: 20pt">보통<br />글씨</a>
		</li>
		<li>
			<a class="btn_font" id="big_font" style="font-size: 24pt">큰<br />글씨</a>
		</li>
		<li>
			<a class="btn_font small_btn" id="small_font" style="font-size: 16pt">작은</a>
		</li>
		<li>
			<a class="btn_font small_btn clicked" id="normal_font" style="font-size: 20pt">보통</a>
		</li>
		<li>
			<a class="btn_font small_btn" id="big_font" style="font-size: 24pt">큰</a>
		</li>
	</ul>
</div> -->
