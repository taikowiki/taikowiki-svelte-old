<script>
	export let head;
	export let body;
	export let title = '';
    export let head2 = '';
</script>

<div class="other" {title} style={title ? 'cursor: help;' : ''}>
	<div class="other-head">
		{head}
        <span>{head2}</span>
	</div>
	<div class="other-body">
		{body}
	</div>
</div>

<style>
	.other {
        width: calc(100% / 6);
		height: 100%;
		font-family: 'Noto Sans KR';
		font-weight: bold;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.other-head {
        max-width: 100%;
		font-size: 10px;
		display: flex;
        flex-direction: column;
		justify-content: center;
		align-items: center;
        text-align: center;
        margin-top: 22px;
        text-wrap: wrap;
	}

    .other-head span{
        font-size: 9px;
    }

	.other-body {
		font-size: 17px;
		font-weight: 900;
		display: flex;
		justify-content: center;
		align-items: center;
        margin-bottom: 27px
	}
</style>
