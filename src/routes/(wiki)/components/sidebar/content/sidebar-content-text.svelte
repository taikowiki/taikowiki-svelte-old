<script>
	export let style;
</script>

<div class="sidebar-content-text" {style}>
	<slot />
</div>

<style>
	.sidebar-content-text {
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		color: #6e6e6e;
		font-weight: bold;
		font-size: 12px;

		position: relative;

        margin-top:2.5px;
        margin-bottom: 2.5px;
	}
</style>
