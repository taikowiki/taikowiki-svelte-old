<script>
	import SidebarBasics from "./content/format/basics/sidebar-basics.svelte";
    import SidebarGamecenter from "./content/format/gamecenter/sidebar-gamecenter.svelte";
    import SidebarSongsearch from "./content/format/songsearch/sidebar-songsearch.svelte";
	import SidebarContent from "./content/sidebar-content.svelte";
    import SidebarContentButton from "./content/sidebar-content-button.svelte";
	import { getContext } from "svelte";

    let lang;
    getContext('language').subscribe((e) => {
        lang = e.sidebar;
    });
</script>
<nav class="for-pc">
    <div class="nav-body">
        <SidebarSongsearch/>
        <SidebarGamecenter/>
        <SidebarBasics/>
        <SidebarContent title={lang.gamecenterManner} href="/manner"/>
        <div class="icon-wrapper">
            <SidebarContentButton title={lang.diffChart} href="/diffchart" src="/assets/img/icon/layout/wiki/sidebar/chart.svg"/>
            <SidebarContentButton title={lang.terms} href="/terms" src="/assets/img/icon/layout/wiki/sidebar/terms.svg"/>
        </div>
    </div>
</nav>

<style>
    nav{
        width:320px;

        background-color: rgb(232, 232, 232);

        padding-top:30px;
        padding-left:60px;
        padding-right:60px;
        padding-bottom: 100px;

        box-sizing: border-box;
    }

    .nav-body{
        width:200px;
        
        background-color: white;

        border-radius: 20px;

        display:flex;
        flex-direction: column;
        align-items: center;

        padding-bottom:20px;
    }

    .icon-wrapper{
        width:100%;
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>