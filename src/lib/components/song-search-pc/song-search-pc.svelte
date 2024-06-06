<script>
	import Dropdown from '../dropdown/dropdown.svelte';
	import Diff from './diff.svelte';
	import Genre from './genre.svelte';

	export let query = '';
	export let genre = null;
	export let difficulty = null;
	export let level;
	export let bpm;
	export let search;

	const levelOptions = [
		{
			text: '★',
			value: null,
			default: true,
			show: false
		},
		{
			text: '★ 1',
			value: 1
		},
		{
			text: '★ 2',
			value: 2
		},
		{
			text: '★ 3',
			value: 3
		},
		{
			text: '★ 4',
			value: 4
		},
		{
			text: '★ 5',
			value: 5
		},
		{
			text: '★ 6',
			value: 6
		},
		{
			text: '★ 7',
			value: 7
		},
		{
			text: '★ 8',
			value: 8
		},
		{
			text: '★ 9',
			value: 9
		},
		{
			text: '★ 10',
			value: 10
		}
	];
	export let opened;
	export let setLevel;
	$: {//난이도 변경시 레벨 상한 조절
		switch (difficulty) {
			case 'hard': {
				levelOptions
					.filter((e) => e.value <= 8 && e.value !== null)
					.forEach((e) => {
						e.show = true;
					});
				levelOptions
					.filter((e) => e.value > 8)
					.forEach((e) => {
						e.show = false;
					});
				break;
			}
			case 'normal': {
				levelOptions
					.filter((e) => e.value <= 7 && e.value !== null)
					.forEach((e) => {
						e.show = true;
					});
				levelOptions
					.filter((e) => e.value > 7)
					.forEach((e) => {
						e.show = false;
					});
				break;
			}
			case 'easy': {
				levelOptions
					.filter((e) => e.value <= 5 && e.value !== null)
					.forEach((e) => {
						e.show = true;
					});
				levelOptions
					.filter((e) => e.value > 5)
					.forEach((e) => {
						e.show = false;
					});
				break;
			}
			default: {
				levelOptions
					.filter((e) => e.value !== null)
					.forEach((e) => {
						e.show = true;
					});
				break;
			}
		}
		opened = false;
	}
	export let levelDisabled = true;
	$: if (difficulty) {//난이도 변경시 레벨 상한 조절
		if(difficulty === 'hard' && level > 8){
			setLevel(8, '★ 8')
		}
		if(difficulty === 'normal' && level > 7){
			setLevel(7, '★ 7')
		}
		if(difficulty === 'easy' && level > 5){
			setLevel(5, '★ 5')
		}
		levelDisabled = false;
	} else {
		levelDisabled = true;
	}
	$:if(!levelDisabled && setLevel){//난이도 선택 시 기본 세팅 1
		if(!level){
			setLevel(1, '★ 1');
		}
	}
	//첫 로딩시 url에 따라 레벨 설정
	let levelLoaded = false;
	$:if(setLevel && !levelLoaded && difficulty){
		levelLoaded = false;
		if(level){
			setLevel(Number(level), `★ ${level}`);
		}
	}

	const bpmOptions = [
		{
			text: 'BPM',
			value: null,
			default: true,
			show: false
		},
		{
			text: '전체',
			value: null
		},
		{
			text: '100↓',
			value: 10
		},
		{
			text: '100↑ 120↓',
			value: 12
		},
		{
			text: '120↑ 140↓',
			value: 14
		},
		{
			text: '140↑ 160↓',
			value: 16
		},
		{
			text: '160↑ 180↓',
			value: 18
		},
		{
			text: '180↑ 200↓',
			value: 20
		},
		{
			text: '200↑ 220↓',
			value: 22
		},
		{
			text: '220↑ 240↓',
			value: 24
		},
		{
			text: '240↑ 260↓',
			value: 26
		},
		{
			text: '260↑ 280↓',
			value: 28
		},
		{
			text: '280↑ 300↓',
			value: 30
		},
		{
			text: '300↑',
			value: 32
		}
	];
	export let setBpm;
	//첫 로딩시 url에 따라 bpm 설정
	let bpmLoaded = false;
	$:if(setBpm && !bpmLoaded && bpm){
		bpmLoaded = false;
		if(bpm){
			setBpm(bpm, getBpm(bpm));
		}
	}
	function getBpm(bpm){
		if(bpm == 10){
			return '100↓';
		}
		else if (bpm == 32){
			return '300↑';
		}
		else{
			return `${bpm - 2}0↑ ${bpm}0↓`
		}
	}

	function enterSearch(e) {
		if (e.key === 'Enter') {
			search();
		}
	}

	//언어
	import { getContext } from 'svelte';
    let lang;
    getContext('language').subscribe((e) => {
        lang = e.song;
    });
