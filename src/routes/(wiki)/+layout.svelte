<script>
	import { writable } from 'svelte/store';
	import Header from './components/header/header.svelte';
	import Sidebar from './components/sidebar/sidebar.svelte';
	import { setContext } from 'svelte';
	import { browser } from '$app/environment';
	import { navigating, page } from '$app/stores';
	import Footer from './components/header/footer.svelte';
	import ko from '$lib/lang/ko';
	import jp from '$lib/lang/jp';
	import Analystic from './components/analystic.svelte';

	//페이지 제목
    let pageTitle = writable('');
    setContext('page-title', pageTitle);

	//스크립트에서 모바일감지
	let isMobile = writable(false);
	setContext('isMobile', isMobile);
	if(browser){
		checkMobile();
		window.addEventListener('resize', checkMobile);
	}
	function checkMobile(){
		if(window.innerWidth < 768){
			$isMobile = true;
		}
		else{
			$isMobile = false;
		}
	}

	//로딩중..
	const noLoadingImg=['/song'];
	function checkNoLoading(pathname1, pathname2){
		if(pathname1 && pathname2){
			let result1 = true;
			let result2 = true;
			noLoadingImg.forEach(e => {
				if(pathname1.includes(e)){
					result1 = false;
				}
			})
			noLoadingImg.forEach(e => {
				if(pathname2.includes(e)){
					result2 = false;
				}
			})
			return result1 || result2;
		}
		return true;
	}
	let noLoading = true;;
	$:if($navigating){
		noLoading = checkNoLoading($navigating?.from?.url?.pathname, $navigating?.to?.url?.pathname);
	}

	//언어
	let lang = writable();
	setContext('lang', lang);
	if(browser){
		if(window.localStorage.lang)$lang = window.localStorage.lang;
		else $lang = 'ko';
	}
	$:{
		if(browser){
			window.localStorage.lang = $lang;
		}
	}

	let language = writable(ko)
	$:switch($lang){
		case 'ko':{
			$language = ko;
			break;
		}
		case 'jp':{
			$language = jp;
			break;
		}
	}
	setContext('language', language)
</script>

<svelte:head>
	{#key $pageTitle}
	<title>{$pageTitle} - 태고의 달인 위키</title>
	{/key}
</svelte:head>
<Analystic/>
<Header />
<div class="body">
	<Sidebar />
	<main>
		{#if $navigating && checkNoLoading($navigating?.from?.url?.pathname, $navigating?.to?.url?.pathname)}
		<div style="width:100%;text-align:center;">
			<img src="/ex/assets/img/icon/page/loading.svg" alt="" style="width:200px;max-width:100%;height:auto;"/>
		</div>
		{:else}
		<slot />
		{/if}
	</main>
</div>
{#if $page.url.pathname === '/'}
<Footer/>
{/if}
<style>
	.body {
		width: 100vw;
		min-width: 1490px;
		display: flex;
		flex-direction: row;
		background-color: rgb(232, 232, 232);
	}

	main {
		width: calc(100% - 300px - 140px);
		min-width: 1050px;
		box-sizing: border-box;
		background-color: white;
		margin-right: 120px;
	}

	@media only screen and (max-width: 767px) {
		/*모바일*/
		main{
			width:100vw;
			min-width:0;
			margin-right:0;
			overflow-x:hidden;
		}

		.body{
			min-width: 0;
		}
	}

	@media only screen and (max-width: 767px) {
		/*모바일*/
		:global(.for-pc) {
			display: none !important;
		}
	}

	@media only screen and (min-width: 768px) {
		/*pc*/
		:global(.for-mobile) {
			display: none !important;
		}
	}
</style>
