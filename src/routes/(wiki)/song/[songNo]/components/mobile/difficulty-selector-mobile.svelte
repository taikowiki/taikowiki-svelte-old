<script>
    import DifficultyMobile from "./difficulty-mobile.svelte";

    export let selectedDifficulty;
    export let hasUra;
    export let level;

    function setDifficulty(diff){
        selectedDifficulty = diff;
    }
</script>

<div class="selector">
    <DifficultyMobile {setDifficulty} {selectedDifficulty} difficulty="easy" level={level[0]}/>
    <DifficultyMobile {setDifficulty} {selectedDifficulty} difficulty="normal" level={level[1]}/>
    <DifficultyMobile {setDifficulty} {selectedDifficulty} difficulty="hard" level={level[2]}/>
    <DifficultyMobile {setDifficulty} {selectedDifficulty} difficulty="oni" level={level[3]}/>
    {#if hasUra}
    <DifficultyMobile {setDifficulty} {selectedDifficulty} difficulty="ura" level={level[4]}/>
    {/if}
</div>

<style>
    .selector{
        width:100%;
        height:60px;

        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        gap:8px;

        padding-left:4px;
        padding-right:4px;
        box-sizing: border-box;

        margin-top:50px;
    }
</style>