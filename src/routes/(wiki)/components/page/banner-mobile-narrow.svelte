<script context="module">
    /**
     * 해당 컴포넌트는 BannerMobileGrid 컴포넌트에 들어갑니다.
     * 해당 컴포넌트는 한 칸을 차지합니다.
     * 
     * href prop은 해당 컴포넌트 클릭 시 이동할 링크입니다.
     * style prop은 해당 컴포넌트에 적용할 style입니다.
     * 
     * style에 grid-column은 넣지 마시길 바랍니다.
    */
</script>

<script>
	export let href;
	export let style;
</script>

<a {href} {style}>
	<slot />
</a>

<style>
	a {
		display: block;
		width: 100%;
		height: auto;
		text-decoration: none;
		color: black;
		overflow: hidden;
	}

	:global(img) {
		width: 100%;
		height: auto;
	}
</style>
