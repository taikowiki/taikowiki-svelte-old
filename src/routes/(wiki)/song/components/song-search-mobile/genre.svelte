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

<div
	class="genre"
	style={`background-color:${background};opacity:${opacity};border:${border};`}
	on:click={() => {
		click();
	}}
	role="button"
	tabindex="0"
	on:keydown={() => {}}
>
	{text}
</div>

<style>
	.genre {
		width: 80px;
		height: 30px;
		font-size: 12px;
		color: white;
		font-weight: bold;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 2px;
        box-sizing: border-box;
		text-align: center;
		text-wrap: balance;
	}
</style>
