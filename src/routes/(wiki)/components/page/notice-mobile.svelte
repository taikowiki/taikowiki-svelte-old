<script context="module">
	/**
	 * 해당 컴포넌트는 모바일 공지용 컴포넌트입니다.
	 * 해당 컴포넌트는 NoticeMobileWrapper 안에 들어갑니다.
	 * 
	 * title은 공지 / 위키 소식 이라고 쓰인 부분에 들어가는 텍스트입니다.
	 * notices는 최신 공지 3개가 들어갑니다.
	*/
</script>

<script lang="ts">
	export let title: string;
	export let notices: notice[] = [];

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
		width: 100%;
	}

	.title {
		width: 100%;

		margin-top: 20px;

		color: rgb(129, 129, 129);
		font-size: 17px;
		font-weight: bold;

		display: flex;
		justify-content: center;
	}

	.content {
		width: 100%;

		padding-left: 20px;
		padding-right: 20px;

		box-sizing: border-box;
	}

	.content a {
		width: 100%;
		font-size: 11px;
		font-weight: bold;
		color: rgb(55, 55, 55);

		margin-top: 2px;
		margin-bottom: 2px;

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
