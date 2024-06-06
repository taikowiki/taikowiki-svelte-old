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

<ContentTemp title='게임 플레이'>
    <IndexWrapper>
        <Chapter chapter="1. 카드 없이 게임 플레이" class='chapter'>
            <Section class='section'>1.1 연주게임 플레이</Section>
            <br />
            <Section class='section'>1.2 세션 플레이</Section>
            <br />
            <Section class='section'>1.3 연주게임 진입 후 세션 플레이</Section>
            <br />
            <Section class='section'>1.4 오니, 오니우라 해금</Section>
        </Chapter>
        <Chapter chapter="2. 카드 플레이">
            <Section>2.1 북 선택</Section>
            <br />
            <Section>2.2 네트워크 시간</Section>
            <br />
            <Section>2.3 카드리더기 에러 문구</Section>
            <br />
            <Section>2.4 게임 플레이 모드</Section>
        </Chapter>
        <Chapter chapter="3. 상세 설명">
            <Section>3.1 장르 폴더, 기타 폴더</Section>
            <br />
            <Section>3.2 곡 선택 빠르게 하기</Section>
            <br />
            <Section>3.3 곡 선택 창</Section>
            <br />
            <Section>3.4 난이도 체계</Section>
            <br />
            <Section>3.5 연주 옵션</Section>
            <br />
            <Section>3.6 종합성적패널</Section>
            <br />
            <Section>3.7 동메달샵</Section>
        </Chapter>
    </IndexWrapper>
    <Content>
        <ChapterTitle>1. 카드 없이 게임 플레이</ChapterTitle>
        
        <SectionTitle section="1.1">연주게임 플레이</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 영상 1 (클릭시 재생)</p>
            <div class="bs-flex">
                <video class="bs-video" type="video/mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/gameplay/1.mp4" />
                </video>
            </div>

            <p>코인을 넣고 북 가운데를 두드리면 연주게임 모드를 고를 수 있습니다. 그리고 간단한 코스튬을 설정할 수 있으니, 원하는 코스튬을 선택하고 플레이해주세요.</p>
            <p class="bs-p-center">▼ 그림 2</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/gameplay/2.jpg" />
            </div>
            <p>
                <span class="bs-p-bold">あそびかた説明(즐기는 방법설명)</span> : 튜토리얼입니다. 간단한 조작 방법과 플레이하는 방법을 알 수 있습니다.
            </p>
        </div>

        <SectionTitle section="1.2">세션 플레이</SectionTitle>
        <div class="bs-content-container">
            <div class="bs-content">
                <p class="bs-p-center">▼ 영상 3 (클릭시 재생)</p>
                <div class="bs-flex"><video class="bs-video" type=video/mp4 muted loop webkit-playsinline playsinline thumbnail="3">
                        <source src="/ex/assets/vid/basics/gameplay/3.mp4">
                    </video></div>

                <p>코인을 두 배로 넣고 양쪽에서 북 가운데를 두드리면 연주게임 모드를 고를 수 있습니다. 또한 간단한 코스튬을 설정할 수 있으니, 원하는 코스튬을 선택하고 플레이해주세요.</p>

            </div>
        </div>

        <SectionTitle section="1.3">연주게임 진입 후 세션 플레이</SectionTitle>
        <div class="bs-content-container">
            <div class="bs-content">
                <p class="bs-p-center">▼ 영상 4 (클릭시 재생)</p>
                <div class="bs-flex"><video class="bs-video" type=video/mp4 muted loop webkit-playsinline playsinline thumbnail="3">
                        <source src="/ex/assets/vid/basics/gameplay/4.mp4">
                    </video></div>

                <p>아직 곡을 플레이하지 않았다면 다시 모드 진입 전으로 돌아가 세션 플레이를 할 수 있습니다.</p>
            </div>
        </div>

        <SectionTitle section="1.4">오니, 오니우라 해금</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 영상 5 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type=video/mp4 muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/gameplay/5.mp4">
                </video></div>

            <p>카드가 없는 상태여도 히든 난이도인 오니(귀신) 난이도를 해금할 수 있습니다. むずかしい(어려움) 난이도에서 오른쪽 캇을 10번 두드려주면 오니(귀신) 난이도를 해금할 수 있습니다. 그리고 일부 곡들은 히든 난이도[오니 우라(裏)]가 존재합니다. 오니 우라(裏)를 플레이하는 방법은 오니에서 우캇을 10회 두들겨서 열 수 있습니다. 또한 다시 우캇을 10회 두드리면 기존 오니로 돌아옵니다. 히든 난이도지만 같은 오니 난이도로 통용되기 때문에 오니 레벨 체계와 동일합니다. 대부분 기존 오니 보면 보다 어려운 경우가 많지만, 극소수로 기존 오니 보면 보다 쉬운 경우도 존재합니다.</p>
            <p>난이도에 관해서는 아래에 자세히 다루겠습니다.</p>
        </div>

        <ChapterTitle>2. 카드 플레이</ChapterTitle>
        
        <SectionTitle section="2.1">북 선택</SectionTitle>
        <div class="bs-content">
            <p>코인을 넣고, 양쪽 북 사이에 있는 카드 리더기에 카드를 접촉합니다.</p>
            <p class="bs-p-center">▼ 그림 6</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/6.jpg"></div>

            <p>
                <span class="bs-p-bold">ひだり(왼쪽) / つかわない(사용하지 않음) / みぎ(오른쪽)</span>
                <span>
                    카드를 접촉하고 나면 이러한 노란 창이 뜨는데, 이것은 어느 쪽 북에서 플레이 하고 싶은가에 관한 내용입니다.
                    좌우 이동은 양쪽 모서리(캇 이라 부릅니다, 이하 캇이라 부름)로, 선택은 북 가운데(동 이라 부릅니다, 이하 동이라 부름)로 합니다.
                </span>
            </p>
            <p class="bs-p-center">▼ 영상 7 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type="video/mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/gameplay/7.mp4">
                </video></div>

            <p>
                카드를 처음 사용한다면, 이후엔 닉네임을 고를 수 있습니다.
                다만 [동더히로바]에서 닉네임 변경에 관하여도 다루니 마음에 드는 것으로 고르면 되겠습니다.
            </p>
        </div>

        <SectionTitle section="2.2">네트워크 시간</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 8</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/gameplay/8.jpg" class="img75">
            </div>
            <p>
                태고의달인 네트워크는 AM 1시 30분 ~ AM 7시까지 닫혀있습니다.
                만약 그 외의 시간대에 NG가 난 경우, 해당 오락실 직원이나 사장님께 조치를 부탁드리면 되겠습니다.
                다만, 네트워크가 끊긴 경우도 데이터 기록이나 해금 같은 요소를 제외한 일반적인 플레이는 할 수 있습니다.
            </p>
        </div>

        <SectionTitle section="2.3">카드리더기 에러 문구</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 9</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/9.jpg"></div>

            <p>
                만약 이러한 창이 나온다면, 해당 카드는 이미 읽고 있으니, 카드 리더기에서 해당 카드를 치워달라는 뜻입니다.
                카드를 리더기 밖으로 옮겨준뒤 진행해주세요.
            </p>
        </div>

        <SectionTitle section="2.4">게임 플레이 모드</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 10</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/10.jpg"></div>

            <p>이제 게임 플레이를 하기위한 여러 모드들이 나옵니다.</p>
            <p>
                <span>
                    <span class="bs-p-cyan">AIバトル演奏(AI배틀연주)</span> : AI동쨩과 겨루는 모드입니다.
                </span>
                <span>
                    <span class="bs-p-red">演奏ゲーム(연주게임)</span> : 가장 기본적인 플레이입니다.
                </span>
                <span>
                    <span class="bs-p-blue">段位道場(단위도장)</span> : 5급부터 달인까지 계급을 나눠 본인의 실력을 가늠해볼 수 있는 모드입니다.
                </span>
            </p>
            <p>연주게임을 선택하여 플레이해 보겠습니다.</p>
        </div>

        <ChapterTitle>3. 상세 설명</ChapterTitle>
        <SectionTitle section="3.1">장르 폴더, 기타 폴더</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 영상 11 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type=video/mp4>
                    <source src="/ex/assets/vid/basics/gameplay/11.mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                </video></div>

            <p>
                연주게임을 선택하면 이러한 장르(폴더)들이 나오게 됩니다.
                한 곡의 장르가 여러 개인 경우도 있습니다. 주요한 장르(폴더)는 이 정도가 있으며 대부분 곡은 이 장르 안에 있습니다.
                또한 우측 상단에 남은시간과 곡을 몇번 플레이 할 수 있는 정보가 있습니다.
            </p>
            <p>
                <span>
                    <span class="bs-p-pops">ポップス(팝스)</span>
                    : <span class="bs-p-bold">팝 계열</span>을 모아놓은 장르입니다.
                </span>
                <br>
                <span>
                    <span class="bs-p-kids">キッズ(키즈)</span>
                    : 주로 <span class="bs-p-bold">유아용 or 아동용</span> 곡들을 모아놓은 장르입니다.
                </span>
                <br>
                <span>
                    <span class="bs-p-anime">アニメ(애니메)</span>
                    : <span class="bs-p-bold">애니메이션</span> 관련 곡들을 모아놓은 장르입니다.
                </span>
                <br>
                <span>
                    <span class="bs-p-vocaloid">ボカロイド曲(보컬로이드)</span>
                    : <span class="bs-p-bold">보컬로이드</span> 관련 곡들을 모아놓은 장르입니다.
                </span>
                <br>
                <span>
                    <span class="bs-p-variety">バラエティ(버라이어티)</span> : 여타 장르들에 들어가기 애매한 곡들을 모아놓은 장르입니다.</span>
                    <br>
                <span>
                    <span class="bs-p-classics">クラシック(클래식)</span>
                    : <span class="bs-p-bold">클래식</span>과 <span class="bs-p-bold">클래식 어레인지</span> 곡들을 모아놓은 장르입니다.
                </span>
                <br>
                <span>
                    <span class="bs-p-gamemusic">ゲームミュージック(게임뮤직)</span>
                    : <span class="bs-p-bold">게임</span> 내에 들어간 곡들을 모아놓은 장르입니다.
                </span>
                <br>
                <span>
                    <span class="bs-p-namco">ナムコオリジナル(남코오리지널)</span>
                    : <span class="bs-p-bold">태고 전용</span>으로 만들어진 곡들을 모아놓은 장르입니다.
                </span>
            </p>
            <p class="bs-p-center">▼ 그림 12</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/12.jpg"></div>

            <p>
                <span class="bs-p-bold">最近あそんだ曲(최근 즐긴 곡)</span> 폴더는 가장 최근에 플레이한 곡 10곡을 표기합니다.
            </p>
            <p class="bs-p-center">▼ 그림 13</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/13.jpg"></div>

            <p>
                <span class="bs-p-bold">お気に入り(즐겨찾기)</span> 폴더는 마음에 드는 노래들을 넣을 수 있습니다.
                노래를 넣는 방법은 [동더히로바]에서 자세히 다루니 이쪽을 확인해주세요.
            </p>
            <p class="bs-p-center">▼ 그림 14</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/14.jpg"></div>

            <p>
                <span class="bs-p-bold">むずかしさからえらぶ(어려운정도를 고르기)</span> 폴더는 원하는 난이도와 곡 순서를 정하여 볼수있습니다.
                이 역시 초기 고정값을 [동더히로바]에서 자세히 다루니 이쪽을 확인해주세요.
            </p>
            <p class="bs-p-center">▼ 영상 15 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type=video/mp4>
                    <source src="/ex/assets/vid/basics/gameplay/15.mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                </video></div>

            <p>
                <span>1번째줄은 난이도(어려움의 정도)를 정할 수 있습니다. 난이도에 대한 자세한 내용은 아래에서 다룹니다.</span>
                <span>2번째줄은 ★의 개수를 정할 수 있습니다. ★1 ~ ★10 사이를 선택할 수 있습니다.</span>
                <span>3번째줄은 표시 순서를 정할 수 있습니다. <span class="bs-p-bold">未ドンダフルコンボ優先(동더풀콤보가 아닌 곡 우선), 未フルコンボ優先(풀콤보가 아닌 곡 우선), 未クリア優先(클리어 못한 곡 우선), いつもどおり(평소대로)</span></span>
            </p>
            <p class="bs-p-center">▼ 그림 16</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/16.jpg"></div>

            <p>만약 폴더를 나가고 싶은 상황이라면, <span class="bs-p-bold">とじる(닫기)</span>를 눌러 나갈 수 있습니다.</p>
        </div>

        <SectionTitle section="3.2">곡 선택 빠르게 하기</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 17</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/17.gif"></div>

            <p>태고 인터페이스로는 곡을 고르는 데에 시간을 많이 소모하기에, 한쪽 캇을 연속으로 따닥 쳐줌으로써 여러 곡을 뛰어넘을 수 있습니다.</p>
        </div>

        <SectionTitle section="3.3">곡 선택 창</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 18</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/18.jpg"></div>

            <p>
                곡 선택을 하면 이러한 창이 나옵니다.
                설정(연주 옵션)은 카드를 찍지 않았을 경우에는 존재하지 않습니다.
                그리고 여러 난이도가 있으며, かんたん(쉬움), ふつう(보통), むずかしい(어려움), おに(귀신)이 존재합니다.
                또한, おに(귀신)을 아직 해금하지 않았다면, むずかしい(어려움)을 선택된 상태에서 오른쪽 캇을 10번 두드려주면 됩니다.
                어려움 이상 난이도부터는 생각보다 어려우니 쉬움이나 보통 난이도부터 입문을 시작해보도록 합시다.</p>
        </div>
        
        <SectionTitle section="3.4">난이도 체계</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 19</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/19.gif"></div>

            <p>태고의 난이도 체계는 그림 1_10 에서 설명했듯이 크게 4개로 분류됩니다. 그리고 여기서 별의 개수로 난이도를 세분화하는데, 각각 난이도의 범위가 다릅니다.</p>
            <div class="bs-flex">
                <p class="bs-difficulties">
                    <span>칸탄(간단)</span>
                    <br>
                    <span>후츠우(보통)</span>
                    <br>
                    <span>무즈카시이(어려움)</span>
                    <br>
                    <span>오니(귀신)</span>
                </p>
                <p>
                    <span>★ 1~5</span>
                    <br>
                    <span>★ 1~7</span>
                    <br>
                    <span>★ 1~8</span>
                    <br>
                    <span>★ 1~10</span>
                </p>
            </div>

            <p>위와 같으나 다만 여기서 주의해야 할 점은, 각각의 난이도별로 레벨 체계가 다르다는 점입니다.</p>
            <p class="bs-p-center">▼ 그림 20</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/20.jpg"></div>

            <p>이러한 곡이 있다면 칸탄(간단)부터 오니(귀신)까지 전부 ★1이니 같은 난이도라 생각하면 안 됩니다. 간단 ★1은 간단 레벨 체계에서의 ★1이고, 귀신 ★1도 귀신 레벨 체계에서의 ★1입니다. 이게 무슨 말이냐 하면, 보통 ★7과 귀신 ★7은 같은 난이도가 아니라는 뜻입니다. 타 리듬게임은 서로 난이도가 다를지라도 오로지 레벨 숫자만으로 난이도를 구별하지만, 태고의달인의 난이도 체계는 그렇지 않다는 것입니다.</p>
        </div>

        <SectionTitle section="3.5">연주 옵션</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 21</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/21.jpg"></div>

            <p>곡을 고르고 나서 연주 옵션을 선택하면 이러한 창이 나옵니다.</p>
            <p>
                <span class="bs-p-bold">はやさ(빠르기/배속)</span>
                <span>노트가 날아오는 속도를 설정합니다. 1.0 ~ 2.0배까진 0.1배 단위로 설정 가능하며, 2.0 ~ 4.0배까진 0.5배 단위로 설정 가능합니다.</span>
            </p>
            <p>
                <span class="bs-p-bold">ドロン(도롱/스텔스)</span>
                <span>노트 자체가 안 보이게 설정합니다. 단, 노트 하단의 문자는 그대로 출력됩니다.</span>
            </p>
            <p>
                <span class="bs-p-bold">あべこべ(아베코베/역전)</span>
                <span>동과 캇의 노트가 서로 뒤바뀌는 모드입니다. 동과 캇이 바뀌면 쉬워지는 채보들도 있는데 그러한 경우에 사용되거나 혹은 다른 이유로 사용됩니다.</span>
            </p>
            <p>
                <span class="bs-p-bold">ランダム(랜덤)</span>
                <span>노트가 동과 캇이 무작위로 나오는 모드입니다. きまぐれ(키마구레)와 でたらめ(데타라메) 두 종류가 존재하며, AC 기준 きまぐれ(키마구레)는 노트의 20%가 뒤바뀌고, でたらめ(데타라메)는 50%가 뒤바뀝니다.</span>
            </p>

            <p class="bs-p-center">▼ 그림 22</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/22.gif"></div>


            <p>
                <span class="bs-p-bold">演奏スキップ(연주스킵)</span>
                <span>플레이 도중 지금의 플레이를 그만두고 싶을 때 쓰는 모드입니다. 이 모드를 ON 하면 현재 플레이 하는 북에서 반대쪽 북의 좌캇과 우캇을 총 10회 번갈아 가며 두들기면 플레이가 스킵이 됩니다. (ex. 1P 북에서 플레이 중일시 2P 북에서 두들기기) 또한, 스킵되면 잔여 노트는 전부 불가 처리되며 무조건 클리어 실패로 처리됩니다.</span>
            </p>


            <p class="bs-p-center">▼ 그림 23</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/23.jpg"></div>


            <p>
                <span class="bs-p-bold">音符位置調整(음표위치조정)</span>
                <span>판정 중심을 조정할 수 있습니다. 최대 좌5, 우5까지 조정 가능하며, 디폴트를 선호하고 추천하지만, 개인이 느끼는 것에 따라 조정하는 것도 괜찮습니다.</span>
            </p>
            <p>
                <span class="bs-p-bold">ボイス(보이스)</span>
                <br>
                <span>플레이 도중 동쨩의 목소리 (ex. 100콤보, 200콤보, ・・・, 연타)의 유무를 설정합니다.</span>
            </p>
            <p>
                <span class="bs-p-bold">音色(음색)</span>
                <br>
                <span>북소리를 설정합니다. 기본값(태고)부터 드럼, 동쨩 등등 다양한 음색이 있습니다.</span>
            </p>
            <p>다만, 이러한 옵션들을 인게임에서 설정하는 것은 단발성으로 한 번 플레이하면 옵션을 설정하기 전의 값으로 초기화됩니다. 옵션들을 고정하는 내용은 [동더히로바]에서 자세히 다루니 이쪽을 확인해주세요.</p>
        </div>

        <SectionTitle section="3.6">종합성적패널</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 24</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/24.jpg"></div>

            <p>종합성적패널은 자신이 플레이한 곡들의 스코어랭킹과 왕관들을 종합한 패널입니다. 스코어랭킹은 총 7단계로 나뉘며, 왕관은 은관(클리어), 금관(풀콤보), 무지개관(전량/동더풀콤보/올퍼펙트)으로 나뉩니다. 또한 이 패널 표기는 칸탄(간단), 후츠우(보통), 무즈카시이(어려움), 오니(귀신) 중에서 설정할 수 있는데, 이는 [동더히로바]에서 자세히 다루니 이쪽을 확인해주세요.</p>
        </div>

        <SectionTitle section="3.7">동메달샵</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 25</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/gameplay/25.jpg"></div>

            <p>
                <span class="bs-p-bold">どんメダルショップ(동메달샵)</span>
                <br>
                각각 봄, 여름, 가을, 겨울 메달샵이 존재하며 새로운 시즌이 될 때마다 신곡이 나오며, 메달샵에 나온 지 꽤 된 곡들은 통상해금으로 풀리는 경우가 존재합니다.
            </p>
            <p class="bs-p-center">▼ 영상 26 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/gameplay/26.mp4" type=video/mp4>
                </video></div>

            <p>곡 좌측에 자물쇠 마크와 상단에 50どんメダルでゲット이라 함은 계절별 동메달 50개로 이 곡을 해금할 수 있단 소리입니다.
                게임 한판을 플레이하면 동메달 5개를 줍니다. (1곡이 아닙니다.)</p>
        </div>
    </Content>
</ContentTemp>

<style>
    @import '../components/subpage/content.css';
</style>