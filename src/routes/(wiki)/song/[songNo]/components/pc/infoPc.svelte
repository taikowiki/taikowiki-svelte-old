<script>
	import NamePc from "./namePc.svelte";
    import OthersPc from'./OthersPc.svelte';

	export let songHeader;
</script>

<div class="wrapper">
    <NamePc jpnName={songHeader.jpnName} korName={songHeader.korName} alias={songHeader.alias} isAsia={songHeader.isAsia}/>
    <OthersPc genre={songHeader.genre} minBpm={songHeader.minBpm} maxBpm={songHeader.maxBpm} composer={songHeader.composer} artist={songHeader.artist} playtime={songHeader.playtime}/>
</div>

<style>
	.wrapper {
		width: 950px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
