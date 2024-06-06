<script>
	import { getContext } from 'svelte';
	import FullMap from './components/fullMap.svelte';
	import Options from './components/Options.svelte';
	import Gamecenter from './components/gamecenter.svelte';
	import { page } from '$app/stores';

	export let data;

	//제목 및 언어
	let pageTitle = getContext('page-title');
	let L = getContext('lang');
    $: switch($L){
        case 'ko':{
            $pageTitle = '기체 분포도';
            break;
        }
        case 'jp':{
            $pageTitle = '設置店舗(韓国)';
			break;
        }
    }

	//검색 옵션
	let options = {
		region: null,
		price: null,
		others: []
	};

	//옵션 선택 표시
	let gamecenters = [...data.gamecenter];
	$: {
		//지역
		if (options.region) {
			gamecenters = [...data.gamecenter.filter((e) => e.region === options.region)];
		} else {
			gamecenters = [...data.gamecenter];
		}
		//가격
		if (options.price) {
			gamecenters = [
				...gamecenters.filter((e) => {
					let machines = e.price.split(',').map((e) => {
						return {
							price: Number(e.split('|')[0]),
							songs: Number(e.split('|')[1])
						};
					});
					let priceType = new Set();
					machines.forEach((e) => {
						priceType.add(e);
					});
					console.log(priceType);
					return ([...priceType].find(e => e.price === options.price.price && e.songs === options.price.songs) !== undefined)
				})
			];
		}
		else{
			gamecenters = [...gamecenters]
		}
		//추가 옵션들
		if(options.others.length === 0){
			gamecenters = [...gamecenters]
		}
		else{
			gamecenters = [...gamecenters.filter((e) => {
				let r = options.others.map(el => {
					return e[el] === 1;
				});
				return r.find(e => e === false) === undefined;
			})]
		}
	}
</script>

<div class="wrapper">
	<div class="title for-pc">기체 분포도</div>
	<FullMap gamecenter={data.gamecenter} />
	<Options bind:options regions={new Set(data.gamecenter.map((e) => e.region))} />
	{#key gamecenters}
	{#each gamecenters as gamecenter}
		<Gamecenter {gamecenter} />
	{/each}
	{/key}
</div>

<style>
	.wrapper {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		font-size: 40px;
		font-family: 'SDKukdetopokki';
		font-weight: bold;
		text-align: center;
		margin-top: 80px;
	}
</style>
