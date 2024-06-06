<script>
    import { getContext } from "svelte";

    let lang = getContext('lang');
</script>

<footer class="mobile for-mobile">
    <!--언어 변경은 나중에
    <select class="lang" bind:value={$lang}>
        <option value="ko">한국어</option>
        <option value="jp">日本語</option>
    </select>
    -->
</footer>

<style>
    footer{
        margin-top:10px;
    }

    footer.mobile{
        text-align: center;
    }

    .lang{
        border:0;
        outline:0;
    }
</style>