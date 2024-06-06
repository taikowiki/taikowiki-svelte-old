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
<ContentTemp title="북채 다루기">
    <IndexWrapper>
        <Chapter chapter="1. 북채 다루기" class='chapter'>
            <Section class='section'>1.1 북채를 쥐는 법</Section>
            <br />
            <Section class='section'>1.2 북채를 두들기는 법</Section>
        </Chapter>
    </IndexWrapper>
    <Content>
        <ChapterTitle>1. 북채 다루기</ChapterTitle>
        <div class="bs-content">
            <p>북채를 쥐는 법은 상당히 많이 중요합니다. 쥐는 방식에 따라 반발(반동)을 다르게 받을 수 있으며, 손가락에 받는 피로도를 크게 좌우할 수 있기 때문입니다. 두들기는 법 또한 위와 같은 요소들에 크게 영향을 줍니다. 두들기는 방식에 따라 반발(반동)을 다르게 받을 수 있으며, 손목과 손가락에 받는 피로도를 크게 좌우할 수 있습니다. 또한, 두들기는 법은 북채의 수명에도 직결됩니다. 본인의 북채가 유난히 잘 부러지고 손목과 손가락이 자주 아픈 경우에는 개선할 필요가 있습니다.</p>
            <p>※ 북채를 쥐고 두들기는 방식은 개인차가 존재하는 부분이기에 차이점이 다소 존재할 수 있습니다.</p>
        </div>

        <SectionTitle section="1.1">북채를 쥐는 법</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 1</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/drumsticks/1.jpg"></div>

            <p>1. 북채의 무게중심부터 밑부분까지의 약 1/4 부분에 엄지와 검지로 잡아줍니다.</p>
            <p>2. 그 상태에서 나머지 손가락을 구부려 북채를 감싸줍니다. 단, 나머지 손가락에 힘을 주는 것이 아닌 북채를 가볍게 받쳐준다는 느낌으로 쥐어야 합니다. 약 1/4 부분에서 과도하게 위로 잡으면, 북채의 무게가 실리지 못하여 반발 자체가 줄어들기 때문에 북을 연속적으로 두들기기가 힘들어집니다. 이는 인식의 저하를 가져오기 때문에, 그만큼 더 세게 치게 됩니다. 반대로 과도하게 아래로 잡으면, 그만큼의 무게가 더 실리기 때문에 굉장히 센 반동이 손가락에 그대로 전달됩니다.</p>
            <p>둘 다 손목과 손가락에 큰 피로도를 유발하기 때문에 손 건강에 치명적입니다. 또한, 약지에 힘을 주게 되면 네 손가락 전체가 북채에 꽉 붙어있게 됩니다. 이는 반발력 저하를 의미하며, 빠른 곡을 할 경우 충격이 그대로 손가락으로 전달되기 때문에 손가락에 무리를 주게 됩니다.</p>
        </div>

        <SectionTitle section="1.2">북채를 두들기는 법</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 2</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/drumsticks/2.jpg" class="img75">
            </div>
            <p>
                붉은색 부분은 동, 파란색 부분은 캇을 치기 괜찮은 범위입니다. 다만 북의 정중앙(검은색 줄) 부분은 되도록 피하는 게 좋습니다. 좌측 동과 우측 동이 같이 쳐지는 현상인 다중이 발생할 가능성이 있기 때문입니다.
                여기서 동을 왜 밑부분은 쳐서는 안 되는가? 라는 의문이 생길 수 있습니다. 밑부분을 쳐도 괜찮습니다.
                다만 밑부분을 두들길시 캇을 칠 때의 손 이동이 멀어지게 되어 체력적으로 불리한 부분이 어느 정도 있기 때문입니다. 또한 캇같은 경우 위쪽 부분은 대체로 감도가 둔감한 편이기에 이 부분도 피하는 편이 좋습니다.
                두들길 때의 북채의 방향은 11자로 수직을 바라보는 형태, 팔자(八) 형태, 또는 역팔자 형태의 경우가 있습니다. 이건 개인의 취향 문제로 편한 쪽을 선택하면 되겠습니다.</p>
            <p class="bs-p-center">▼ 그림 3</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/drumsticks/3.jpg"></div>

            <p class="bs-p-center">▼ 그림 4</p>
            <div class="bs-flex"><img src="/ex/assets/img/basics/drumsticks/4.jpg"></div>

            <p>북채를 두들길 때는 위 그림과 같이 약 15도 각도로 세우고 치는 편이 좋습니다. 이보다 각도를 줄여서 친다면 손가락이 북면에 닿는 경우가 생기며 각도를 올려서 치게 된다면 인식률이 저하될 수 있습니다. 또한 캇을 칠 때는 북채 끝에서 3cm~5cm 정도 여유를 두고 치는 것을 권장합니다.</p>
            <p class="bs-p-center">▼ 영상 5 (클릭시 재생)</p>
            <div class="bs-flex">
                <video class="bs-video" type="video/mp4" muted loop webkit-playsinline playsinline thumbnail="3">
                    <source src="/ex/assets/vid/basics/drumsticks/5_no_sound.mp4">
                </video>
            </div>

            <p>그리고 굉장히 중요한 손목 스냅입니다. 지금까지 위에 서술한 내용을 모두 지킨다 한들 손목 스냅을 쓰지 않는다면 큰 의미가 없게 됩니다. 북채를 가볍게 잡아줌과 동시에 손목을 위아래로 움직여 휘둘러줌으로써 반발(반동)을 얻게 됩니다. 반발(반동)을 얻음으로써 여러 영향을 미치는 요소가 있습니다.</p>
            <p>
                <span>1. 손목과 손가락에 무리를 줄여줍니다.</span>
                <br>
                <span>2. 인식률을 향상할 수 있습니다.</span>
                <br>
                <span>3. 정공(싱글)의 속도 향상에 도움을 줍니다.</span>
                <br>
                <span>4. 북채의 수명을 늘리는 데에 도움을 줍니다.</span>
            </p>
            <p>이러한 요소들이 막상 단순한 것 같지만 막상 실전에서는 쉽게 나오지 않습니다. 플레이하기 전이나 집에서든 틈날 때 어느 정도 연습을 통해서 터득해나갈 필요가 있습니다. 반발을 주는 것은 실력 성장과 북채의 수명까지 직결될 만큼 중요한 요소이니 반드시 습득하는 것을 권장합니다.</p>
        </div>
    </Content>
</ContentTemp>

<style>
    @import '../components/subpage/content.css';
</style>