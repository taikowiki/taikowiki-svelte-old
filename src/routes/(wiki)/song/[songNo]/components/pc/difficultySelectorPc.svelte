<script>
	import DifficultyPc from "./difficultyPc.svelte";

    export let selectedDifficulty;
    export let hasUra;
    export let level;

    function setDifficulty(diff){
        selectedDifficulty = diff;
    }
</script>

<div class="selector">
    <DifficultyPc {setDifficulty} {selectedDifficulty} difficulty="easy" level={level[0]}/>
    <DifficultyPc {setDifficulty} {selectedDifficulty} difficulty="normal" level={level[1]}/>
    <DifficultyPc {setDifficulty} {selectedDifficulty} difficulty="hard" level={level[2]}/>
    <DifficultyPc {setDifficulty} {selectedDifficulty} difficulty="oni" level={level[3]}/>
    {#if hasUra}
    <DifficultyPc {setDifficulty} {selectedDifficulty} difficulty="ura" level={level[4]}/>
    {/if}
</div>

<style>
    .selector{
        width:926px;

        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        gap:24px;

        margin-top:50px;
    }
</style>