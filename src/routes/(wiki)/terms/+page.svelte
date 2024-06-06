<script>
	import LetterContainer from "./components/letter-container.svelte";
    import LetterSelector from "./components/letter-selector.svelte";
    import { getContext } from "svelte";

    export let data;

    //타이틀
    let pageTitle = getContext('page-title');
    $pageTitle = '용어집';

    //자음 리스트
    let jaEumList = data.terms.map(e => e.letter);
    jaEumList[jaEumList.length - 1] = 'A';
</script>

<div class="wrapper">
    <LetterSelector {jaEumList}/>
    {#each jaEumList as jaEum}
        <LetterContainer {jaEum} termsList={data.terms.find(e => e.letter === jaEum).list}/>
    {/each}
</div>

<style>
    .wrapper{
        width:100%;

        display:flex;
        flex-direction: column;
        align-items: center;
    }
</style>