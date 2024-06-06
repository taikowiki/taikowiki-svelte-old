<script>
	import Cell from "./cell.svelte";

	export let text;
	export let textStyle = '';
	export let style = '';
	export let songs;

	let opened = true;
	function toggle() {
		if (opened) {
			opened = false;
		} else {
			opened = true;
		}
	}
</script>

{#if songs.length !== 0}<!--해당하는 곡이 없으면 표시하지 않기-->
<div class="wrapper" {style}>
	<!--각 난이도 제목 부분-->
	<div class="title" style={textStyle} on:click={toggle} on:keydown={() => {}} role="presentation" id="capture90">
		<h1>{text}</h1>
	</div>
	<!--각 난이도 셀들이 들어가는 부분-->
	<div class="song-wrapper" style={opened ? `` : `display:none;`} id="capture90">
        {#each songs as song}
        <Cell {song}/>
        {/each}
    </div>
</div>
{/if}

<style>
	.wrapper {
		width: 100%;

		display:flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		width:90%;
		min-width: 1050px;
		border-radius: 10px;
		display: block;
		background-color: purple;
		height: 70px;
		text-align: center;
		padding: 1;
		margin-bottom: 0px;
		cursor: pointer;
		color: white;
	}

	.title h1 {
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin: 0;
		font-size: 28px;
		transform: translateY(8px);
		font-family: 'SDKukdetopokki';
	}

	.song-wrapper {
		background-color: transparent;
		width: 90%;
		min-width: 1050px;
		height: auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, 198px);
		justify-content: center;
		row-gap: 8px;
		column-gap: 8px;
		transform: translateY(-30px);
	}

	@media only screen and (max-width:767px){
		.title, .song-wrapper{
			width:100%;
			min-width: 0;
			border-radius: 0;
		}

		.song-wrapper{
			display:flex;
			flex-direction: column;
			align-items: center;
			row-gap: 4px;
		}
	}
</style>
