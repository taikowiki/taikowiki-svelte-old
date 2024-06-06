<script>
	import { getContext, onMount } from 'svelte';
	import LevelSelector from './components/level-selector.svelte';
	import html2canvas from 'html2canvas';
	import { page } from '$app/stores';

	//타이틀
	let pageTitle = getContext('page-title');
	let L = getContext('lang');
    $: switch($L){
        case 'ko':{
            $pageTitle = '서열표';
            break;
        }
        case 'jp':{
            $pageTitle = '难易度';
			break;
        }
    }

	//--이미지 다운로드--
	let main;
	let D;
	let captureReady = false;
	onMount(() => {
		const C = document.querySelector('#capture');
		D = C.contentWindow.document;
		document.querySelectorAll('link[rel="stylesheet"], style').forEach((e) => {
			D.querySelector('head').appendChild(e.cloneNode(true));
		});
		D.querySelector('body').appendChild(main.cloneNode(true));
		D.querySelector('body')
			.querySelectorAll('.for-mobile, #downloadBtn')
			.forEach((e) => {
				e.remove();
			});
		D.querySelectorAll('#capture90').forEach((e) => {
			e.style.width = '100%';
		});
		D.querySelectorAll('#cell').forEach((e) => {
			fontResize(e);
		});
		function fontResize(thisElement) {
			let jpnText = thisElement.querySelector('#jpn');
			let korText = thisElement.querySelector('#kor');
			if (jpnText) {
				let needResize = true;
				let currentFont = 16;
				while (needResize && currentFont > 10) {
					if (Number(getComputedStyle(jpnText).width.replace('px', '')) > Number(getComputedStyle(jpnText.parentNode).width.replace('px', ''))) {
						if (currentFont > 12) {
							currentFont--;
							jpnText.style.fontSize = `${currentFont}px`;
						} else {
							jpnText.style.whiteSpace = 'wrap';
							needResize = false;
						}
					} else {
						needResize = false;
					}
				}
			}
			if (korText) {
				let needResize = true;
				let currentFont = 12;
				while (needResize && currentFont > 9) {
					if (Number(getComputedStyle(korText).width.replace('px', '')) > Number(getComputedStyle(korText.parentNode).width.replace('px', ''))) {
						if (currentFont > 10) {
							currentFont--;
							korText.style.fontSize = `${currentFont}px`;
						} else {
							korText.style.textOverflow = 'ellipsis';
							korText.style.maxWidth = '100%';
							korText.style.overflow = 'hidden';
							needResize = false;
						}
					} else {
						needResize = false;
					}
				}
			}
		}
		html2canvas(D.querySelector('div')).then(() => {
			captureReady = true;
		});
	});
	function imgDownload() {
		html2canvas(D.querySelector('div')).then((canvas) => {
			let link = document.createElement('a');
			link.href = canvas.toDataURL('image/png');
			link.download = '서열표.png';
			link.click();
		});
	}
	//--이미지 다운로드--
</script>

<LevelSelector />
<!--메인-->
<div class="main" bind:this={main}>
	{#if captureReady}
		<div style="width:100%;display:flex;justify-content:center;position:absolute;z-index:2;">
			<div class="download-wrapper">
				<button on:click={imgDownload} class="download" id="downloadBtn"/>
			</div>
		</div>
	{/if}
	<slot />
</div>
<button
	class="goup for-mobile"
	on:click={() => {
		scrollTo(scrollX, 0);
	}}
/>
{#key $page}
<iframe id="capture" width="1300px" title="capture" />
{/key}

<style>
	.main {
		width: 100%;
		position: relative;
		display:flex;
		flex-direction: row;
		justify-content: center;
	}
	.download-wrapper {
		width:90%;
		min-width: 1050px;
	}
	.download {
		width: 40px;
		height: 40px;
		background: url('/ex/assets/img/icon/page/diffchart/download.svg');
		outline: 0;
		border: 0;
		cursor: pointer;
	}
	@media only screen and (max-width: 767px) {
		.download {
			width: 30px;
			height: 30px;
		}
		.download-wrapper {
			width: 100%;
			min-width: 0;
		}
	}
	.goup {
		width: 50px;
		height: 50px;
		position: fixed;
		bottom: 25px;
		right: 20px;
		background-color: #d83030;
		background-image: url(/ex/assets/img/icon/page/song/arrow.svg);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 23px;
		border: 0;
		outline: 0;
		cursor: pointer;
		border-radius: 8px;
	}

	iframe {
		height: 0;
		outline: 0;
		border: 0;
		visibility: hidden;
	}
</style>
