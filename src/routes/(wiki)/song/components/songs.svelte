<script context="module">
	/**
	 * songs는 page에서 필터링 된 곡들입니다.
	 * lang은 검색언어 입니다.
	 * page는 검색 페이지입니다.
	 * 
	 * 여기서 page store는 p라는 이름으로 사용됩니다.
	*/
</script>

<script>
	import SongMobile from './song/song-mobile.svelte';
	import SongPc from './song/song-pc.svelte';
	import { page as p } from '$app/stores';
	import { navigating } from '$app/stores';
	import { tick } from 'svelte';
	import { browser } from '$app/environment';

	export let songs;
	export let lang;

	//pc 페이지
	export let page;
	$: songsFilteredPc = songs.filter((e, i) => (page - 1) * 30 <= i && i < page * 30);
	function getURL(page) {
		let url = new URL($p.url.href);
		url.searchParams.set('page', page);
		return url.href;
	}

	//모바일 페이지 무한로딩
	let mPage = 1;
	let songFilteredMobile = songs.filter((e, i) => (mPage - 1) * 30 <= i && i < mPage * 30);
	$:if($navigating){
		mPage = 1;
		songFilteredMobile = songs.filter((e, i) => (mPage - 1) * 30 <= i && i < mPage * 30);
	}
	let mobileSongContainer;
	function addObserver(){
		if(mobileSongContainer && browser){
			let handle = function(entries, observer){
				if(entries[0].isIntersecting){
					let t = entries[0].target;
					observer.disconnect();
					loadMore();
					tick().then(() => {
						let t2 = mobileSongContainer.querySelector(':scope > *:last-child');
						if(t !== t2){
							observer.observe(t2);
						}
					})
				}
			}
			let observer = new IntersectionObserver(handle);
			observer.observe(mobileSongContainer.querySelector(':scope > *:last-child'));
		}
	}
	tick().then(() => {addObserver()})
	function loadMore(){
		mPage++;
		songFilteredMobile = [...songFilteredMobile,...songs.filter((e, i) => (mPage - 1) * 30 <= i && i < mPage * 30)];
	}
</script>
<div class="pc-wrapper for-pc">
	<div class="pc-container">
		{#each songsFilteredPc as song}
			<SongPc {lang} {song} />
		{/each}
		<div class="pc-page">
			{#if Math.floor((page - 1)/10) !== 0}
			<a class="page" href={getURL(1)}>
				<img src="/ex/assets/img/icon/page/song/arrow2.svg" alt="" />
			</a>
			<a class="page" href={getURL(Math.floor((page - 1)/10)*10 - 9)}>
				<img src="/ex/assets/img/icon/page/song/arrow1.svg" alt="" />
			</a>
			{/if}
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as index}
				{#if Math.floor((page - 1) / 10) * 10 + index <= Math.ceil(songs.length / 30)}
					<a class="page" href={getURL(Math.floor((page - 1) / 10) * 10 + index)} style={Math.floor((page - 1) / 10) * 10 + index === page ? 'font-weight: bold;text-decoration: underline;' : ''}>{Math.floor((page - 1) / 10) * 10 + index}</a>
				{/if}
			{/each}
			{#if Math.floor((page - 1)/10) !== Math.floor(songs.length/300)}
			<a class="page" href={getURL(Math.floor((page - 1)/10)*10 + 11)}>
				<img src="/ex/assets/img/icon/page/song/arrow1.svg" style="transform: scaleX(-1);" alt="" />
			</a>
			<a class="page" href={getURL(Math.ceil(songs.length/30))}>
				<img src="/ex/assets/img/icon/page/song/arrow2.svg" style="transform: scaleX(-1);" alt="" />
			</a>
			{/if}
		</div>
	</div>
</div>
<div class="mobile-container for-mobile" bind:this={mobileSongContainer}>
	{#each songFilteredMobile as song}
		<SongMobile {lang} {song} />
	{/each}
</div>

<style>
	.pc-wrapper {
		width: 100%;

		margin-bottom: 100px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.pc-container {
		display: flex;
		flex-direction: column;
		background-color: rgb(242, 242, 242);
		border-radius: 30px;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 15px;
		padding-bottom: 25px;
		margin-top: 10px;
		box-sizing: border-box;
		width: 874px;
		min-width: 700px;
	}

	.pc-page {
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		margin-top:15px;
	}

	.pc-page a {
		margin-left: 10px;
		margin-right: 10px;
		color: black;
		text-decoration: none;
	}

	.pc-page a img {
		width: 18px;
		height: 18px;
		margin-top: 8px;
	}

	.mobile-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		margin-top: 15px;
	}
</style>
