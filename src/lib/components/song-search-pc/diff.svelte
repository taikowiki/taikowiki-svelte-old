<script>
	export let text;
	export let background;
	export let value;
	export let selected;

	let opacity = 1;
	let border = '';
	$: if (selected) {
		if (selected == value) {
			opacity = 1;
			border = '2px solid black';
		} else {
			opacity = 0.5;
			border = '';
		}
	} else {
		opacity = 1;
		border = '';
	}

	function click() {
		if (selected === value) {
			selected = null;
		} else {
			selected = value;
		}
	}
</script>

<div class="difficulty" style={`background:${background};opacity:${opacity};outline:${border};`} on:click={() => {click()}} role="button" tabindex="0" on:keydown={() => {}}>
    {text}
</div>

<style>
	.difficulty {
		width: 55px;
		height: 28px;
		border-radius: 10px;
		margin-left: 4px;
		margin-right: 4px;
		cursor: pointer;
		box-sizing: border-box;
		color: white;
		font-size: 11px;
		display: flex;
		justify-content: center;
		align-items: center;
    }
</style>
