<script>
    import SidebarContent from '../../sidebar-content.svelte';
	import SidebarContentText from '../../sidebar-content-text.svelte';
    import { getContext } from 'svelte';

    let lang;
    getContext('language').subscribe((e) => {
        lang = e.sidebar;
    });
</script>

<SidebarContent title={lang.searchCenter} href="/gamecenter">
    <SidebarContentText style="flex-direction:column;">
        <div>
            <a href="/gamecenter?region=서울">서울</a> <a href="/gamecenter?region=경기">경기</a> <a href="/gamecenter?region=인천">인천</a>
        </div>
        <div>
            <a href="/gamecenter?region=대전">대전</a> <a href="/gamecenter?region=충남">충남</a>
        </div>
        <div>
            <a href="/gamecenter?region=전북">전북</a> <a href="/gamecenter?region=광주">광주</a> <a href="/gamecenter?region=전남">전남</a>
        </div>
        <div>
            <a href="/gamecenter?region=경북">경북</a> <a href="/gamecenter?region=경남">경남</a> <a href="/gamecenter?region=대구">대구</a> <a href="/gamecenter?region=울산">울산</a> <a href="/gamecenter?region=부산">부산</a>
        </div>
        <div>
            <a href="/gamecenter?region=제주">제주</a>
        </div>
        <div>
            <a href="/gamecenter?region=강원">강원</a>
        </div>
    </SidebarContentText>
</SidebarContent>