</script>

<div class="wrapper for-pc">
	<div class="container">
		<div class="searchbox-wrapper">
			<input class="searchbox" type="text" placeholder={lang.query} enterkeyhint="search" bind:value={query} on:keyup={enterSearch} />
		</div>
		<div class="genre-wrapper">
			<div class="genre-line">
				<Genre text={lang.pops} background="#59BEC5" value="pops" bind:selected={genre} />
				<Genre text={lang.vocaloid} background="#A5D1DA" value="vocaloid" bind:selected={genre} />
				<Genre text={lang.anime} background="#E28DC8" value="anime" bind:selected={genre} />
				<Genre text={lang.namco} background="#EB6B6A" value="namco" bind:selected={genre} />
			</div>
			<div class="genre-line">
				<Genre text={lang.game} background="#B697D3" value="game" bind:selected={genre} />
				<Genre text={lang.variety} background="#40C977" value="variety" bind:selected={genre} />
				<Genre text={lang.classic} background="#CCBD4A" value="classic" bind:selected={genre} />
				<Genre text={lang.kids} background="#EBB850" value="kids" bind:selected={genre} />
			</div>
		</div>
		<div class="option-wrapper">
			<div class="difficulty-wrapper">
				<Diff text={lang.easy} background="#FF2703" value="easy" bind:selected={difficulty} />
				<Diff text={lang.normal} background="#647E2F" value="normal" bind:selected={difficulty} />
				<Diff text={lang.hard} background="#364938" value="hard" bind:selected={difficulty} />
				<Diff text={lang.oni} background="#DB1885" value="oni" bind:selected={difficulty} />
				<Diff text={lang.ura} background="#7135DB" value="ura" bind:selected={difficulty} />
				<Diff text="" background="linear-gradient(to right, rgb(219, 24, 133), rgb(113, 53, 219) );" value="oniura" bind:selected={difficulty} />
			</div>
			<div class="others-wrapper">
				<Dropdown options={levelOptions} width="80px" height="36px" style="font-family:'Nijiiro';font-size:18px;" bind:disabled={levelDisabled} bind:value={level} bind:set={setLevel} bind:opened />
				<div style="width:8px;height:1px" />
				<Dropdown options={bpmOptions} width="100px" height="36px" bind:value={bpm} bind:set={setBpm} />
				<div style="width:15px;height:1px" />
				<div
					class="search"
					on:click={() => {
						search();
					}}
					role="button"
					tabindex="0"
					on:keyup={() => {}}
				>
					Search
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;

		padding-top: 50px;

		display: flex;
		justify-content: center;
	}

	.container {
		width: 874px;
		height: 255px;

		font-weight: bold;
		background-color: rgb(239, 239, 239);
		border-radius: 30px;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.searchbox-wrapper {
		width: 100%;
		height: 50px;

		margin-top: 20px;
		margin-bottom: 7px;

		display: flex;
		justify-content: center;
	}

	.searchbox {
		width: 752px;
		height: 38px;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		box-shadow: 0 0 0 3px rgb(175, 175, 175) inset;
		border-radius: 15px;
		padding-inline: 45px;
		font-size: 16px;
		font-weight: bold;
		margin-top: 1px;
	}

	.genre-wrapper {
		width: 100%;
		height: 85px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.genre-line {
		width: 760px;
		height: 35px;

		margin-top: 5px;
		margin-bottom: 0px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.option-wrapper {
		width: 100%;
		height: 55px;

		margin-top: 18px;
		margin-bottom: 15px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.difficulty-wrapper {
		width: 378px;
		height: 28px;

		margin-right: 11px;

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.others-wrapper {
		width: 363px;
		height: 55px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.search {
		width: 160px;
		height: 55px;
		background-color: white;
		box-shadow: 0 0 0 3px rgb(175, 175, 175) inset;
		border-radius: 25px;
		font-size: 20px;
		color: rgb(127, 127, 127);
		cursor: pointer;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
