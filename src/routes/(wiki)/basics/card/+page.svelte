<script>
    import IndexWrapper from '../components/subpage/sidenav/indexwrapper.svelte';
	import Chapter from '../components/subpage/sidenav/chapter.svelte';
	import Section from '../components/subpage/sidenav/section.svelte';
	import Content from '../components/subpage/content/content.svelte';
	import ChapterTitle from '../components/subpage/content/chaptertitle.svelte';
	import SectionTitle from '../components/subpage/content/sectiontitle.svelte';
    import ContentTemp from '../components/subpage/contentTemp.svelte';
    import { onMount } from 'svelte';
	import { browser } from '$app/environment';

    onMount(() => {
        if(browser){
            document.querySelectorAll('video').forEach(e => {
                e.addEventListener('click', () => {
                    e.play();
                })
            })
        }
    })
</script>
<ContentTemp title="카드">
    <IndexWrapper>
        <Chapter chapter="1. 카드" class='chapter'>
            <Section class='section'>1.1 종류</Section>
            <br />
            <Section class='section'>1.2 회원가입 및 카드등록</Section>
            <br />
            <Section class='section'>1.3 데이터이전</Section>
        </Chapter>
    </IndexWrapper>
    <Content>
        <ChapterTitle>1. 카드</ChapterTitle>

        <SectionTitle section="1.1">종류</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 1</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/card/1.jpg" class="img75">
            </div>
            <p>
                좌측 상단에 있는 카드가 Bandai Namco Passport (반다이 남코 패스포트) 라고 합니다.
                과거에는 바나패스포트 카드라는 명칭이었으나, 2022년 4월 1일부터 위와 같은 공식 명칭으로 변경되었습니다.
                또한 사진에 있는 카드 전부 Amusement IC 라는 로고가 박혀있는데, 이것은 <span class="bs-p-bold">SEGA, KONAMI, Bandai Namco, TAITO</span> 4사가 협력하여 2018년 10월 25일부터 서비스를 시작했습니다.
                기존에는 아케이드 게임사마다 별도의 카드를 사용하여 플레이했다면, 이 서비스는 카드 한 장으로 편하게 사용하자는 취지로 만들어졌습니다.
            </p>
            <p>태고의달인 플레이를 위해서라면 이중 아무 카드를 사용해도 괜찮습니다. 카드 판매기나 오락실 매장 카운터 등에서 구매할 수 있습니다. (대부분 매장에서 5,000원에 판매 중입니다.)</p>
        </div>

        <SectionTitle section="1.2">회원가입 및 카드등록</SectionTitle>
        <div class="bs-content">
            <p>카드를 구매하면, 카드 뒷면에 액세스 코드와 해당 브랜드의 카드 사용을 위한 사이트가 작성되어있습니다. 우리는 태고의달인을 하기 위해 카드를 구매했으므로, 반다이 남코 패스포트 기준으로 설명하겠습니다.</p>
            <p>회원가입을 위해 해당 사이트 주소에 들어가 보겠습니다.</p>
            <p><a href="http://user.banapassport.net">바나패스포트 링크</a></p>
            <p class="bs-p-center">▼ 그림 2</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/card/2.jpg">
            </div>
            <p>우측 상단의 Resister (회원가입) 글씨를 눌러줍니다. 계정이 이미 존재하는 경우, 이 과정은 생략해도 좋습니다.</p>
            <p class="bs-p-center">▼ 그림 3</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/card/3.jpg">
            </div>
            <p>여러 기타 서비스 ID로도 가입할 수 있으며, 기존 메일주소로 가입할 수 있습니다.</p>
            <p class="bs-p-center">▼ 그림 4</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/card/4.jpg">
            </div>
            <p>회원가입을 하고 나서 로그인을 하였다면, 우측 상단에 본인 계정을 누른 후 마이페이지 버튼을 클릭해주세요.</p>
            <p class="bs-p-center">▼ 그림 5</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/card/5.jpg">
            </div>
            <p>이곳에서 카드 신규 등록 및 데이터이전이 가능합니다. 카드 신규 등록을 위해 하단에 있는 [+ Register New Card] 버튼을 눌러주세요.</p>
            <p class="bs-p-center">▼ 그림 6</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/card/6.jpg">
            </div>
            <p>신규 등록을 위해 카드 뒷면에 있는 액세스 코드를 입력한 후에 [Register] 버튼을 누르면 해당 계정에 신규 등록이 됩니다. 주의사항이 있다면, 한 계정에 3개의 카드만 등록할 수 있으며 해당 카드는 해당 계정에 귀속됩니다. 등록은 가능하지만, 삭제는 불가합니다.</p>
        </div>

        <SectionTitle section="1.3">데이터이전</SectionTitle>
        <div class="bs-content">
            <p>카드를 잃어버리거나 카드가 훼손되는 등, 여러 이유로 카드사용이 어려워질 경우 해당 카드의 데이터를 이전할 수 있는 방법이 존재합니다. 데이터이전을 위해 <span class="bs-p-bold">[그림 5]</span>의 가운데 부분인 해당 카드 SLOT란에 [Transfer Data] 버튼을 눌러주세요.</p>
            <p class="bs-p-center">▼ 그림 7</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/card/7.jpg"></div>

            <p>새로운 카드의 액세스 코드를 입력 후 코멘트는 자유롭게 작성해주시고, 데이터이전을 하는 이유를 선택할 수 있습니다.</p>
            <p>주의사항이 있다면 새로운 카드를 구매 후, 그 새로운 카드는 게임 플레이를 해선 안 됩니다(빈 카드 상태를 유지). 또한 <span class="bs-p-bold">[그림 5]</span>의 가운데 부분인 해당 카드 SLOT란에 [Lock] 버튼이 있는데, 카드가 잠긴 상태일 경우 데이터이전을 할 때 더는 해당 카드를 사용할 수 없습니다. 꼭 잠금을 풀어주고 데이터이전을 실행해주세요.</p>
            <p>데이터이전을 했다면, 기존에 있던 사용했던 카드는 데이터가 없는 빈 카드가 되어버립니다. 그리고 새로운 카드에는 기존에 있던 데이터가 그대로 이전됩니다.</p>
        </div>

    </Content>
</ContentTemp>

<style>
    @import '../components/subpage/content.css';
</style>