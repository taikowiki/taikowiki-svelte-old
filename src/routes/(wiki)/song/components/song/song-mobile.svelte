<script>
	export let lang;
	export let song;

	let genres;
	$: genres = song.genre
		.split('|')
		.filter((e) => e !== '' && e !== '0')
		.map((e) => Number(e));
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

	let levels;
	$: levels = song.level
		.split('|')
		.filter((e) => e !== '0')
		.map((e) => Number(e));
</script>

<a class="song" href={`/song/${song.song_no}`}>
	<div class="genre">
		{#each genres as genre}
			<div style={`width:100%;height:calc( 100% / ${genres.length} );background-color:${getGenreColor(genre)};`} />
		{/each}
	</div>
	<div class="flex">
		<div class="name">
			{#if lang === 'jpn'}
				{song.jpn_name}
			{:else if lang === 'kor'}
				{song.kor_name || song.jpn_name}
			{:else if lang === 'kor-unofficial'}
				{song.alias || song.kor_name || song.jpn_name}
			{/if}
		</div>
		<div class="bpm">
			{#if song.min_bpm === song.max_bpm}
				BPM {song.min_bpm}
			{:else}
				BPM {song.min_bpm}-{song.max_bpm}
			{/if}
		</div>
		<div class="level-container">
			{#each levels as level}
				<div class="level">
					{level}
				</div>
			{/each}
		</div>
	</div>
</a>

<style>
	.song {
		width: calc(100% - 30px);
		height: 58px;
		border-radius: 15px;
		box-sizing: border-box;
		padding-left: 10px;
		padding-right: 10px;
		align-items: center;
		display: flex;
		flex-direction: row;
		cursor: pointer;
		font-weight: bold;
		letter-spacing: -1px;
	}
	.song:nth-child(2n - 1) {
		background-color: #efefef;
	}
	.song:nth-child(2n) {
		background-color: #e2e2e2;
	}

	.genre {
		width: 7px;
		height: calc(100% - 20px);
		margin-left: 0px;
		margin-right: 6px;
		border-radius: 3px;
		overflow: hidden;
	}

	.flex {
		width: calc(100% - 19px);
		height: 100%;
		margin-left: 5px;
		flex-wrap: wrap;
		justify-content: flex-start;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.name {
		width: calc(100% - 14px);
		font-size: 14px;
		margin-top: -2px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;
		transform: translateY(1px);
		font-weight: bold;
		letter-spacing: 0px;
		text-align: left;
	}

	.bpm {
		display: flex;
		width: calc(100% - 165px);
		font-size: 10px;
		font-weight: normal;
		font-family: 'Malgul Gothic';
		letter-spacing: 0px;
		margin-top: -10px;
		transform: translateY(-1px);
	}

	.level-container {
		width: 165px;
		justify-content: flex-end;
		margin-top: -15px;
		transform: translateY(2px);
		display: flex;
		flex-direction: row;
	}

	.level {
		width: 30px;
		height: 19px;
		font-size: 11px;
		font-weight: bold;
		font-family: 'Malgun Gothic';
		color: black;
		margin-left: 0px;
		margin-right: 3px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.level::after {
		content: '';
		width: 100%;
		height: 4px;
		border-radius: 2px;
	}
	.level:nth-child(1)::after {
		background-color: #ff2703;
	}
	.level:nth-child(2)::after {
		background-color: #647e2f;
	}
	.level:nth-child(3)::after {
		background-color: #364938;
	}
	.level:nth-child(4)::after {
		background-color: #db1885;
	}
	.level:nth-child(5)::after {
		background-color: #7135db;
	}
</style>
