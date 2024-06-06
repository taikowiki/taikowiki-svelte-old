<script>
	export let title;
	export let href;
	export let src;
</script>

<a {href}>
	<img {src} alt="btn" />
	{title}
</a>

<style>
	a {
		width: 70px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        
        font-size: 16px;
        color:#6e6e6e;
        font-weight: bold;
	}

    img{
        width:100%;
    }
</style>
