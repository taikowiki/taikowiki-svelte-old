<script>
	import SongSearchMobile from './song-search-mobile/song-search-mobile.svelte';
	import SongSearchPc from '$lib/components/song-search-pc/song-search-pc.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let query;
	export let genre;
	export let difficulty;
	export let level;
	export let bpm;

	{//url에서 파라미터 가져오기
		if ($page.url.searchParams.get('query')) {
			query = $page.url.searchParams.get('query');
		}
		if ($page.url.searchParams.get('genre')) {
			genre = $page.url.searchParams.get('genre');
		}
		if ($page.url.searchParams.get('difficulty')) {
			difficulty = $page.url.searchParams.get('difficulty');
		}
		if ($page.url.searchParams.get('level')) {
			level = Number($page.url.searchParams.get('level'));
		}
		if ($page.url.searchParams.get('bpm')) {
			bpm = Number($page.url.searchParams.get('bpm'));
		}
	}

	let url = new URL($page.url.href);
	url.pathname = '/song';
	$: if (query) {
		url.searchParams.set('query', query);
	} else {
		url.searchParams.delete('query');
	}
	$: if (genre) {
		url.searchParams.set('genre', genre);
	} else {
		url.searchParams.delete('genre');
	}
	$: if (difficulty) {
		url.searchParams.set('difficulty', difficulty);
	} else {
		url.searchParams.delete('difficulty');
	}
	$: if (level) {
		url.searchParams.set('level', level);
	} else {
		url.searchParams.delete('level');
	}
	$: if (bpm) {
		url.searchParams.set('bpm', bpm);
	} else {
		url.searchParams.delete('bpm');
	}

	function search() {
		url.searchParams.delete('page');
		goto(url.href);
	}
</script>

<SongSearchPc bind:query bind:genre bind:difficulty bind:level bind:bpm {search} />
<SongSearchMobile bind:query bind:genre bind:difficulty bind:level bind:bpm {search} />
