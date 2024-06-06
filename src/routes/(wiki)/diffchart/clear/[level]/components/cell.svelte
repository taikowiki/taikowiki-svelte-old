<script>
	import { browser } from '$app/environment';
	import { getContext, onDestroy, onMount, tick } from 'svelte';

	export let song;

	//장르
	let genres = song.genre
		?.split('|')
		?.filter((e) => e !== '' && e !== '0')
		?.map((e) => Number(e))
		?.sort();
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

	//한글명
	let korName = getKorName();
	function getKorName() {
		let n = '';
		if (song.kor_name && song.kor_name !== song.jpn_name) {
			n = song.kor_name;
		}
		if (song.alias && song.alias !== n) {
			n = song.alias;
		}
		return n;
	}

	//글자 색
	function getFontColor(diff) {
		switch (diff) {
			case 'oni': {
				return 'rgb(206, 14, 136)';
			}
			case 'ura': {
				return 'rgb(80, 42, 215)';
			}
		}
	}

	//글씨 크기 조정
	let jpnText;
	let korText;
	let isMobile = getContext('isMobile');
	onMount(async () => {
		await tick();
		fontResize();
		if (browser) {
			window.addEventListener('resize', fontResize);
		}
	});
	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', fontResize);
		}
	});
	function fontResize() {
		if (!browser || $isMobile) {
			return;
		}
		if (jpnText) {
			let needResize = true;
			let currentFont = 16;
			while (needResize && currentFont > 10) {
				if (Number(getComputedStyle(jpnText).width.replace('px', '')) > Number(getComputedStyle(jpnText.parentNode).width.replace('px', ''))) {
					if (currentFont > 12) {
						currentFont--;
						jpnText.style.fontSize = `${currentFont}px`;
					} else {
						console.log(jpnText.style.whiteSpace);
						jpnText.style.textWrap = 'pretty';
						needResize = false;
					}
				} else {
					needResize = false;
				}
			}
		}
		if (korText) {
			let needResize = true;
			let currentFont = 12;
			while (needResize && currentFont > 9) {
				if (Number(getComputedStyle(korText).width.replace('px', '')) > Number(getComputedStyle(korText.parentNode).width.replace('px', ''))) {
					if (currentFont > 10) {
						currentFont--;
						korText.style.fontSize = `${currentFont}px`;
					} else {
						korText.style.textOverflow = 'ellipsis';
						korText.style.maxWidth = '100%';
						korText.style.overflow = 'hidden';
						needResize = false;
					}
				} else {
					needResize = false;
				}
			}
		}
	}
</script>

<a class="song" href={`/song/${song.song_no}`} id="cell">
	<!--장르-->
	<div class="genre-container">
		{#if genres}
			{#each genres as genre}
				<div class="genre" style={`background-color:${getGenreColor(genre)};height:calc( 100% / ${genres.length});`} />
			{/each}
		{/if}
	</div>
	<!--제목-->
	<div class="name-container">
		<div class="name-jpn" style={`color:${getFontColor(song.difficulty)};${korName ? '' : 'margin-bottom:3px;'}`} bind:this={jpnText} id="jpn">
			{song.jpn_name}
			{#if song.has_branch}
				{#if song.branch_type === 0}
					【普通】
				{:else if song.branch_type === 1}
					【玄人】
				{:else}
					【達人】
				{/if}
			{/if}
		</div>
		{#if korName}
			<div class="name-kor" bind:this={korText} id="kor">
				{korName}
			</div>
		{/if}
	</div>
	<!--속성-->
	<div class="attr-container">
		{#if song.individual}
			<div class="attr" style="background-color:#EF303E;" />
		{/if}
		{#if song.full_hard}
			<div class="attr" style="background-color:#B632ED;" />
		{/if}
		{#if song.firs_look}
			<div class="attr" style="background-color:#34D152;" />
		{/if}
	</div>
</a>

<style>
	.song {
		width: 190px;
		height: 60px;
		border-radius: 5px;
		background-color: rgb(237, 237, 237);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;
		padding-left: 3px;
		padding-right: 3px;
		box-sizing: border-box;
	}

	.genre-container {
		width: 6px;
		height: 36px;
		border-radius: 3px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 6px;
	}

	.genre {
		width: 100%;
	}

	.name-container {
		width: calc(100% - 17px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		box-sizing: border-box;
		margin-right: 3px;
		margin-bottom: 2px;
	}

	.name-jpn {
		font-size: 16px;
		font-weight: 900;
		white-space: nowrap;
	}

	.name-kor {
		font-family: 'SDKukdetopokki';
		font-weight: bold;
		font-size: 12px;
		white-space: nowrap;
		color: rgb(91, 91, 91);
		margin-top: 3px;
	}

	.attr-container {
		z-index: 1;
		position: absolute;
		bottom: 0;
		right: 0;

		display: flex;
		flex-direction: row;
	}

	.attr {
		width: 18px;
		height: 18px;
		border-radius: 9px;
		border: 2px solid white;
		box-sizing: border-box;
		z-index: 0;
	}

	@media only screen and (max-width: 767px) {
		.song {
			width: calc(100% - 10px);
			height: 40px;
		}

		.genre-container {
			height: 20px;
			margin-left: 8px;
			margin-right: 8px;
		}

		.name-container {
			width: calc(100% - 25px);
			margin-bottom: 1px;
		}

		.name-jpn {
			width: 100%;
			font-size: 13px !important;
			text-overflow: ellipsis !important;
			white-space: nowrap !important;
			overflow: hidden;
		}

		.name-kor {
			font-size: 11px !important;
		}
	}
</style>
