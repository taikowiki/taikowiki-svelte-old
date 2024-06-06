<script>
	export let href;
	export let title;
	export let sub;
	export let red;
</script>

<a class="basics-menu-content" {href}>
	<div class="basics-menu-bar-container">
		{#if red}
			<div class="basics-menu-bar"></div>
		{/if}
	</div>
	<div class="basics-menu-text">
		<span class="basics-menu-title">{title}</span>
		<span class="basics-menu-sub">{sub}</span>
	</div>
</a>

<style>
	.basics-menu-content {
		margin: 5px;

		width: 30%;
		height: 70px;

		border-radius: 10px;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;

		background-color: #f2f2f2;
	}
	.basics-menu-bar-container {
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		left: 10px;
	}
	.basics-menu-bar {
		height: 70%;
		width: 5px;

		margin-top: 7px;
		margin-bottom: 7px;
		
		margin-right: 5px;

		border-radius: 15px;

		background-color: #d83030;
	}
	.basics-menu-text {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		margin-right: 10px;
		margin-left: 10px;

		color: #303030;
	}
	.basics-menu-title {
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: bold;
		font-size: 20px;
	}
	.basics-menu-sub {
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: bold;
		font-size: 10px;
	}
	@media only screen and (max-width: 767px) {
		.basics-menu-content {
			margin: 5px;

			width: 45%;
			height: 60px;

			border-radius: 10px;

			display: flex;
			justify-content: center;
			align-items: center;

			position: relative;

			background-color: #f1f1f1;
		}
		.basics-menu-bar-container {
			height: 100%;

			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			left: 10px;
		}

		.basics-menu-bar {
			height: 50%;
			width: 5px;

			margin-top: 7px;
			margin-bottom: 7px;
			
			margin-right: 5px;

			border-radius: 15px;

			background-color: #d83030;
		}

		.basics-menu-text {
			display: flex;
			flex-direction: column;

			justify-content: center;
			align-items: center;

			margin-right: 10px;
			margin-left: 10px;

			color: #303030;
		}
	}
</style>
