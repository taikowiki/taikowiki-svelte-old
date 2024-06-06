<script lang="ts">
	import { browser } from "$app/environment";
    import { tick } from "svelte";

	export let jpnName:string;
	export let genre:string;
    export let songNo:number;

    let genreArray = genre.split('|').map(e => {
        return getGenreColor(Number(e))
    }).filter(e => e !== null);

    let url:URL;
    if(browser){
        url = new URL(location.href);
        url.pathname = `/song/${songNo}`;
    }

    function getGenreColor(genre:number){
        switch(genre){
            case 1:{
                return '#58BEC7';
            }
            case 2:{
                return '#E3B850';
            }
            case 3:{
                return '#E28EC7';
            }
            case 4:{
                return '#A5D1DA';
            }
            case 5:{
                return '#B798D3';
            }
            case 6:{
                return '#41CB76';
            }
            case 7:{
                return '#CBBB4A';
            }
            case 8:{
                return '#EA6C68'
            }
            default:{
                return null;
            }
        }
    }
</script>

<div class="song">
	<div class="genre">
        {#each genreArray as genre}
            <div class="genre-color" style={`background-color:${genre};height:calc( 100% / ${genreArray.length} )`}/>
        {/each}
    </div>
	{#await tick()}
        {jpnName}
    {:then}
        <a href={url.href}>{jpnName}</a>
    {/await}
</div>

<style>
	.song {
        display:inline-flex;
        flex-direction: row;
        align-items: center;

		font-size: 13px;

        margin-left:12px;
        margin-top:9px;
	}

	.genre {
		width: 11px;
		height: 18px;
		border-radius: 5.5px;
		overflow: hidden;
		margin-top: 1.5px;
		margin-right: 7px;;
	}

    .genre-color{
        width:100%;
    }

    @media only screen and (max-width:767px){
        .genre{
            width:9px;
            height:14px;
        }

        .song{
            margin-top:3px;
            margin-bottom: 0;
            margin-left:25px;

            font-size: 12px;
            font-weight: bold;
            color:rgb(100, 100, 100);

            
        }
    }
</style>
