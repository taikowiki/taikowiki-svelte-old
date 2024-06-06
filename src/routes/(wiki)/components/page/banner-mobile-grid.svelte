<script context="module">
    /**
     * 해당 컴포넌트는 모바일용 배너를 넣을 그리드입니다.
     * 해당 컴포넌트에는 BannerMobileWide와 BannerMobileNarrow가 들어갑니다.
     * 
     * BannerMobileWide는 2칸을 차지하고, BannerMobileNarrow는 한 칸을 차지합니다.
    */
</script>

<div class="banner-grid for-mobile">
    <slot/>
</div>

<style>
    .banner-grid{
        width:100%;

        display:grid;
        grid-template-columns: repeat(auto-fill, calc(50% - 5px));
        column-gap: 10px;
        row-gap: 6px;

        padding-left:25px;
        padding-right:25px;

        box-sizing: border-box;
    }

    :global(img){
        width:100%;
        height:auto;
    }
</style>