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

    function click(){
        if(selected === value){
            selected = null;
        }
        else{
            selected = value;
        }
    }
</script>

<div class="genre" style={`background-color:${background};opacity:${opacity};border:${border};`} on:click={() => {click()}} role="button" tabindex="0" on:keydown={() => {}}>
    {text}
</div>

<style>
	.genre {
		width: 176px;
		height: 35px;
		border-radius: 15px;
		margin-left: 7px;
		margin-right: 7px;
		padding-bottom: 2px;
		color: white;
		font-size: 15px;
		cursor: pointer;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
