<script>
	export let selected = [];
	export let value;
	export let text;

	function toggle() {
		if (selected.find((e) => e == value)) {
			selected = selected.filter((e) => e !== value);
		} else {
			selected = [...selected, value];
		}
	}

	let style;
	$: if (selected.length === 0) {
		style = `opacity: 0.4;
    background-color: rgb(128, 128, 128);
    color: rgb(238, 238, 238);`;
	} else {
		if (selected.find((e) => e == value)) {
			style = `opacity: 1;
    background-color: white;
    color: rgb(128, 128, 128);`;
		} else {
			style = `opacity: 1;
    background-color: rgb(128, 128, 128);
    color: rgb(238, 238, 238);`;
		}
	}
</script>

<button class="option" {style} on:click={toggle}>
	{text}
</button>

<style>
	.option {
		width: 68px;
		height: 25px;
		background-color: rgb(128, 128, 128);
		border: 0;
		outline: 0;
		border-radius: 15px;
		box-shadow: 0 0 0 2px rgb(128, 128, 128) inset;
		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-size: 13px;
		font-weight: bold;
		color: rgb(238, 238, 238);
		margin-left: 4px;
		margin-right: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	@media only screen and (max-width: 767px) {
		.option {
			width: 60px;
			margin-left: 0px;
			margin-right: 0px;
			font-weight: normal;
			border-radius: 8px;
		}
	}
</style>
