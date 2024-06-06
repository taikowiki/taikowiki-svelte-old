<div class="wrapper" id="chaptertitle">
    <div class="header" role="presentation" on:click={function(){
        let chapter = Array.from(document.querySelectorAll('#chapter')).find(e => e.innerText.trim() === this.innerText.trim());
        console.log(chapter);
        if(chapter){
            window.scrollTo(window.scrollX, chapter.offsetTop)
        }
    }}>
        <slot />
    </div>
</div>

<style>
    .wrapper {
        margin: 25px;

        display: flex;
        justify-content: center;
        text-align: center;
    }
    .header {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: bold;
        font-size: 20px;

        padding-top: 2px;
        padding-right: 20px;
        padding-bottom: 2px;
        padding-left: 20px;
        border-radius: 10px;


        background-color: #cf3f3f;
        color: white;

        cursor: pointer;
    }

    @media only screen and (max-width: 767px) {
        .wrapper {
            margin: 25px;

            display: flex;
            justify-content: center;
            text-align: center;
        }
        .header {
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: bold;
            font-size: 20px;

            padding-top: 2px;
            padding-right: 20px;
            padding-bottom: 2px;
            padding-left: 20px;
            border-radius: 10px;


            background-color: #cf3f3f;
            color: white;
        }
    }
</style>