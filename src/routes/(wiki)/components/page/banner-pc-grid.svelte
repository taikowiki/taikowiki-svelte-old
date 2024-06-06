<script context="module">
    /**
     * 이 컴포넌트는 pc용 배너 컴포넌트입니다.
     * 이 컴포넌트에는 BannerPcWide, BannerPcNarrow가 들어갑니다.
    */
</script>

<div class="grid-container for-pc">
    <div class="grid">
        <slot/>
    </div>
</div>

<style>
    .grid-container{
        width:100%;

        display:flex;
        justify-content: center;
    }
    
    .grid{
        width:800px;

        display:grid;
        grid-template-columns: repeat(auto-fill, 380px);
        column-gap: 40px;
        row-gap: 20px;
    }
</style>