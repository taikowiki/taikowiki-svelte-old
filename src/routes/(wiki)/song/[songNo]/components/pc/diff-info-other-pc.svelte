<script>
    export let head;
    export let body;
    export let title = '';
</script>

<div class="other" {title} style={title? 'cursor: help;' : ''}>
    <div class="other-head">
        {head}
    </div>
    <div class="other-body">
        {body}
    </div>
</div>

<style>
    .other{
        height: 100%;
    font-family: 'Noto Sans KR';
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

	.other-head {
		font-size: 13px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.other-body {
		font-size: 25px;
		font-weight: 800;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>