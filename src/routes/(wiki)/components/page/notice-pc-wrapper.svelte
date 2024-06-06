<div class="wrapper">
	<slot name="left"/>
    <div class="partition"/>
    <slot name="right"/>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 130px;

		background-color: rgb(232, 232, 232);

		margin-top: 35px;

		border-radius: 20px;

		display: flex;
		flex-direction: row;
		justify-content: center;
	}
    

	.partition {
		width: 3px;
		height: 70px;
		margin-top: 30px;
		background-color: rgb(207, 207, 207);
	}
</style>
