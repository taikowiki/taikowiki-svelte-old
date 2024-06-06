<script context="module">
    /**
     * ShortcutPcWrapper에는 ShortcutPc 컴포넌트가 들어갑니다.
    */
</script>

<div class="shortcut-wrapper for-pc">
    <slot/>
</div>

<style>
    .shortcut-wrapper{
        width:100%;

        margin-top: 40px;

        display:flex;
        flex-direction: row;
        justify-content: center;
    }
</style>