<script>
	import { browser } from '$app/environment';
	import Genre from './genre.svelte';
	import { page } from '$app/stores';

	export let query = '';
	export let genre = null;
	export let difficulty = null;
	export let level;
	export let bpm;
	export let search;

	export let opened = false;
	function toggle() {
		if (opened) {
			opened = false;
		} else {
			opened = true;
		}
	}

	//레벨
	let levelSelect;
	let levelLoaded = false;
	$: if (levelSelect && !levelLoaded && difficulty) {
		levelLoaded = true;
		if (level) {
			levelSelect.value = level;
		}
	}
	tick()
	.then(() => {
		level = $page.url.searchParams.get('level') ? Number($page.url.searchParams.get('level')) : null;
	})

	//맨위로
	function goTop() {
		if (browser) {
			scrollTo(scrollX, 0);
		}
	}

	function enterSearch(e) {
		if (e.key === 'Enter') {
			search();
		}
	}

	//언어
	import { getContext, tick } from 'svelte';
	let lang;
	getContext('language').subscribe((e) => {
		lang = e.song;
	});
</script>

<div class="wrapper for-mobile">
	<div class="container">
		<div
			on:click={() => {
				search();
			}}
			role="button"
			tabindex="0"
			on:keyup={() => {}}
		>
			<img src="/ex/assets/img/icon/page/search-input-icon.svg" alt="search" />
		</div>
		<input type="text" placeholder={lang.query} enterkeyhint="search" bind:value={query} on:keyup={enterSearch} />
	</div>
