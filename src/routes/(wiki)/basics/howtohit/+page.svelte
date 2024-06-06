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

<ContentTemp title='타법'>
    <IndexWrapper>
        <Chapter chapter="1. 타법" class='chapter'>
            <Section class='section'>1.1 완전 분업</Section>
            <br />
            <Section class='section'>1.2 부분 분업</Section>
            <br />
            <Section class='section'>1.3 한손 혹사</Section>
            <br />
            <Section class='section'>1.4 양손 교차</Section>
            <br />
            <Section class='section'>1.5 이복 역단</Section>
        </Chapter>
        
    </IndexWrapper>
    <Content>
        <ChapterTitle>1. 타법</ChapterTitle>
        <SectionTitle section="1.1">완전 분업</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 영상 1 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type="video/mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/howtohit/1.mp4">
                </video></div>

            <p>무조건 한손은 동, 다른 한손은 캇으로 고정시키고 두들기는 타법입니다.</p>
            <p>당장은 노트를 처리하기에 매우 편하기에 초심자들이 이 타법을 쓰게됩니다. 하지만 고난이도로 올라갈수록 노트는 점점 복잡해지며 빨라지게 되는데, 이러한 타법으로는 노트를 처리하기 굉장히 힘들어지게됩니다. 노트들이 점점 빨라질수록 체력을 굉장히 많이 소모하게 되는 타법이며, 실수하기 쉬운 타법입니다.</p>
            <p class="bs-p-bold">혹여나 이 타법을 쓰고있다면 반드시 이 타법만큼은 탈피하길 권장합니다.</p>
        </div>
        
        <SectionTitle section="1.2">부분 분업</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 영상 2 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type="video/mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/howtohit/2.mp4">
                </video></div>

            <p>분업의 유형 중 하나지만, 완전 분업과 다른 점은 붙어서 나오는 노트(복합 노트)들을 양손으로 처리하는 것입니다.</p>
            <p>완전 분업과 달리 적어도 분업으로 처리하기 힘든 노트들을 양손을 쓴다는 점에서 훨씬 나은 타법이며, 그나마 정상적은 태고의달인 플레이가 가능해집니다. 그러나 이 타법도 큰 단점이 있는데, 기본 베이스가 분업이기에 판정 뭉개짐이 발생할 확률이 매우 높습니다. 후술할 타법들이 처리력, 판정적으로 우위이기 때문에 이 타법도 추천하지 않습니다.</p>
        </div>

        <SectionTitle section="1.3">한손 혹사</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 영상 3 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type="video/mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/howtohit/3.mp4">
                </video></div>

            <p>자신이 주로 사용하는 손을 중심으로 치는 타법입니다. 예를 들어 오른손잡이일 경우, 오른손으로 단일 노트들을 비롯하여, 복합 노트들을 시작하게 됩니다.</p>
            <p>상당히 안정적인 판정을 구사할 수 있으며, 특히 저속곡에서 더더욱 빛을 발합니다. 박자감을 잡는 데에 단 하나의 손만 신경 쓰면 되기에 안정적으로 박자감을 잡을 수 있게 됩니다. 다만 단점이 있다면 한 손을 기준으로 플레이하다 보니 그 손의 체력소모가 상당합니다. 체력곡, 고속곡으로 나아갈 경우 이는 더욱 심해집니다. 아주 빠른곡들은 필연적으로 양손을 사용할 수밖에 없기 때문에 어느 정도 한계성이 있는 타법입니다. 물론, 판정을 잡는 데에는 필요한 타법이므로 익혀두면 매우 좋습니다.</p>
        </div>

        <SectionTitle section="1.4">양손 교차</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 영상 4 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type="video/mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/howtohit/4.mp4">
                </video></div>

            <p>기본적으로 어떤 형태의 노트든 좌우 교대로 계속 두들기는 타법입니다.</p>
            <p>한손 혹사가 한 손을 중심으로 노트들을 처리했다면, 양손 교차는 계속해서 왼손과 오른손이 번갈아 가며 교대한다는 차이점이 있습니다. 양손이 균등하게 노트 처리를 분배받기 때문에 체력관리를 할 수 있다는 장점이 있습니다. 이는 체력곡에 매우 강하며 단일 노트여도 고속곡이면 처리하기 힘든 한손 혹사의 단점을 완전히 극복할 수 있게 됩니다. 또한 수많은 패턴의 복합 노트들을 왼손, 오른손 시작 등 다양하게 처리하기 때문에 처리력의 수준 또한 정상까지 도달 가능합니다. 그러나 이는 다르게 말하면 타법이 자리 잡기까지 좌우 손 배치에 모두 적응해야 한다는 소리입니다.</p>
            <p class="bs-p-center">▼ 그림 5</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/howtohit/5.jpg"></div>

            <p>위와 같은 5개의 노트가 연속으로 두 번 나온 경우, 오른손잡이 한손 혹사 유저라면 [오왼오왼오 오왼오왼오]로 같은 손배치를 두 번 연속으로 칠 수 있습니다. 그러나 양손의 경우는 [오왼오왼오 왼오왼오왼]이 되어 한번은 완전히 반대되는 손배치로 쳐내야 합니다. 즉, 같은 패턴의 노트여도 역손으로 쳐내는 능력까지 가져야 하는 게 양손 교차 타법이라 할 수 있습니다.</p>
            <p>그러나 저속곡에서의 양손 교차는 판정을 사실 포기해야 할 정도로 봐도 무방합니다. 저속곡에서 판정을 기르고 싶다면 한손 혹사도 같이 터득하는 편이 좋습니다.</p>
        </div>

        <SectionTitle section="1.5">이복 역단</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 영상 6 (클릭시 재생)</p>
            <div class="bs-flex"><video class="bs-video" type="video/mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/howtohit/6.mp4">
                </video></div>

            <p>이복 역단은 (이수 복합 / 역수 단음)의 줄임말입니다. 여기서 이수란 자신이 주로 사용하는 손(手)을 뜻하며, 단음은 단일 노트를 뜻합니다. 즉, 오른손잡이라면 복합 노트는 오른손으로 시작하며, 단일 노트는 왼손으로 처리하는 타법이란 뜻입니다.</p>
            <p class="bs-p-center">▼ 그림 7</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/howtohit/7.jpg"></div>

            <p>위와 같은 패턴의 노트가 있다면 [오왼오 왼 왼 오왼오]로 처리하게 되는 것입니다.</p>
            <p>반대로 복합 노트를 역수로 하고, 단일 노트를 이수로 처리하기도 하는데(이단 역복), 구조 자체는 동일하니 같은 타법으로 봐도 무방합니다. 이 타법은 한손 혹사보다 체력의 소모가 덜하며, 복합 노트들의 손 배치는 동일하기에 한손 혹사의 단점과 양손 교차의 난이도에서 어느 정도 타협을 본 타법이라 생각하면 좋습니다. 그러나, 고속곡으로 넘어가면 결국 복합 노트들도 양손을 써야 하므로 만능타법은 아닙니다.</p>
        </div>
    </Content>
</ContentTemp>