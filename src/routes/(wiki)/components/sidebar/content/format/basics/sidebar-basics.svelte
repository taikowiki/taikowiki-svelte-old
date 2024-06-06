<script>
    import SidebarContent from '../../sidebar-content.svelte';
	import SidebarContentText from '../../sidebar-content-text.svelte';
    import { getContext } from 'svelte';

    let lang;
    getContext('language').subscribe((e) => {
        lang = e.sidebar;
    });
</script>

<SidebarContent title={lang.basics} href="/basics">
    <SidebarContentText>
        <a href="/basics/gameplay">{lang.gamePlay}</a>
    </SidebarContentText>
    <SidebarContentText>
        <a href="/basics/drumsticks">{lang.stick}</a>
    </SidebarContentText>
    <SidebarContentText>
        <a href="/basics/cabinets">{lang.cabinet}</a>
    </SidebarContentText>
    <SidebarContentText>
        <a href="/basics/howtohit">{lang.hit}</a>
    </SidebarContentText>
    <SidebarContentText>
        <a href="/basics/card">{lang.card}</a>
    </SidebarContentText>
    <SidebarContentText>
        <a href="/basics/donderhiroba">{lang.hiroba}</a>
    </SidebarContentText>
</SidebarContent>