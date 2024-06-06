<script>
	export let section;
</script>

<div class="bs-content-title-wrapper" id="sectiontitle">
	<div class="bs-content-title">
		<span
			class="pointer"
			id="sectiontitle"
			role="presentation"
			on:click={function () {
				let section = Array.from(document.querySelectorAll('#section')).find((e) => e.innerText.trim() === this.innerText.trim());

				if (section) {
					window.scrollTo(window.scrollX, section.offsetTop);
				}
			}}><span class="bs-red-title-text">{section}</span> <slot /></span
		>
	</div>
	<div class="bs-gray-bar-wrapper">
		<div class="bs-gray-bar" />
	</div>
</div>

<style>
	.bs-content-title-wrapper {
		display: block;

		margin: 25px;
	}
	.bs-content-title {
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: bold;
		color: #303030;
		font-size: 25px;
	}
	.pointer {
		cursor: pointer;
	}
	.bs-red-title-text {
		color: #d63339;
	}
	.bs-gray-bar-wrapper {
		justify-content: left;
		align-items: center;
	}
	.bs-gray-bar {
		width: 100%;
		height: 5px;
		border-radius: 5px;
		background-color: #dadada;
		margin-top: 5px;
		margin-bottom: 25px;
	}
</style>
