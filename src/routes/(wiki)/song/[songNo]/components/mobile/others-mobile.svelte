<script>
	export let genre;
	export let minBpm;
	export let maxBpm;
	export let composer;
	export let artist;
	export let playtime;

	import { getContext } from "svelte";
    let lang;
	getContext('language').subscribe((e) => {
		lang = e.songDetail;
	})

	function getGenreColor(genre) {
		switch (genre) {
			case 1: {
				return '#58BEC7';
			}
			case 2: {
				return '#E3B850';
			}
			case 3: {
				return '#E28EC7';
			}
			case 4: {
				return '#A5D1DA';
			}
			case 5: {
				return '#B798D3';
			}
			case 6: {
				return '#41CB76';
			}
			case 7: {
				return '#CBBB4A';
			}
			case 8: {
				return '#EA6C68';
			}
			default: {
				return null;
			}
		}
	}
	function getGenreText(genre) {
		switch (genre) {
			case 1: {
				return lang.Mpops;
			}
			case 2: {
				return lang.Mkids;
			}
			case 3: {
				return lang.Manime;
			}
			case 4: {
				return lang.Mvocaloid;
			}
			case 5: {
				return lang.Mgame;
			}
			case 6: {
				return lang.Mvariety;
			}
			case 7: {
				return lang.Mclassic;
			}
			case 8: {
				return lang.Mnamco;
			}
			default: {
				return null;
			}
		}
	}
</script>

<div class="wrapper">
	<div class="genre-wrapper">
		{#each genre as g}
			<div class="genre" style={`background-color:${getGenreColor(Number(g))};`}>
				{getGenreText(Number(g))}
			</div>
		{/each}
	</div>
	<div class="bpm-wrapper">
		BPM
		<span class="bpm">
			{#if minBpm === maxBpm}
				{minBpm}
			{:else}
				{minBpm}-{maxBpm}
			{/if}
		</span>
	</div>
	<div class="artist">
		{#if composer}
			{composer}
			{#if artist}
				,&nbsp;
			{/if}
		{/if}
		{artist}
	</div>
	<div class="time">
		{playtime}
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
	}

	.genre-wrapper {
		width: 100%;
		height: 30px;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start;
		align-items: flex-end;
		gap: 5px;
	}

	.genre {
		width: 80px;
		height: 30px;
		border-radius: 8px;
		font-size: 13px;
		color: white;
		display: flex;
		font-weight: bold;
		justify-content: center;
		align-items: center;
	}

	.bpm-wrapper {
		width: 100%;
		font-family: 'Noto Sans';
		font-weight: 700;
		font-size: 20px;
		color: black;
		display: flex;
		justify-content: flex-end;
		align-items: baseline;
	}

	.bpm {
		margin-left: 10px;
		font-size: 25px;
	}

	.artist,
	.time {
		text-align: right;
		font-weight: bold;
		font-size: 16px;
		color: black;
	}
</style>
