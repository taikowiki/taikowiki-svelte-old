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
<ContentTemp title="아케이드 기체">
    <IndexWrapper>
        <Chapter chapter="1. 아케이드 기체에 관하여" class='chapter'>
            <Section class='section'>1.1 (AC 1 ~ AC 14) [구기판]</Section>
            <br />
            <Section class='section'>1.2 (AC 15) [신기판 ~ 그린ver.]</Section>
            <br />
            <Section class='section'>1.3 (AC 16 ~ ) [니지이로]</Section>
        </Chapter>
    </IndexWrapper>
    <Content>
        <ChapterTitle>1. 아케이드 기체에 관하여</ChapterTitle>
        <div class="bs-content">
            <p>
                아케이드 기체는 크게 3가지 종류로 나뉘는데, <span class="bs-p-bold">구기판</span>과 <span class="bs-p-bold">신기판</span>, <span class="bs-p-bold">신기판[니지이로]</span>로 나뉩니다.
                AC는 아케이드의 약자이며, AC 1부터 AC 14까지는 해당 기판의 넘버링을 따릅니다.
                또한 본문은 일본 아케이드 기준을 따릅니다.
            </p>
        </div>

        <SectionTitle section="1.1">(AC 1 ~ AC 14) [구기판]</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 1-1</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/cabinets/1_1.jpg" class="img35">
            </div>

            <p>구기판이란, 말 그대로 오래된 기체라 旧筐体(구기체) 라고 합니다.</p>
            <p>2001년 2월 21일부터 가동되었으며, 네트워크가 되지 않아 카드 사용이 불가하며 카드 리더기 또한 없습니다. 특징으로는, 상단에 있는 간판에 대문짝만하게 해당 버전이 넘버링 되어있으며, 모니터 또한 4:3 비율 스크린입니다.</p>
        </div>

        <SectionTitle section="1.2">(AC 15) [신기판 ~ 그린ver.]</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 1-2</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/cabinets/1_2.png" class="img35">
            </div>
            <p>신기판이란, 구기판 (AC 14) 이후 新筐体(신기체)라는 이름으로 출시되었습니다.</p>
            <p>2011년에 새로 런칭하여 <span class="bs-p-bold">네트워크</span>가 도입되고 <span class="bs-p-bold">카드 리더기</span>가 생긴 버전입니다. 모니터 또한 <span class="bs-p-bold">16:9 비율 스크린(60fps)</span>, PS3 기반 기판으로 변경되었으며 통칭 (AC 15)로 표기합니다.</p>
            <p>기존 구기판과는 다르게 넘버링이 사라졌으며, 버전 이름이 생겼습니다.</p>
            <div class="bs-flex">
                <p class="bs-cabinets-content">
                    新筐体<br>KATSU-DON<br>ソライロVer.<br>モモイロVer.<br>キミドリVer.<br>ムラサキVer.<br>ホワイトVer.<br>レッドVer.<br>イエローVer.<br>ブルーVer.<br>グリーンVer.
                </p>
                <p class="bs-cabinets-content">
                    신기체<br>카츠동<br>소라이로Ver.<br>모모이로Ver.<br>키미도리Ver.<br>무라사키Ver.<br>화이트Ver.<br>레드Ver.<br>옐로우Ver.<br>블루Ver.<br>그린Ver.
                </p>
                <p class="bs-cabinets-content">
                    2011년 11월 16일 ~<br>2012년 7월 25일 ~<br>2013년 3월 13일 ~<br>2013년 12월 11일 ~<br>2014년 7월 16일 ~<br>2015년 3월 11일 ~<br>2015년 12월 10일 ~<br>2016년 7월 14일 ~<br>2017년 3월 15일 ~<br>2018년 3월 15일 ~<br>2019년 3월 14일 ~
                </p>
            </div>

            <p>하지만 (AC 15)는 현재 네트워크가 끊긴 상태이기에 카드를 사용할 수 없습니다.</p>
        </div>

        <SectionTitle section="1.3">(AC 16 ~ ) [니지이로]</SectionTitle>
        <div class="bs-content">
            <p class="bs-p-center">▼ 그림 1-3</p>
            <div class="bs-flex">
                <img src="/ex/assets/img/basics/cabinets/1_3.png" class="img35">
            </div>
            <p>신기판[니지이로]란, 기존 신기판 (AC 15) 이후 새로 출시된 버전으로, 니지이로라는 이름을 갖고 있습니다. (AC 15)에서는 화이트, 옐로우, 블루 등등 한가지의 색을 지녔지만, (AC 16)는 무지갯빛이라는 니지이로라는 이름을 갖고 출시되었습니다. 사실 정식 명칭은 [2020年3月バージョン] (2020년 3월 버전)이지만, 공식적으로 니지이로를 사용하고 있습니다.</p>
            <p>2020년 3월 24일에 가동 시작하였으며 <span class="bs-p-bold">QR코드 리더기</span>가 도입된 버전입니다. 모니터 또한 16:9 비율 스크린<span class="bs-p-bold">(120fps)</span>, PC 호환 기판으로 변경되었으며 통칭 (AC 16)로 표기합니다.</p>
            <p>기존 신기판과는 다르게 버전 이름이 년 도로 바뀌며, 거의 1년 간격으로 버전이 달라집니다. 또한 아시아판 한국 기준 니지이로2020 대신 그린 2.0으로 대체되었으며, 니지이로2021이 나온 시점에 니지이로로 업그레이드되었습니다.</p>
            <div class="bs-flex">
                <p class="bs-cabinets-content2">
                    ニジイロ2020<br>ニジイロ2021<br>ニジイロ2022<br>ニジイロ2023<br>아시아판 한국 기준<br>아시아판 한국 기준<br>아시아판 기준<br>아시아판 기준
                </p>
                <p class="bs-cabinets-content2">
                    니지이로2020<br>니지이로2021<br>니지이로2022<br>니지이로2023<br>그린Ver. 2.0<br>니지이로2021<br>니지이로2022<br>니지이로2023
                </p>
                <p class="bs-cabinets-content2">
                    2020년 3월 24일 ~ 2021년 3월 24일<br>2021년 3월 25일 ~ 2022년 3월 15일<br>2022년 3월 16일 ~ 2023년 3월 21일<br>2023년 3월 22일 ~ 현재<br>2020년 7월 8일 ~<br>2021년 4월 23일 ~ 2022년 3월 16일<br>2022년 3월 17일 ~ 2023년 3월 22일<br>2023년 3월 24일 ~ 현재
                </p>
            </div>
            <p>현재 네트워크와 QR코드가 활성화된 상태이며, 카드 리더기 사용이 가능합니다.</p>
        </div>
        
    </Content>
</ContentTemp>

<style>
    @import '../components/subpage/content.css';
</style>