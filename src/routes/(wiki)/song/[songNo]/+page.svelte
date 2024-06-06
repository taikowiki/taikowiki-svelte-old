<script>
	import SongSearch from "../components/song-search.svelte";
	import SongPc from "./components/songPc.svelte";
	import SongMobile from "./components/songMobile.svelte";
	import { page } from "$app/stores";
	import { getContext } from "svelte";

	export let data;

	class SongHeader{
		constructor(song){
			this.jpnName = song.jpn_name;
			this.korName = (song.jpn_name === song.kor_name ? null : song.kor_name);
			this.alias = (song.jpn_name === song.alias ? null : song.alias) || (song.kor_name === song.alias ? null : song.alias);

			this.genre = song.genre.split('|').filter((e) => e !== '' && e !== '0');

			this.minBpm = song.min_bpm;
			this.maxBpm = song.max_bpm;

			this.artist = song.artist;
			if(song.artist.includes(song.composer)){
				this.composer = null;
			}
			else{
				this.composer = song.composer;
			}

			this.playtime = this.getTimeString(song.playtime)

			this.isAsia = song.is_asia;
		}

		getTimeString(number){
			let seconds = Math.floor(number % 60).toString().padStart(2, '0');
    		let minutes = Math.floor(number / 60).toString().padStart(2, '0');
			return `${minutes}:${seconds}`;
		}
	}
	let songHeader = new SongHeader(data.song)

	export let selectedDifficulty = 'oni';
	let level = data.song.level.split('|').filter(e => e !== '0').map(e => Number(e));
	let hasUra = (data.song.level.split('|')[4] !== '0');

	let diffInfo = getDiffInfo();
	function getDiffInfo(){
		let notes = data.song.notes.split('|').filter(e => e !== '0').map(e => Number(e));
		let balloon = data.song.balloon.split('|').filter(e => e !== '0').map(e => Number(e));
		let rolltime = data.song.rolltime.split('|').filter(e => e !== '0').map(e => Number(e));
		let branched = data.song.has_branch.split('|').map(e => e === '1');
		let density = data.song.density.split('|').filter(e => e !== '0').map(e => Number(e));

		let r = [];
		for(let i = 0; i < notes.length; i++){
			let d = {};
			d.notes = notes[i];
			d.balloon = balloon[i];
			d.rolltime = rolltime[i];
			d.branched = branched[i];
			d.density = density[i];
			r.push(d);
		}
		return r;
	}

	let lang;
	getContext('language').subscribe(e => {
		lang = e.songDetail.danis
	})
	let L = getContext('lang');

	$: dani = data.song.dani.split('|').map(e => {return parseDani(e);$L;});
	function parseDani(query){
		let v = query.substring(0, 2);
		let d = query.substring(2, 4);
		let order = Number(query.substring(4, 6));
		let di = query.substring(6, 8);
		
		let version;
		switch(v){
			case '10':{
				version = lang[`v${v}`];
				break;
			}
			case '11':{
				version = lang[`v${v}`];
				break;
			}
			case '12':{
				version = lang[`v${v}`];
				break;
			}
			case '13':{
				version = lang[`v${v}`];
				break;
			}
			case '14':{
				version = lang[`v${v}`];
				break;
			}
			case '15':{
				version = lang[`v${v}`];
				break;
			}
			case '16':{
				version = lang[`v${v}`];
				break;
			}
			case '17':{
				version = lang[`v${v}`];
				break;
			}
			case '18':{
				version = lang[`v${v}`];
				break;
			}
			case '19':{
				version = lang[`v${v}`];
				break;
			}
			default:{
				version = `${lang.v20} 20${v}`;
				break;
			}
		}

		let dani;
		if(v == '10'){
			switch(d){
				case '21':{
					dani = lang.k1;
					break;
				}
				case '22':{
					dani = lang.k2;
					break;
				}
				case '23':{
					dani = lang.k3;
					break;
				}
				case '24':{
					dani = lang.k4;
					break;
				}
				case '25':{
					dani = lang.k5;
					break;
				}
			}
		}
		else{
			switch(d){
				case '01':{
					dani = lang[`n${d}`];
					break;
				}
				case '02':{
					dani = lang[`n${d}`];
					break;
				}
				case '03':{
					dani = lang[`n${d}`];
					break;
				}
				case '04':{
					dani = lang[`n${d}`];
					break;
				}
				case '05':{
					dani = lang[`n${d}`];
					break;
				}
				case '06':{
					dani = lang[`n${d}`];
					break;
				}
				case '07':{
					dani = lang[`n${d}`];
					break;
				}
				case '08':{
					dani = lang[`n${d}`];
					break;
				}
				case '09':{
					dani = lang[`n${d}`];
					break;
				}
				case '10':{
					dani = lang[`n${d}`];
					break;
				}
				case '11':{
					dani = lang[`n${d}`];
					break;
				}
				case '21':{
					dani = lang[`n${d}`];
					break;
				}
				case '22':{
					dani = lang[`n${d}`];
					break;
				}
				case '23':{
					dani = lang[`n${d}`];
					break;
				}
				case '24':{
					dani = lang[`n${d}`];
					break;
				}
				case '25':{
					dani = lang[`n${d}`];
					break;
				}
				case '26':{
					dani = lang[`n${d}`];
					break;
				}
				case '27':{
					dani = lang[`n${d}`];
					break;
				}
				case '28':{
					dani = lang[`n${d}`];
					break;
				}
				case '29':{
					dani = lang[`n${d}`];
					break;
				}
				case '30':{
					dani = lang[`n${d}`];
					break;
				}
				case '31':{
					dani = lang[`n${d}`];
					break;
				}
				case '32':{
					dani = lang[`n${d}`];
					break;
				}
				case '33':{
					dani = lang[`n${d}`];
					break;
				}
				case '34':{
					dani = lang[`n${d}`];
					break;
				}
			}
		}

		let diff;
		switch(di){
			case '01':{
				diff = 'easy';
				break;
			}
			case '02':{
				diff = 'normal';
				break;
			}
			case '03':{
				diff = 'hard';
				break;
			}
			case '04':{
				diff = 'oni';
				break;
			}
			case '05':{
				diff = 'ura';
				break;
			}
		}

		return {
			version,
			dani,
			order,
			diff
		}
	}

	let songNo = data.song.song_no;

	let attributes = data.attributes;

	if($page.url.searchParams.get('difficulty')){
        selectedDifficulty = $page.url.searchParams.get('difficulty');
    }

	//타이틀
	let pageTitle = getContext('page-title');
    $: switch($L){
        case 'ko':{
            $pageTitle = '곡 검색';
            break;
        }
        case 'jp':{
            $pageTitle = '楽曲検索';
        }
    }
</script>

<SongSearch/>
<SongPc {songHeader} bind:selectedDifficulty {hasUra} {level} {diffInfo} {dani} {songNo} {attributes} chart={data.chart}/>
<SongMobile {songHeader} bind:selectedDifficulty {hasUra} {level} {diffInfo} {dani} {songNo} {attributes} chart={data.chart}/>