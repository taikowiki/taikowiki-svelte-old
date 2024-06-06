<script context="module">
    function getURL(page, p){
        let url = new URL(p.url.href);
        url.searchParams.set('page', page);
        return url.href;
    }
</script>

<script>
    import {page as p} from '$app/stores';

    export let list;

    $:page = Number($p.url.searchParams.get('page')) || 1;
</script>

<div class="pc-page">
    {#if Math.floor((page - 1)/10) !== 0}
    <a class="page" href={getURL(1, $p)}>
        <img src="/assets/img/icon/page/song/arrow2.svg" alt="" />
    </a>
    <a class="page" href={getURL(Math.floor((page - 1)/10)*10 - 9, $p)}>
        <img src="/assets/img/icon/page/song/arrow1.svg" alt="" />
    </a>
    {/if}
    {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as index}
        {#if Math.floor((page - 1) / 10) * 10 + index <= Math.ceil(list.length / 30)}
            <a class="page" href={getURL(Math.floor((page - 1) / 10) * 10 + index, $p)} style={Math.floor((page - 1) / 10) * 10 + index === page ? 'font-weight: bold;text-decoration: underline;' : ''}>{Math.floor((page - 1) / 10) * 10 + index}</a>
        {/if}
    {/each}
    {#if Math.floor((page - 1)/10) !== Math.floor(list.length/300)}
    <a class="page" href={getURL(Math.floor((page - 1)/10)*10 + 11, $p)}>
        <img src="/assets/img/icon/page/song/arrow1.svg" style="transform: scaleX(-1);" alt="" />
    </a>
    <a class="page" href={getURL(Math.ceil(list.length/30), $p)}>
        <img src="/assets/img/icon/page/song/arrow2.svg" style="transform: scaleX(-1);" alt="" />
    </a>
    {/if}
</div>

<style>
    .pc-page {
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		margin-top:15px;
        margin-bottom: 10px;
	}

	.pc-page a {
		margin-left: 10px;
		margin-right: 10px;
		color: black;
		text-decoration: none;
	}

	.pc-page a img {
		width: 18px;
		height: 18px;
		margin-top: 8px;
	}
</style>