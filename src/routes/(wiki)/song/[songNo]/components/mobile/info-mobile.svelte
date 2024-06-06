<script>
	import NameMobile from './name-mobile.svelte';
	import OthersMobile from './others-mobile.svelte';

	export let songHeader;
</script>

<div class="wrapper">
    <NameMobile jpnName={songHeader.jpnName} korName={songHeader.korName} alias={songHeader.alias} isAsia={songHeader.isAsia}/>
    <OthersMobile genre={songHeader.genre} minBpm={songHeader.minBpm} maxBpm={songHeader.maxBpm} composer={songHeader.composer} artist={songHeader.artist} playtime={songHeader.playtime}/>
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
