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
<ContentTemp title="동더 히로바">
    <IndexWrapper>
        <Chapter chapter="1. 동더히로바" class='chapter'>
            <Section class='section'>1.1 간단 설명</Section>
            <br />
            <Section class='section'>1.2 사이트 접속</Section>
            <br />
            <Section class='section'>1.3 마이페이지</Section>
            <br />
            <Section class='section'>1.4 자신의 기록</Section>
            <br />
            <Section class='section'>1.5 스코어데이터 열람</Section>
        </Chapter>
    </IndexWrapper>
    <Content>
        <ChapterTitle>1. 동더히로바</ChapterTitle>
        
        <SectionTitle section="1.1">간단 설명</SectionTitle>
        <div class="bs-content">
            <p>동더히로바는 동더 + 히로바를 결합한 단어입니다. 동더는 태고의달인 플레이어를 의미하며, 히로바는 광장이란 단어로 쓰입니다. 보통 히로바라고 부르며, 한국어로 번역 시 동더광장이라 부를 수 있습니다.</p>
            <p>AC 15부터 태고의달인을 플레이한 자신의 데이터들을 열람하거나 관리와 세부 설정 등, 랭킹또한 볼 수 있는 사이트입니다. 그러나 이는 일본 한정이며, 아시아판은 달랐습니다. AC 15부터 아시아판에서 플레이해왔던 데이터들은 기록이 되었으나, 접속 자체를 할 수 없었기 때문입니다. 다만 AC 16으로 바뀐 시점에 아시아판도 동더히로바 사용이 가능해졌습니다.</p>
        </div>

        <SectionTitle section="1.2">사이트 접속</SectionTitle>
        <div class="bs-content">
            <p>
                <span>이제 데이터들을 보기위해 해당 사이트에 접속해보겠습니다.</span>
                <br>
                <span><a href="https://donderhiroba.jp/index.php">동더히로바 링크</a></span>
            </p>
            <p class="bs-p-center">▼ 그림 1</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/1.jpg"></div>
            
            <p>❶ ログイン(로그인) 버튼을 눌러서 로그인합니다. 반다이 남코에서 가입한 아이디로 로그인할 수 있습니다.</p>
            <p>❷ 반다이 남코에서 등록한 카드와 같이 이곳에서도 카드등록을 할 수 있습니다. 반다이 남코에서 이미 등록한 카드가 있다면 새로 등록할 필요는 없습니다.</p>
            <p>❸ 원하는 카드를 선택하여 해당 카드로 로그인할 수 있습니다.</p>
            <p class="bs-p-center">▼ 그림 2</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/2.jpg"></div>
            
            <p>❶ 공지 사항입니다. 곡의 수록, 삭제 여부를 알려주기도 하며 단위도장과 여러 이벤트를 공지하기도 합니다. 또한 이전의 공지버튼을 눌러 이전 공지를 확인할 수 있습니다.</p>
            <p>❷ 노란색 부분을 메인메뉴라고 합니다. 상단에 칭호, 닉네임, 단위 유무를 알려주고 국가 및 지역이 표기되며 개인 고유 북 번호가 존재합니다. 북 번호로 해당 사람을 찾을 수 있으며, 친구 추가 및 데이터 열람이 가능한 사람만 열람할 수 있습니다. [게임 플레이 방법]에서 다룬 종합성적패널도 존재하며, 패널 하단에 메달 개수도 표기되어있습니다. 또한 세 개의 버튼이 있으며, 자세한 내용은 아래에서 다루겠습니다.</p>
            <p>❸ 현재 진행 중인 단위도장입니다. 클릭할 경우 아래와 같은 창이 나타나며 해당 단위를 클릭 시 상세정보를 알 수 있습니다.</p>
            <p class="bs-p-center">▼ 그림 3</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/3.jpg"></div>
            
            <p>❹ 친구 메뉴입니다. 친구 목록을 확인할 수 있으며, 검색도 가능합니다. 또한 도전장을 보낼 수 있으며, 상대방이 수락하면 설정한 날짜만큼 진행됩니다.</p>
            <p>❺ 기타 메뉴입니다. 기타 문의를 할 수 있으며, 약관 등 기타 메뉴들이 존재합니다. 하단에 동더히로바 나가기(로그아웃)버튼을 누르면 해당 계정을 로그아웃 할 수 있습니다.</p>
        </div>

        <SectionTitle section="1.3">마이페이지</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 4</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/4.jpg"></div>
            
            <p>❶ <br> <span class="bs-p-bold">이름 변경</span><br>닉네임 변경이 가능합니다. 한국에서는 한글 + 일부 특수문자를 사용 가능하며, 현지에 있거나, VPN을 사용하면 다른 언어로도 변경 가능합니다. 일본은 히라가나 사용이 가능하며 대만은 한자, 싱가포르라면 영어를 사용할 수 있습니다.</p>
            <p class="bs-p-bold">의상 변경</p>
            <p class="bs-p-center">▼ 그림 5</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/5.jpg"></div>
            
            <p>이곳에서는 자신의 동쨩의 색이나 코스튬, 메이크업, 푸치 캐릭터 등 치장할 수 있는 곳입니다. 상당수의 코스튬은 해금을 통해 얻을 수 있습니다.</p>
            <p class="bs-p-bold">칭호 편집, 보상 목록</p>
            <p class="bs-p-center">▼ 그림 6</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/6.jpg"></div>
            
            <p>좌측은 닉네임 바로 위에 있는 칭호를 변경할 수 있습니다. 상당수의 칭호는 해금을 통해 얻을 수 있습니다. 우측은 지금까지 해금한 보상 목록들을 확인할 수 있습니다.</p>
            <p>❷ 정말 좋아하는 곡을 설정할 수 있습니다. 1곡만 등록 가능하며, 이 곡은 자신의 정보를 공개로 설정한 경우, 다른 사람이 이 정보를 알 수 있습니다.</p>
            <p>❸ <span class="bs-p-bold">즐겨찾기</span></p>
            <p class="bs-p-center">▼ 그림 7</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/donderhiroba/7.jpg" class="img75">
            </div>
            <p>
                <span class="bs-p-bold">曲を選びなおすドン!</span> (노래를 다시 선택합니다)
                <br>
                <span class="bs-p-bold">解除</span> (해제)
            </p>
            <p>이 폴더에서는 마음에 드는 곡을 최대 30곡까지 설정할 수 있습니다. 이 곡들을 추가하면 お気に入り(즐겨찾기) 폴더에서 플레이할 수 있게 됩니다.</p>
            <p class="bs-p-center">▼ 그림 8</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/8.jpg"></div>
            
            <p>❹<br> <span class="bs-p-bold">기타 설정 및 편집</span><br>게임중이나 동더히로바의 자신의 설정을 변경할 수 있습니다. 아래 그림에서 중요한 부분을 자세히 다루겠습니다.</p>
            <p><span class="bs-p-bold">차단 목록 확인</span><br>차단 목록에 등록되어 있는 사람을 확인할 수 있습니다.</p>
            <p class="bs-p-center">▼ 그림 9</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/9.jpg"></div>
            
            <p><span class="bs-p-bold">国・地域(국가 지역)</span><br>표기상 국가 지역을 선택할 수 있습니다. 해당 사항은 언제든 변경 가능하며 지역을 변경한다 한들 동더히로바 사용에 영향을 주지 않습니다.</p>
            <p><span class="bs-p-bold">プロフィール公開設定(프로필 공개 설정)</span><br>동더히로바 내에서 타인에게 플레이 기록이나 단위도장 등 자신의 정보 공개 범위를 설정할 수 있습니다.</p>
            <p><span class="bs-p-bold">成績表示(성적 표시)</span><br>종합성적패널 및 인게임에서 곡을 고를 때 왕관, 스코어 랭크, 베스트 스코어를 보여주는가를 설정할 수 있습니다.</p>
            <p><span class="bs-p-bold">成績表示のむずかしさ(성적 표시의 어려움)</span><br>종합성적패널을 비롯하여 왕관, 스코어 랭크, 베스트 스코어를 우선하여 보여주는 난이도를 설정할 수 있습니다.</p>
            <p><span class="bs-p-bold">段位表示設定(단위 표시 설정)</span><br>단위도장을 취득했을 때, 닉네임 옆에 뜨는 단위 표시 여부를 선택할 수 있습니다.</p>
            <p><span class="bs-p-bold">デフォルト演奏オプション(디폴트 연주 옵션)</span><br><span class="bs-p-bold">[게임 플레이 방법]</span>에서 다룬 연주 옵션을 고정적으로 설정할 수 있습니다.</p>
            <p><span class="bs-p-bold">「むずかしさからえらぶ」フォルダ設定(「어려운정도를 고르기」 폴더 설정 )</span><br><span class="bs-p-bold">[게임 플레이 방법]</span>에서 다룬 원하는 난이도와 곡 순서를 고정적으로 설정할 수 있습니다.</p>
        </div>

        <SectionTitle section="1.4">자신의 기록</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 10</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/10.jpg"></div>
            
            <p>자신의 기록 페이지에서 본인의 뉴스와 여태껏 얻은 칭호의 날짜, 최근 플레이한 곡의 기록을 볼 수 있습니다.</p>
        </div>

        <SectionTitle section="1.5">스코어데이터 열람</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 11</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/donderhiroba/11.jpg"></div>
            
            <p><span class="bs-p-bold">개인 성적</span><br>개인 기록을 장르별 전 난이도로 볼 수 있습니다.</p>
            <p><span class="bs-p-bold">세계</span><br>전 세계 랭킹을 곡마다 전 난이도로 볼 수 있습니다.</p>
            <p><span class="bs-p-bold">일본</span><br>일본 내 랭킹을 곡마다 전 난이도로 볼 수 있습니다.</p>
            <p><span class="bs-p-bold">등록 헌별</span><br>일본 내 헌별로 랭킹을 곡마다 전 난이도로 볼 수 있습니다.</p>
            <p>스코어 상세 페이지에서는 해당 곡 난이도의 상세정보를 볼수있습니다. 왕관의 유무와 스코어 랭크를 확인할수 있습니다. 또한 세계랭킹을 볼수있으며, 점수를 확인할수 있습니다.</p>
            <p>
                <span class="bs-p-bold">良(량)</span>
                <br>
                <span class="bs-p-bold">可(가)</span>
                <br>
                <span class="bs-p-bold">不可(불가)</span>
                <br>
                <span class="bs-p-bold">最大コンボ(최대콤보)</span>
                <br>
                <span class="bs-p-bold">連打数(연타수)</span>
            </p>
            <p>
                <span class="bs-p-bold">プレイ回数(플레이 횟수)</span>
                <br>
                <span class="bs-p-bold">フルコンボ(풀콤보)</span>
                <br>
                <span class="bs-p-bold">クリア回数(클리어 횟수)</span>
                <br>
                <span class="bs-p-bold">ドンダフルコンボ(동더풀콤보, 전량, 올퍼펙트)</span>
            </p>
        </div>
    </Content>
</ContentTemp>

<style>
    @import '../components/subpage/content.css';
</style>