</div>
<div class="btn for-mobile">
	{#if opened}
		<button
			class="filter-btn filter-btn-opened"
			on:click={() => {
				toggle();
			}}
		>{lang.filterClosed}</button>
	{:else}
		<button
			class="filter-btn filter-btn-usual"
			on:click={() => {
				toggle();
			}}
		>{lang.filterOpened}</button>
	{/if}
	<button class="up-btn" on:click={goTop} />
</div>
<div class="option-wrapper for-mobile" style={opened ? '' : 'display:none;'}>
	<div class="option-container">
		<div class="genre-container">
			<Genre text={lang.Mpops} background="#59BEC5" value="pops" bind:selected={genre} />
			<Genre text={lang.Mvocaloid} background="#A5D1DA" value="vocaloid" bind:selected={genre} />
			<Genre text={lang.Manime} background="#E28DC8" value="anime" bind:selected={genre} />
			<Genre text={lang.Mnamco} background="#EB6B6A" value="namco" bind:selected={genre} />
			<Genre text={lang.Mgame} background="#B697D3" value="game" bind:selected={genre} />
			<Genre text={lang.Mvariety} background="#40C977" value="variety" bind:selected={genre} />
			<Genre text={lang.Mclassic} background="#CCBD4A" value="classic" bind:selected={genre} />
			<Genre text={lang.Mkids} background="#EBB850" value="kids" bind:selected={genre} />
		</div>
		<div class="other-container">
			<div class="other">
				<span>{lang.diff}</span>
				<select bind:value={difficulty}>
					<option value={null}>{lang.all}</option>
					<option value="easy">{lang.easy}</option>
					<option value="normal">{lang.normal}</option>
					<option value="hard">{lang.hard}</option>
					<option value="oni">{lang.mOni}</option>
					<option value="ura">{lang.mUra}</option>
					<option value="oniura">{lang.o}</option>
				</select>
			</div>
			<div class="other">
				<span>{lang.level}</span>
				<select bind:value={level} disabled={difficulty === null} bind:this={levelSelect}>
					{#if difficulty === null}
						<option value={null}>{lang.all}</option>
					{:else}
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						{#if difficulty !== 'easy'}
							<option value={6}>6</option>
							<option value={7}>7</option>
							{#if difficulty !== 'normal'}
								<option value={8}>8</option>
								{#if difficulty !== 'hard'}
									<option value={9}>9</option>
									<option value={10}>10</option>
								{/if}
							{/if}
						{/if}
					{/if}
				</select>
			</div>
			<div class="other">
				<span>BPM</span>
				<select bind:value={bpm}>
					<option value={null}>{lang.all}</option>
					<option value={10}>100↓</option>
					<option value={12}>100↑ 120↓</option>
					<option value={14}>120↑ 140↓</option>
					<option value={16}>140↑ 160↓</option>
					<option value={18}>160↑ 180↓</option>
					<option value={20}>180↑ 200↓</option>
					<option value={22}>200↑ 220↓</option>
					<option value={24}>220↑ 240↓</option>
					<option value={26}>240↑ 260↓</option>
					<option value={28}>260↑ 280↓</option>
					<option value={30}>280↑ 300↓</option>
					<option value={32}>300↑</option>
				</select>
			</div>
		</div>
		<button
			class="search"
			on:click={() => {
				search();
				opened = false;
			}}>{lang.confirm}</button
		>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;

		margin-top: 30px;

		display: flex;
		justify-content: center;
	}

	.container {
		width: calc(100% - 50px);
		height: 40px;
		background-color: rgb(230, 230, 230);
		border-radius: 15px;
		overflow: hidden;
		font-size: 16px;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		box-sizing: border-box;
	}

	.container div {
		width: 20px;
		height: 20px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.container img {
		width: 20px;
		height: 20px;
	}

	.container input {
		width: calc(100% - 40px);
		height: 100%;
		border: 0;
		outline: 0;
		background: none;
		font-weight: bold;
		font-size: 17px;
		padding-top: 4px;
	}

	.btn {
		width: 160px;
		height: 50px;
		background-color: #d83030;
		border-radius: 8px;
		overflow: hidden;
		position: fixed;
		right: 20px;
		bottom: 25px;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		z-index: 302;
	}

	.filter-btn {
		width: 110px;
		background: none;
		color: white;
		font-weight: bold;
		font-size: 17px;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border: 0;
		border-right: 1px solid white;
		outline: 0;
	}

	.filter-btn-usual {
		background-image: url('/ex/assets/img/icon/page/song/search-icon.svg');
		background-repeat: no-repeat;
		background-size: 30px;
		background-position: 10px center;
	}

	.up-btn {
		height: 100%;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 50px;
		background-color: #d83030;
		background-image: url('/ex/assets/img/icon/page/song/arrow.svg');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 23px;
		border: 0;
		border-left: 1px solid white;
		outline: 0;
	}

	.option-wrapper {
		width: 100%;
		height: 100%;

		position: fixed;
		top: 0;
		left: 0;
		z-index: 300;

		background-color: rgba(149, 149, 149, 0.5);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.option-container {
		width: 100%;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		padding-top: 15px;
		padding-bottom: 15px;
	}

	.genre-container {
		width: 100%;

		display: grid;
		grid-template-columns: repeat(4, 80px);
		column-gap: 6px;
		row-gap: 6px;
		justify-content: center;

		margin-top: 3px;
		margin-bottom: 3px;
	}

	.other-container {
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.other {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		margin-top: 10px;
	}

	.other span {
		font-size: 12px;
		margin-bottom: 5px;
	}

	.other select {
		width: 100px;
		height: 25px;
		border: 0;
		background-color: rgb(178, 178, 178);
		appearance: none;
		text-align: center;
		-webkit-text-align-last: center;
		-ms-text-align-last: center;
		-moz-text-align-last: center;
		text-align-last: center;
		color: white;
		font-weight: bold;
		font-size: 17px;
		padding-top: 2px;
		margin-left: 10px;
		margin-right: 10px;
		border-radius: 5px;
	}

	.search {
		width: 250px;
		height: 30px;
		background-color: rgb(242, 24, 24);
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0;
		border-radius: 5px;
		margin-top: 15px;
		cursor: pointer;
		color: white;
		font-weight: bold;
		padding-top: 3px;
		padding-bottom: 4px;
		box-sizing: border-box;
	}
</style>
