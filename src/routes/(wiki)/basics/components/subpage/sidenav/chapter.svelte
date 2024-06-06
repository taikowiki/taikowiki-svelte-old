<script>
    export let chapter;
</script>

<div class='wrapper'>
    <span class="chapter-texts" id="chapter" role="presentation" on:click={function(){
        let chapterTitle = Array.from(document.querySelectorAll('#chaptertitle')).find(e => e.innerText.trim() === this.innerText.trim());
        
        if(chapterTitle){
            window.scrollTo(window.scrollX, chapterTitle.offsetTop)
        }
    }}>{chapter}</span>
    <br>
    <div class="chapter-child">
        <slot />
    </div>
</div>

<style>
    .wrapper {
        margin-left: 5px;
        margin-top: 5px;
        margin-bottom: 15px;
    }
    .chapter-child {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: bold;
        font-size: 13px;
        margin-left: 16px;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .chapter-texts {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: bold;
        font-size: 15px;

        padding-top: 2px;
        padding-right: 5px;
        padding-bottom: 2px;
        padding-left: 5px;
        border-radius: 5px;

        margin-bottom: 10px;

        width: 70%;

        justify-content: center;
        text-align: left;

        background-color: #ce3e3e;
        color: white;

        cursor: pointer;
    }
</style>