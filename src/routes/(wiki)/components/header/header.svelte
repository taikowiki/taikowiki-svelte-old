<script>
	import HeaderTextButton from './header-text-button.svelte';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';

	let pageTitle = getContext('page-title');

	let lang = getContext('lang');

	let language;
	getContext('language').subscribe((e) => {
		language = e.header;
	});
</script>

<header class="for-pc">
	<!--left-->
	<div class="left">
		<HeaderTextButton href="/" text={language.main} />
	</div>
	<!--right-->
	<div class="right">
		<!--언어변경
		<select class="lang" bind:value={$lang}>
			<option value="ko">한국어</option>
			<option value="jp">日本語</option>
		</select>
		-->
	</div>
</header>
{#if $page.url.pathname !== '/'}
	<header class="for-mobile">
		<div class="left-mobile">
			<a href="/">{language.main}</a>
			<!--언어변경
			<select class="lang lang-mobile" bind:value={$lang}>
				<option value="ko">한국어</option>
				<option value="jp">日本語</option>
			</select>
			-->
		</div>
		<div class="header-title">
			<span class="header-title-span1">太鼓の達人 Wiki</span>
			{#if $lang === 'ko'}
			<span class="header-title-span2">{$pageTitle}</span>
			{:else if $lang === 'jp'}
			<span class="header-title-span2 header-title-span2-jpn">{$pageTitle}</span>
			{/if}
		</div>
	</header>
{/if}

<style>
	header.for-pc {
		width: 100vw;
		min-width: 1490px;
		height: 50px;

		background-color: #cf4844;

		display: flex;
		flex-direction: row;
		align-items: center;

		color: white;
		font-weight: bold;

		padding-left: 155px;
		padding-right: 155px;

		box-sizing: border-box;
	}

	header.for-mobile {
		width: 100vw;
		height: 95px;

		background-color: #cf4844;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		color: white;
		font-weight: bold;

		box-sizing: border-box;
	}

	header.for-mobile a {
		text-decoration: none;
		color: white;

		margin-left: 20px;
		margin-top:8px;
	}

	header.for-mobile a::before {
		height: 12px;
		width: 6px;
		background-color: white;
		border-radius: 2px;
		content: '';
		display: inline-block;
		margin-right: 6px;
	}

	.left-mobile{
		height: 100%;
		display:flex;
		flex-direction: column;
		justify-content: center;
	}

	.header-title {
		display: flex;
		flex-direction: column;

		margin-right: 20px;
		margin-top: 7px;
	}

	.header-title-span1 {
		font-size: 14px;
		text-align: right;
	}

	.header-title-span2 {
		height: 33.6px;

		font-size: 30px;
		font-family: 'SDKukDeTopokki';
		margin-top: 3px;
	}

	.header-title-span2-jpn{
		font-family:'Noto Sans JP';
		transform: translate(4px,-9px);
	}

	.lang {
		background-color: #cf4844;
		color: white;
		font-weight: bold;
		font-size: 16px;
		outline: 0;
		border: 0;
		transform: translateY(2px);
	}

	.lang-mobile {
		font-size: 14px;
		margin-left:20px;
		text-align: center;
	}

	.left,
	.right {
		width: 50%;
		height: 100%;

		display: flex;
		align-items: center;
	}

	.left {
		flex-direction: row;
	}
	.right {
		flex-direction: row-reverse;
	}
</style>
