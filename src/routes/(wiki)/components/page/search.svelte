<script context="module">
	/**
	 * songs prop은 랜덤곡 3개입니다(베열).
	*/
</script>

<script>
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';

	import SearchSong from './search-song.svelte';
	import { getContext } from 'svelte';
	export let songs;

    let query = '';

	let lang;
    getContext('language').subscribe((e) => {
        lang = e.main;
    });

	function search(name){
		let url = new URL($page.url.origin);
		url.pathname = '/song';
		url.searchParams.set('query', name);
		goto(url.href);
	}
</script>

<!--pc-->
<div class="search-pc for-pc">
	<div class="search-pc-input-wrapper">
		<img src="/assets/img/icon/page/search-input-icon.svg" alt="search" on:click={() => {search(query)}}/>
		<input type="text" placeholder={lang.search} enterkeyhint="search" bind:value={query} on:keypress={(e) => {if(e.key === 'Enter'){search(query)}}}/>
	</div>
	<div class="song-pc-wrapper">
		{#each songs as song}
			<SearchSong jpnName={song.jpn_name} genre={song.genre} songNo={song.song_no}/>
		{/each}
	</div>
</div>
<!--mobile-->
<div class="search-mobile for-mobile">
	<div class="search-mobile-input-container">
		<div class="search-mobile-input-wrapper">
			<img src="/assets/img/icon/page/search-input-icon.svg" alt="search" on:click={() => {search(query)}}/>
			<input type="text" placeholder={lang.search} enterkeyhint="search" bind:value={query}  on:keypress={(e) => {if(e.key === 'Enter'){search(query)}}}/>
		</div>
	</div>
    <div class="song-mobile-wrapper">
        {#each songs as song}
			<SearchSong jpnName={song.jpn_name} genre={song.genre} songNo={song.song_no}/>
		{/each}
    </div>
</div>

<style>
	/*pc*/
	.search-pc {
		width: 100%;
		margin-top: 30px;

		display: flex;
		flex-direction: column;
		align-items: center;

		position: relative;
	}

	.search-pc-input-wrapper {
		width: 680px;
		height: 40px;
		border: 0;
		outline: 0;
		box-shadow: 0 0 0 3px rgb(175, 175, 175) inset;
		border-radius: 16px;
		font-size: 0;
		display: flex;
		align-items: center;
	}

	.search-pc-input-wrapper img {
		width: 23px;
		height: 23px;
		display: inline-block;
		vertical-align: middle;
		margin-top: 2px;
		margin-left: 20px;
		margin-right: 10px;
		cursor: pointer;
		transform: transLateY(-1px);
	}

	.search-pc-input-wrapper input {
		width: calc(100% - 70px);
		height: 30px;
		border: 0;
		outline: 0;
		box-shadow: 0 0 0 0px rgb(175, 175, 175) inset;
		font-size: 15px;
		display: inline-block;
		vertical-align: middle;
		margin-top: 1px;
	}

	.song-pc-wrapper {
		width: calc(100% * 680 / 1096);
		min-width: 680px;
		text-align: right;
		display: inline-block;
		margin-top: 0px;
		font-weight: 800;
		letter-spacing: 0px;
		font-size: 10px;
	}

	/*mobile*/
    .search-mobile {
		width: 100vw;

		display: flex;
		flex-direction: column;
		align-items: flex-start;

		position: relative;
	}

	.search-mobile-input-container {
		width: 100vw;
		height: 60px;

		background-color: #c43d3d;

		transform: translateY(-1px);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-mobile-input-wrapper {
		width: calc(100% - 40px);
		height: 35px;
		background-color: white;
		border-radius: 8px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
        margin-bottom: 5px;
	}

	.search-mobile-input-wrapper img {
		width: 15px;
		height: 15px;
	}

	.search-mobile-input-wrapper input {
		width: calc(100% - 40px);
		height: 29px;
		margin-left: 2px;
		padding-bottom: 4px;
		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-size: 15px;
		font-weight: bold;
		color: black !important;
        box-shadow: 0 0 0 0px rgb(175, 175, 175) inset;
        border:0;
        outline: 0;
	}

    .song-mobile-wrapper{
        display:flex;
        flex-direction: column;

        margin-top:15px;
        margin-bottom: 15px;
    }
</style>
