<script lang="ts">
    export let title: string;
	export let notices: notice[] = [
        {
            title:'12/13 삭제곡 공지',
            order:1
        },
        {
            title:'12/13 삭제곡 공지',
            order:1
        },
        {
            title:'12/13 삭제곡 공지',
            order:1
        }
    ];

	interface notice {
		title: string;
		order: number;
	}
</script>

<div class="notice">
	<div class="title">
		{title}
	</div>
	<div class="content">
		{#each notices as notice}
			<a href={`/notice/${notice.order}`}>
				<div class="visit-mark" />
				{notice.title}
			</a>
		{/each}
	</div>
</div>

<style>
	.notice {
		width: calc(50% - 2px);

        padding-top:17px;

        box-sizing: border-box;
	}

	.title {
		width: 100%;

		color: rgb(129, 129, 129);
		font-size: 17px;
		font-weight: bold;

        margin-bottom: 15px;

		display: flex;
		justify-content: center;
	}

	.content {
		width: 100%;

		padding-left: 20px;
		padding-right: 20px;

		box-sizing: border-box;

        display:flex;
        flex-direction: column;
        align-items: center;
	}

	.content a {
		width: 300px;
		font-size: 11px;
		font-weight: bold;
		color: rgb(55, 55, 55);

        display:block;
	}

	.visit-mark {
		width: 8px;
		height: 8px;
		border-radius: 4px;
		display: inline-block;
		background-color: red;
	}

	a:visited .visit-mark {
		width: 8px;
		height: 8px;
		border-radius: 4px;
		display: inline-block;
		background-color: blue;
	}
</style>
