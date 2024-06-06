<script>
	import Lang from './LangSelector/Lang.svelte';

	export let selectedLanguage;

    //언어
	import { getContext} from 'svelte';
	let lang;
	getContext('language').subscribe((e) => {
		lang = e.song;
	});
</script>

<div class="lang-wrapper">
    <div class="lang-container">
        <Lang value="jpn" bind:selected={selectedLanguage} text="日本語" />
        <Lang value="kor" bind:selected={selectedLanguage} text={lang.korean} />
        <Lang value="kor-unofficial" bind:selected={selectedLanguage} text={lang.alias} style="width:150px;"/>
    </div>
</div>

<style>
    .lang-wrapper{
        width:100%;

        display:flex;
        flex-direction: row;
        justify-content: center;

        margin-top:40px;
    }

	.lang-container {
		width: 874px;

        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        gap:10px;
	}

    @media only screen and (max-width:767px){
        .lang-wrapper{
            margin-top:30px;
        }

        .lang-container{
            width:calc(100% - 30px);
            gap:8px;
        }
    }
</style>
