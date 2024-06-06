<script>
	import { getContext } from 'svelte';
	import SongSearch from './components/song-search.svelte';
	import LangSelector from './components/LangSelector.svelte';
	import Songs from './components/songs.svelte';
	import { navigating, page } from '$app/stores';

	let pageTitle = getContext('page-title');
	let L = getContext('lang');
    $: switch($L){
        case 'ko':{
            $pageTitle = '곡 검색';
            break;
        }
        case 'jp':{
            $pageTitle = '楽曲検索';
        }
    }

    //언어 선택
	let selectedLanguage = 'jpn';

    //페이지가 바뀔 떄 url을 파싱하여 검색결과를 반환함
	let songs;
    let pageNum;
	$: if ($page) {//url에 따라 필터링
		let query = $page.url.searchParams.get('query');
		let genre = $page.url.searchParams.get('genre');
        let difficulty = $page.url.searchParams.get('difficulty');
        let level = $page.url.searchParams.get('level');
        let bpm = Number($page.url.searchParams.get('bpm'));
        pageNum = Number($page.url.searchParams.get('page')) || 1;
		songs = filterSongs(query, genre, difficulty, level, bpm);
	}

	function filterSongs(query, genre, difficulty, level, bpm) {
		let songs = [...$page.data.songs];
		//검색문
		if (query) {
            //전각 문자를 반각문자로 치환하는 함수
			let convertToHalf = (e) => {
				return e.replace(/[！-～]/g, (halfwidthChar) => String.fromCharCode(halfwidthChar.charCodeAt(0) - 0xfee0));
			};
            //반각 및 전각 가타카나를 히라가나로 변환하는 함수
			let convertGana = (e) => {
                let E = e.split('');
				const katahan = ['ｶﾞ', 'ｷﾞ', 'ｸﾞ', 'ｹﾞ', 'ｺﾞ', 'ｻﾞ', 'ｼﾞ', 'ｽﾞ', 'ｾﾞ', 'ｿﾞ', 'ﾀﾞ', 'ﾁﾞ', 'ﾂﾞ', 'ﾃﾞ', 'ﾄﾞ', 'ﾊﾞ', 'ﾊﾟ', 'ﾋﾞ', 'ﾋﾟ', 'ﾌﾞ', 'ﾌﾟ', 'ﾍﾞ', 'ﾍﾟ', 'ﾎﾞ', 'ﾎﾟ', 'ｳﾞ', 'ｰ', 'ｧ', 'ｱ', 'ｨ', 'ｲ', 'ｩ', 'ｳ', 'ｪ', 'ｴ', 'ｫ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ', 'ｯ', 'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ｬ', 'ﾔ', 'ｭ', 'ﾕ', 'ｮ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ｦ', 'ﾝ', 'ｶ', 'ｹ', 'ﾜ', 'ｲ', 'ｴ', 'ﾞ', 'ﾟ'];
				const katazen = ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'パ', 'ビ', 'ピ', 'ブ', 'プ', 'ベ', 'ペ', 'ボ', 'ポ', 'ヴ', 'ー', 'ァ', 'ア', 'ィ', 'イ', 'ゥ', 'ウ', 'ェ', 'エ', 'ォ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ッ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ャ', 'ヤ', 'ュ', 'ユ', 'ョ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン', 'ヵ', 'ヶ', 'ヮ', 'ヰ', 'ヱ', '゛', '゜'];
				const hirazen = ['が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'ぱ', 'び', 'ぴ', 'ぶ', 'ぷ', 'べ', 'ぺ', 'ぼ', 'ぽ', 'ヴ', 'ー', 'ぁ', 'あ', 'ぃ', 'い', 'ぅ', 'う', 'ぇ', 'え', 'ぉ', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'っ', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'ゃ', 'や', 'ゅ', 'ゆ', 'ょ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'か', 'け', 'ゎ', 'ゐ', 'ゑ', '゛', '゜'];
				for (let i = 0; i < e.length; i++) {
                    if(hirazen.includes(E[i])){
                        let index = hirazen.indexOf(E[i]);
                        E[i] = katazen[index];
                    }
                    if(katazen.includes(E[i])){
                        let index = katazen.indexOf(E[i]);
                        E[i] = katahan[index];
                    }
                }
                return E.join('');
			};
            //두 파라미터의 전각 및 반각을 통일하여, a에 b가 포함되어있는지를 반환하는 함수
			let includes = (a, b) => {
				let A = convertToHalf(a);
                let B = convertToHalf(b);
                A = convertGana(A);
                B = convertGana(B);
                A = A.toLowerCase();
                B = B.toLowerCase();
                return A.includes(B);
			};
			songs = songs.filter((e) => includes(e['jpn_name'], query) || includes(e['kor_name'], query) || includes(e['alias'], query) || includes(e['search_name'], query));
		}
		//장르
		if (genre) {
			switch (genre) {
				case 'pops': {
					songs = songs.filter((e) => e.genre.includes('|1|'));
					break;
				}
				case 'kids': {
					songs = songs.filter((e) => e.genre.includes('|2|'));
					break;
				}
				case 'anime': {
					songs = songs.filter((e) => e.genre.includes('|3|'));
					break;
				}
				case 'vocaloid': {
					songs = songs.filter((e) => e.genre.includes('|4|'));
					break;
				}
				case 'game': {
					songs = songs.filter((e) => e.genre.includes('|5|'));
					break;
				}
				case 'variety': {
					songs = songs.filter((e) => e.genre.includes('|6|'));
					break;
				}
				case 'classic': {
					songs = songs.filter((e) => e.genre.includes('|7|'));
					break;
				}
				case 'namco': {
					songs = songs.filter((e) => e.genre.includes('|8|'));
					break;
				}
			}
		}
        //난이도, 레벨
        if(difficulty && level){
            switch(difficulty){
                case 'easy':{
                    let reg = new RegExp(`${level}\\|.*?\\|.*?\\|.*?\\|.*?`);
                    songs = songs.filter(e => reg.test(e.level));
                    break;
                }
                case 'normal':{
                    let reg = new RegExp(`.*?\\|${level}\\|.*?\\|.*?\\|.*?`);
                    songs = songs.filter(e => reg.test(e.level));
                    break;
                }
                case 'hard':{
                    let reg = new RegExp(`.*?\\|.*?\\|${level}\\|.*?\\|.*?`);
                    songs = songs.filter(e => reg.test(e.level));
                    break;
                }
                case 'oni':{
                    let reg = new RegExp(`.*?\\|.*?\\|.*?\\|${level}\\|.*?`);
                    songs = songs.filter(e => reg.test(e.level));
                    break;
                }
                case 'ura':{
                    let reg = new RegExp(`.*?\\|.*?\\|.*?\\|.*?\\|${level}$`);
                    songs = songs.filter(e => reg.test(e.level));
                    break;
                }
                case 'oniura':{
                    let reg1 = new RegExp(`.*?\\|.*?\\|.*?\\|.*?\\|${level}$`);
                    let reg2 = new RegExp(`.*?\\|.*?\\|.*?\\|${level}\\|.*?`);
                    songs = songs.filter(e => reg1.test(e.level) || reg2.test(e.level));
                    break;
                }
            }
        }
        //BPM
        if(bpm){
            switch(bpm){
                case 10:{
                    songs = songs.filter(e => e.min_bpm <= 100);
                    break;
                }
                case 32:{
                    songs = songs.filter(e => e.max_bpm >= 300);
                    break;
                }
                default:{
                    songs = songs.filter(e => (e.min_bpm >= (bpm - 2) * 10 && e.min_bpm <= bpm * 10) || (e.max_bpm >= (bpm - 2) * 10 && e.max_bpm <= bpm * 10));
                    break;
                }
            }
        }
		return songs;
	}
</script>

<SongSearch />
<LangSelector bind:selectedLanguage />
{#if $navigating}
<div style="width:100%;text-align:center;">
    <img src="/ex/assets/img/icon/page/loading.svg" alt="로딩중..." style="width:200px;height:auto;"/>
</div>
{:else}
{#key songs}
<Songs {songs} lang={selectedLanguage} page={pageNum}/>
{/key}
{/if}