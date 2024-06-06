<script>
    export let jpnName;
    export let korName;
    export let alias;
    export let isAsia;

    import { getContext } from "svelte";
    let lang;
	getContext('language').subscribe((e) => {
		lang = e.songDetail;
	})
</script>

<div class="wrapper">
    {#if isAsia === 0}
    <div class="asia">
        <img src="/ex/assets/img/icon/page/song/song-no/alert.png" alt=""/>
        {lang.noAsia}
    </div>
    {:else if isAsia === 2}
    <div class="asia">
        <img src="/ex/assets/img/icon/page/song/song-no/alert.png" alt=""/>
        {lang.noKorea}
    </div>
    {/if}
    <div class="jpn">
        {jpnName}
    </div>
    {#if korName}
    <div class="kor">
        {korName}
    </div>
    {/if}
    {#if alias}
    <div class="alias">
        {alias}
    </div>
    {/if}
</div>

<style>
.wrapper{
    width:100%;
    font-weight:bold;
}

.asia{
    display:flex;
    flex-direction: row;
    align-items: center;
    color: #C14C4C;
}

.asia img{
    width:25px;
    height:auto;
    margin-right:5px;
    transform: translateY(1px);
}

.jpn{
    font-size: 30px;
    font-weight: 900;
}

.kor{
    font-size: 18px;
    font-weight: 700;
}

.alias{
    font-size: 18px;
}
</style>