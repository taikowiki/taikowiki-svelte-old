<script>
	import DiffInfoOtherMobile from './diff-info-other-mobile.svelte';

	export let selectedDifficulty;
	export let diffInfo;
	export let dani;
	export let songNo;
	export let chart;
	export let attributes;

	let index;
	$: switch (selectedDifficulty) {
		case 'easy': {
			index = 0;
			break;
		}
		case 'normal': {
			index = 1;
			break;
		}
		case 'hard': {
			index = 2;
			break;
		}
		case 'oni': {
			index = 3;
			break;
		}
		case 'ura': {
			index = 4;
			break;
		}
	}

	let daniByDiff;
	$: daniByDiff = dani.filter((e) => e.diff === selectedDifficulty);

	let daniOpened = false;
	function toggle() {
		if (daniOpened) {
			daniOpened = false;
		} else {
			daniOpened = true;
		}
	}

    function getDifficultyColor(difficulty) {
		switch (difficulty) {
			case 'easy': {
				return '#FF3720';
			}
			case 'normal': {
				return '#91B456';
			}
			case 'hard': {
				return '#3F4A2C';
			}
			case 'oni': {
				return '#DB117F';
			}
			case 'ura': {
				return '#4C5FEA';
			}
		}
	}

	import { getContext } from "svelte";
    let lang;
	getContext('language').subscribe((e) => {
		lang = e.songDetail;
	})
</script>

<div class="diff-info">
	<div class="other-wrapper">
		<DiffInfoOtherMobile head={lang.notes} body={diffInfo[index].notes} />
		<DiffInfoOtherMobile head={lang.balloons} body={diffInfo[index].balloon || '0'} title="달인보면 기준입니다. 300개 이상의 풍선은 카운팅되지 않습니다." />
		<DiffInfoOtherMobile head={lang.Mroll.head} head2={lang.Mroll.head2} body={diffInfo[index].rolltime} title="달인보면 기준입니다. 300개 이상의 풍선은 연타시간으로 카운팅됩니다." />
		<DiffInfoOtherMobile head={lang.Mdensity.head} head2={lang.Mdensity.head2} body={diffInfo[index].density} title="실제 밀도와 오차가 있을 수 있습니다." />
		<DiffInfoOtherMobile head={lang.branch} body={diffInfo[index].branched ? 'O' : 'X'} />
		{#if selectedDifficulty === 'oni'}
			<DiffInfoOtherMobile head={lang.chart} body={lang.charts[`d${chart.find(e => e.difficulty === 'oni')?.grade}`] || '없음'} />
		{:else if selectedDifficulty === 'ura'}
			<DiffInfoOtherMobile head={lang.chart} body={lang.charts[`d${chart.find(e => e.difficulty === 'ura')?.grade}`] || '없음'} />
		{/if}
	</div>
	<div class="bar" style={`background-color:${getDifficultyColor(selectedDifficulty)};`}/>
</div>
<div class="wrapper">
	<div class="attr">
		{#if selectedDifficulty === 'oni'}
			{#each attributes.find((e) => e.isUra === 0)?.attributes?.split('|') || [] as attribute}
				<img src={`/ex/assets/img/attributes/${attribute}.png`} alt="" />
			{/each}
		{:else if selectedDifficulty === 'ura'}
			{#each attributes.find((e) => e.isUra === 1)?.attributes?.split('|') || [] as attribute}
				<img src={`/ex/assets/img/attributes/${attribute}.png`} alt="" />
			{/each}
		{/if}
	</div>
	<div class="dani">
		<div class="dani-head">
			<span>{lang.dani}</span>
			<span>
				{#if daniByDiff.length === 0}
					X
				{:else}
					O
				{/if}
			</span>
			<button on:click={toggle}>
				{#if daniOpened}
					▲
				{:else}
					▼
				{/if}
			</button>
		</div>
		{#if daniOpened}
			<div class="dani-body">
				{#each daniByDiff as dani}
					<div class="dani-bone">
						{`${dani.version} ${dani.dani} ${dani.order}${lang.danis.nd}`}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
<div class="img-container">
	<img src={`/ex/assets/img/fumen/${songNo}/${index + 1}.png`} onload="this.parentNode.setAttribute('loaded', '')" onerror="this.remove()" alt="" />
</div>
{#each [1, 2, 3, 4, 5, 6, 7, 8] as num}
	<div class="img-container">
		<img src={`/ex/assets/img/fumen/${songNo}/${index + 1}_${num}.png`} onload="this.parentNode.setAttribute('loaded', '')" onerror="this.remove()" alt="" />
	</div>
{/each}

<style>
	.diff-info {
		width: 100%;
		height: 105px;
		background-color: rgb(239, 239, 239);
		border-radius: 15px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		position: relative;
		z-index: 10;
	}

	.other-wrapper {
		width: 626px;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	.bar {
		width: 50%;
		height: 5px;
		border-radius: 2.5px;
		position: absolute;
		bottom: 5px;
	}

	.wrapper {
		width: 100%;
		font-weight: bold;
		margin-top: 15px;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: flex-start;
	}

	.dani {
		width: 100%;
		margin-top: 5px;
		margin-bottom: 5px;
		border-radius: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: rgb(239, 239, 239);
	}

	.dani-head {
		height: 100%;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.dani-body {
		width: 100%;
		height: auto;
	}

	.dani-bone {
		width: 100%;
		text-align: center;
	}

	.dani span:nth-child(1) {
		font-size: 13px;
		font-weight: normal;
	}

	.dani span:nth-child(2) {
		display: inline-block;
		margin-left: 60px;
		margin-right: 60px;
		font-weight: bold;
		font-size: 20px;
	}

	.dani button {
		background: none;
		outline: 0;
		border: 0;
		display: inline;
		font-family: sans-serif;
		font-size: 17px;
		transform: translateY(-2px);
		cursor: pointer;
	}

	.img-container {
		width: 100%;
		margin-bottom: 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	.img-container img{
		width:100%;
		height:auto;
	}

	.attr {
		width:100%;

		display: flex;
		flex-direction: row;
		column-gap: 5px;
		flex-wrap: wrap;
	}

	.attr img{
		width:70px;
	}
</style>
