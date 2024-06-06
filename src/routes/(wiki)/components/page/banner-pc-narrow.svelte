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
