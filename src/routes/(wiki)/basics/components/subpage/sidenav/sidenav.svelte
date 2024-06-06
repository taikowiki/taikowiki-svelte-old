<script>
	import Button from './button.svelte';
    import { page } from '$app/stores';

	export let current;

	let nav = [
		{ title: '게임 플레이', sub: '게임플레이 전반에 대해 설명합니다', link: '/basics/gameplay' },
		{ title: '타법', sub: '북을 치는 방법과 요령에 대해 설명합니다', link: '/basics/howtohit' },
		{ title: '카드', sub: '카드를 통해 본인의 개인정보를 관리합니다', link: '/basics/card' },
		{ title: '북채 다루기', sub: '북채 사용법과 북채 관리에 대해 설명합니다', link: '/basics/drumsticks' },
		{ title: '아케이드 기체', sub: '오락실에 있는 게임기를 설명합니다', link: '/basics/cabinets' },
		{ title: '동더 히로바', sub: '본인 계정을 통해 다양한 정보들을 확인합니다', link: '/basics/donderhiroba' }
	];
</script>

<div class="wrapper">
	{#each nav as block}
		{#if block.link === $page.url.pathname}
			<Button title={block.title} sub={block.sub} href={block.link} red="true" />
		{:else}
			<Button title={block.title} sub={block.sub} href={block.link} />
		{/if}
	{/each}
</div>

<style>
	.wrapper {
		width: 100%;
		height: auto;

		display: flex;
		flex-wrap: wrap;

		justify-content: center;
		align-items: center;
		margin-top: 25px;
		margin-bottom: 25px;
	}

	@media only screen and (max-width: 767px) {
		.wrapper {
			width: 100%;
			height: auto;

			display: flex;
			flex-wrap: wrap;

			justify-content: center;
			align-items: center;
			margin-top: 25px;
			margin-bottom: 25px;

			flex-direction: row;
		}
		.basics-menu-bar-container {
			height: 100%;

			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			left: 10px;
		}

		.basics-menu-bar {
			height: 30%;
			width: 5px;

			margin-top: 7px;
			margin-bottom: 7px;
			margin-left: 5px;
			margin-right: 5px;

			border-radius: 15px;

			background-color: #d83030;
		}

		.basics-menu-bar-index {
			height: 50%;
			width: 5px;

			margin-top: 7px;
			margin-bottom: 7px;
			margin-left: 5px;
			margin-right: 5px;

			border-radius: 15px;

			background-color: #d83030;
		}

		.basics-menu-text {
			display: flex;
			flex-direction: column;

			justify-content: center;
			align-items: center;

			margin-right: 10px;
			margin-left: 10px;

			color: #303030;
		}
	}
</style>
