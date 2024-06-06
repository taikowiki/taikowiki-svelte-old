<script context="module">
    /**
     * src prop은 들어갈 이미지 소스입니다.
     * text는 밑에 들어각 텍스트입니다.
     * href는 클릭 시 이동할 링크입니다.
    */
</script>

<script>
    export let src;
    export let text;
    export let href;
</script>

<a class="shortcut" {href}>
    <img {src} alt="shortcut"/>
    <span>{text}</span>
</a>

<style>
    .shortcut{
        width:120px;

        display:flex;
        flex-direction: column;
        align-items: center;

        font-weight: bold;

        margin-left:15px;
        margin-right:15px;
    }

    .shortcut:hover{
        color:#CF4844;
    }

    img{
        width:100%;
        margin-bottom: 5px;
    }
</style>