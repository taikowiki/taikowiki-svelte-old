<div class="logo">
	<img class="logo-pc for-pc" src="/assets/img/icon/page/logo-pc.png" alt="logo" />
</div>
<div class="logo-mobile for-mobile">
	<div class="logo-mobile-wrapper">
        <img src="/assets/img/icon/page/logo-mobile.png" alt="logo"/>
    </div>
</div>

<style>
	.logo {
		width: 100%;
		text-align: center;
	}

	.logo-pc {
		width: 300px;
		margin-top: 70px;
	}

	.logo-mobile {
		width: 100vw;
		height: 200px;
		background-image: linear-gradient(to bottom, #e74646, #c43d3d), url('/assets/img/icon/page/logo-mobile-background.svg');
		background-blend-mode: lighten;
		background-repeat: no-repeat;
		background-size: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		position: relative;
	}

	.logo-mobile-wrapper {
		width: calc(100% - 20px);
		height: auto;
		margin-top: 120px;
		margin-right: 0;
		margin-left: 20px;
		text-align: left;
	}

    .logo-mobile-wrapper img{
        width: 180px;
    }
</style>
