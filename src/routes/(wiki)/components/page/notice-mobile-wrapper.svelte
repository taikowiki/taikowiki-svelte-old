<script context="module">
	/**
	 * 해당 컴포넌트는 모바일 공지용 컴포넌트입니다.
	 * 해당 컴포넌트에는 NoticeMobile 컴포넌트가 들어갑니다.
	*/
</script>

<div class="notice-container">
	<div class="notice-wrapper">
		<slot />
	</div>
</div>

<style>
	.notice-container {
		width: 100%;

		display: flex;
		justify-content: center;
	}

	.notice-wrapper {
        width: 100%;

		background-color: rgb(232, 232, 232);
		border-radius: 20px;

		display: flex;
		flex-direction: column;

		padding-bottom: 20px;
	}
</style>
