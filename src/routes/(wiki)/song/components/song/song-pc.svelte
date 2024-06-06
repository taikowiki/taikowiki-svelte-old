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
    $:levels = song.level.split('|').filter(e => e !== '0').map(e => Number(e));
</script>

<a class="song" href={`/song/${song.song_no}`}>
	<div class="genre">
		{#each genres as genre}
			<div style={`width:100%;height:calc( 100% / ${genres.length} );background-color:${getGenreColor(genre)};`} />
		{/each}
	</div>
	<div class="name">
		{#if lang === 'jpn'}
        {song.jpn_name}
        {:else if lang === 'kor'}
        {song.kor_name || song.jpn_name}
        {:else if lang === 'kor-unofficial'}
        {song.alias || song.kor_name || song.jpn_name}
        {/if}
	</div>
	<div class="level-container">
        {#each levels as level}
            <div class="level">
                {level}
            </div>
        {/each}
    </div>
</a>

<style>
	.song {
		height: 58px;
		border-radius: 30px;
		background-color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 30px;
		padding-right: 30px;
		margin-top: 7px;
		margin-bottom: 7px;
		cursor: pointer;
		font-family: 'Noto Sans JP', 'Noto Sans KR', sans-serif;
		font-weight: bold;
		letter-spacing: -1px;
	}
    .song:nth-child(2n - 1){
        background-color: #E2E2E2;
    }

	.genre {
		width: 13px;
		height: 18px;
		border-radius: 6px;
		overflow: hidden;
		vertical-align: middle;
		margin-left: -2px;
		margin-right: 2px;
	}

    .name{
        margin-left:10px;
        flex: 1 0 auto;
    }

	.level-container {
		width: 250px;
		height: 23px;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 5px;
	}

	.level {
		width: 46px;
		height: 23px;
		border-radius: 15px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 14px;
		letter-spacing: 0px;
	}

    .level:nth-child(1){
        background-color: #FF2703;
    }
    .level:nth-child(2){
        background-color: #647E2F;
    }
    .level:nth-child(3){
        background-color: #364938;
    }
    .level:nth-child(4){
        background-color: #DB1885;
    }
    .level:nth-child(5){
        background-color: #7135DB;
    }
</style>
