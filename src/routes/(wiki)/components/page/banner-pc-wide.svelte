<script>
    export let href;
    export let style;
</script>

<a {href} {style}>
    <slot/>
</a>

<style>
    a{
        display:block;
        width:100%;
        height:auto;
        grid-column: span 2;
        text-decoration: none;
        color: black;
        overflow: hidden;
    }

    :global(img) {
		width: 100%;
		height: auto;
	}
</style>