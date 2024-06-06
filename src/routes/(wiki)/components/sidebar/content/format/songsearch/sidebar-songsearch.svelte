<script>
	import SidebarContent from '../../sidebar-content.svelte';
	import SidebarSongsearchGenre from './sidebar-songsearch-genre.svelte';
	import SidebarContentText from '../../sidebar-content-text.svelte';
	import { getContext } from 'svelte';

	let lang;
    getContext('language').subscribe((e) => {
        lang = e.sidebar;
    });
</script>

<SidebarContent title={lang.searchSong} href="/song">
	<SidebarSongsearchGenre genre={lang.namco} color="rgb(234, 108, 104)" href="/song?genre=namco" />
	<SidebarSongsearchGenre genre={lang.game} color="#B798D3" href="/song?genre=game" />
	<SidebarSongsearchGenre genre={lang.vocaloid} color="#A5D1DA" href="/song?genre=vocaloid" />
	<SidebarSongsearchGenre genre={lang.anime} color="#E28EC7" href="/song?genre=anime" />
	<SidebarSongsearchGenre genre={lang.kids} color="#E3B850" href="/song?genre=kids" />
	<SidebarSongsearchGenre genre={lang.variety} color="#41CB76" href="/song?genre=variety" />
	<SidebarSongsearchGenre genre={lang.pops} color="#58BEC7" href="/song?genre=pops" />
	<SidebarSongsearchGenre genre={lang.classic} color="#CBBB4A" href="/song?genre=classic" />
	<hr />
	<SidebarContentText style="flex-direction:column;letter-spacing:-1px;">
		<div style="letter-spacing:0px;">
			{lang.oni}
		</div>
		<div>
			<a href="/song?difficulty=oniura&level=10">★×10</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=oniura&level=9">★×9</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=oniura&level=8">★×8</a>
		</div>
		<div>
			<a href="/song?difficulty=oniura&level=7">★×7</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=oniura&level=6">★×6</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=oniura&level=5">★×5</a>
		</div>
		<div>
			<a href="/song?difficulty=oniura&level=4">★×4</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=oniura&level=3">★×3</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=oniura&level=2">★×2</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=oniura&level=1">★×1</a>
		</div>
	</SidebarContentText>
	<SidebarContentText style="flex-direction:column;letter-spacing:-1px;">
		<div style="letter-spacing:0px;">
			{lang.hard}
		</div>
		<div>
			<a href="/song?difficulty=hard&level=8">★×8</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=7">★×7</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=6">★×6</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=5">★×5</a>
		</div>
		<div>
			<a href="/song?difficulty=hard&level=4">★×4</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=3">★×3</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=2">★×2</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=1">★×1</a>
		</div>
	</SidebarContentText>
	<SidebarContentText style="flex-direction:column;letter-spacing:-1px;">
		<div style="letter-spacing:0px;">
			{lang.normal}
		</div>
		<div>
			<a href="/song?difficulty=normal&level=7">★×7</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=normal&level=6">★×6</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=normal&level=5">★×5</a>
		</div>
		<div>
			<a href="/song?difficulty=normal&level=4">★×4</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=normal&level=3">★×3</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=normal&level=2">★×2</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=normal&level=1">★×1</a>
		</div>
	</SidebarContentText>
	<SidebarContentText style="flex-direction:column;letter-spacing:-1px;">
		<div style="letter-spacing:0px;">
			{lang.easy}
		</div>
		<div>
			<a href="/song?difficulty=hard&level=5">★×5</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=4">★×4</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=3">★×3</a>
		</div>
		<div>
			<a href="/song?difficulty=hard&level=2">★×2</a>
			<span>&nbsp;/&nbsp;</span>
			<a href="/song?difficulty=hard&level=1">★×1</a>
		</div>
	</SidebarContentText>
</SidebarContent>

<style>
	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	hr {
		width: 80%;
		display: block;
		unicode-bidi: isolate;
		margin-block-start: 0.5em;
		margin-block-end: 0.5em;
		margin-inline-start: auto;
		margin-inline-end: auto;
		margin-top:20px;
		margin-bottom: 15px;
		overflow: hidden;
		border-style: inset;
		border-width: 1px;
	}
</style>
