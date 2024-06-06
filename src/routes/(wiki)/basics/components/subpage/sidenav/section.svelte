<span
	class="section"
	id="section"
	role="presentation"
	on:click={function () {
		let sectionTitle = Array.from(document.querySelectorAll('#sectiontitle')).find((e) => e.innerText.trim() === this.innerText.trim());

		if (sectionTitle) {
			window.scrollTo(window.scrollX, sectionTitle.offsetTop);
		}
	}}><slot /></span
>

<style>
	.section {
		text-decoration: none;
		color: #5f5f5f;
		cursor: pointer;
	}
</style>
