<script>
	import { browser } from "$app/environment";

	export let jaEumList;

    function goScroll(text){
        if(browser){
            scrollTo(scrollX, document.querySelector(`[data-terms-jaeum="${text}"]`).offsetTop);
        }
    }
</script>

<div class="wrapper">
	<div class="title">초성별 카테고리</div>
	<div class="container">
		{#each [0, 1, 2] as index}
			<div class="line">
				{#each [0, 1, 2, 3, 4] as index2}
					<div class="btn" role="presentation" on:click={() => {goScroll(jaEumList[5 * index + index2]);}}>{jaEumList[5 * index + index2]}</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		width: calc(100% - 100px);
		justify-content: center;
		text-align: center;
		font-family: 'Noto Sans KR';
		font-weight: bold;
		color: #868686;
		background-color: rgb(242, 242, 242);
		padding: 5px 0 10px 0;
		box-sizing: border-box;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10px;
	}

	.container {
		display: flex;
		flex-direction: row;
		justify-content: center;
        gap:4px;
	}

	.line {
		display: flex;
		flex-direction: row;
		justify-content: center;
        gap:4px;
	}

	.btn {
		background-color: rgb(216, 48, 48);
		width: 50px;
		height: 30px;
		border-radius: 5px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: white;
		cursor: pointer;
	}

    @media only screen and (max-width:767px){
        .wrapper{
            width:100%;
        }

        .container{
            flex-direction: column;
        }

        .line{
            gap:9px;
            margin-top:3px;
        }

        .line:nth-child(1){
            transform: translateX(-10px);
        }

        .line:nth-child(3){
            transform: translateX(10px);
        }

        .btn{
            width:44px;
            height:25px;
        }
    }
</style>
