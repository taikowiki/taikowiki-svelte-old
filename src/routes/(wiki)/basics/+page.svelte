<script>
    import { getContext } from 'svelte';
    import Nav from './components/mainpage/nav.svelte'
    import Title from './components/title.svelte'

    //타이틀
	let pageTitle = getContext('page-title');
	let L = getContext('lang');
    $: switch($L){
        case 'ko':{
            $pageTitle = '입문 / 기초';
            break;
        }
        case 'jp':{
            $pageTitle = 'チュートリアル（韓国語）';
			break;
        }
    }

    let nav = [
        {title: '게임 플레이', sub: '게임플레이 전반에 대해 설명합니다', link: '/basics/gameplay'},
        {title: '타법', sub: '북을 치는 방법과 요령에 대해 설명합니다', link: '/basics/howtohit'},
        {title: '카드', sub: '카드를 통해 본인의 개인정보를 관리합니다', link: '/basics/card'},
        {title: '북채 다루기', sub: '북채 사용법과 북채 관리에 대해 설명합니다', link: '/basics/drumsticks'},
        {title: '아케이드 기체', sub: '오락실에 있는 게임기를 설명합니다', link: '/basics/cabinets'},
        {title: '동더 히로바', sub: '본인 계정을 통해 다양한 정보들을 확인합니다', link: '/basics/donderhiroba'},
    ]
</script>
<div class="wrapper">
    <Title />
    <div class="basics-index">
        {#each nav as block}
            <Nav title={block.title} sub={block.sub} href={block.link}/>
        {/each}
    </div>
</div>

<style>

    .basics-index{
        width:calc(100% - 200px);

        margin-left:auto;
        margin-right:auto;
        margin-top:40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>