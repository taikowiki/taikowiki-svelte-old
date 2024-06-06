<script>
    export let href;
    export let text;
</script>

<div class="header-text-button">
	<a class="text" {href}>
		{text}
    </a>
</div>

<style>
	.header-text-button {
		height: 100%;

		display: flex;
		flex-direction: row;
		align-items: center;

		text-wrap: nowrap;
	}

	.header-text-button::before {
		margin-top: 3px;
		margin-right: 5px;
		height: 18px;
		width: 10px;
		background-color: white;
		border-radius: 5px;
        display:block;
        content:'';
        cursor: pointer;
	}

    .text{
        color:white;
        text-decoration: none;
    }
</style>
