<script>
	import BannerMobileGrid from "./components/page/banner-mobile-grid.svelte";
	import BannerMobileNarrow from "./components/page/banner-mobile-narrow.svelte";
	import BannerMobileWide from "./components/page/banner-mobile-wide.svelte";
	import BannerPcGrid from "./components/page/banner-pc-grid.svelte";
	import BannerPcNarrow from './components/page/banner-pc-narrow.svelte';
	import BannerPcWide from './components/page/banner-pc-wide.svelte';
	import Logo from "./components/page/logo.svelte";
	import Search from "./components/page/search.svelte";
	import ShortcutPcWrapper from "./components/page/shortcut-pc-wrapper.svelte";
	import ShortcutPc from "./components/page/shortcut-pc.svelte";
	import NoticeMobileWrapper from "./components/page/notice-mobile-wrapper.svelte";
	import NoticeMobile from "./components/page/notice-mobile.svelte";
	import NoticePc from './components/page/notice-pc.svelte';
	import NoticePcWrapper from "./components/page/notice-pc-wrapper.svelte";
	import { getContext } from "svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";

	export let data;

	//언어
	let lang;
    getContext('language').subscribe((e) => {
        lang = e.main;
    });

	//타이틀
	let pageTitle = getContext('page-title');
	let L = getContext('lang');
    $: switch($L){
        case 'ko':{
            $pageTitle = '태고의 달인 위키';
            break;
        }
        case 'jp':{
            $pageTitle = '太鼓の達人ウィキ';
			break;
        }
    }
</script>

<Logo/>
<Search songs={data.songs}/>
<ShortcutPcWrapper>
	<ShortcutPc text={lang.searchSong} src="/ex/assets/img/icon/page/pc-shortcut (1).svg" href="/song"/>
	<ShortcutPc text={lang.centers} src="/ex/assets/img/icon/page/pc-shortcut (2).svg" href="/gamecenter"/>
	<ShortcutPc text={lang.manner} src="/ex/assets/img/icon/page/pc-shortcut (3).svg" href="/manner"/>
	<ShortcutPc text={lang.basics} src="/ex/assets/img/icon/page/pc-shortcut (4).svg" href="/basics"/>
	<ShortcutPc text={lang.chart} src="/ex/assets/img/icon/page/pc-shortcut (5).svg" href="/diffchart"/>
	<ShortcutPc text={lang.terms} src="/ex/assets/img/icon/page/pc-shortcut (6).svg" href="/terms"/>
</ShortcutPcWrapper>
<BannerMobileGrid>
	<BannerMobileWide href="/notice/152">
		<img src="/ex/assets/img/banner/mobile/comp_mobile.jpg" style="border-radius:10px;" alt=""/>
	</BannerMobileWide>
	<BannerMobileNarrow href="/song">
		<img src="/ex/assets/img/icon/page/mobile-shortcut (1).png" alt=""/>
	</BannerMobileNarrow>
	<BannerMobileNarrow href="/gamecenter">
		<img src="/ex/assets/img/icon/page/mobile-shortcut (2).png" alt=""/>
	</BannerMobileNarrow>
	<BannerMobileNarrow href="/manner">
		<img src="/ex/assets/img/icon/page/mobile-shortcut (3).png" alt=""/>
	</BannerMobileNarrow>
	<BannerMobileNarrow href="/basics">
		<img src="/ex/assets/img/icon/page/mobile-shortcut (4).png" alt=""/>
	</BannerMobileNarrow>
	<BannerMobileWide href="/diffchart">
		<img src="/ex/assets/img/icon/page/mobile-shortcut (5).png" alt=""/>
	</BannerMobileWide>
	<BannerMobileWide href="/terms">
		<img src="/ex/assets/img/icon/page/mobile-shortcut (6).png" alt=""/>
	</BannerMobileWide>
	<BannerMobileWide>
		<NoticeMobileWrapper>
			<NoticeMobile title={lang.notice} notices={data.notice}/>
			<NoticeMobile title={lang.wikiNotice} notices={data.wikiNotice}/>
		</NoticeMobileWrapper>
	</BannerMobileWide>
</BannerMobileGrid>
<BannerPcGrid>
	<BannerPcWide>
		<NoticePcWrapper>
			<NoticePc title={lang.notice} slot="left" notices={data.notice}/>
			<NoticePc title={lang.wikiNotice} slot="right" notices={data.wikiNotice}/>
		</NoticePcWrapper>
	</BannerPcWide>
	<BannerPcNarrow>
		<img src="/ex/assets/img/banner/pc/pu_pc.png" alt="" style="border-radius:20px;"/>
	</BannerPcNarrow>
	<BannerPcNarrow href="/notice/152">
		<img src="/ex/assets/img/banner/pc/comp_pc.jpg" alt="" style="border-radius:20px;"/>
	</BannerPcNarrow>
</BannerPcGrid>

<style>
</style>