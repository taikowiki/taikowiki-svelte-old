<script>
	import { browser } from '$app/environment';

	export let jaEum;
	export let termsList;

	function goTop() {
		if (browser) {
			scrollTo(scrollX, 0);
		}
	}
</script>

<div class="wrapper">
	<div class="initial" data-terms-jaeum={jaEum} role="presentation" on:click={goTop}>{jaEum}</div>
	{#each termsList as term}
		<div class="container">
			<div class="kor">{term.kor}</div>
			<div class="jpn">{term.jpn}</div>
			<div class="content">
				{@html term.explanation}
			</div>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		width: 100%;
		margin-top: 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.initial {
		background-color: rgb(216, 48, 48);
		width: 100px;
		height: 25px;
		border-radius: 10px;
		color: white;
		font-family: 'Noto Sans KR';
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
        cursor: pointer;
	}

	.container {
		width: calc(100% - 100px);
		height: auto;
		font-family: 'Noto Sans JP', 'Noto Sans KR';
		padding: 10px;
		margin-top: 10px;
		border-radius: 5px;
		box-sizing: border-box;
		background-color: #f2f2f2;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.kor {
		min-width: 120px;
		width: auto;
		height: auto;
		background-color: #878787;
		color: white;
		font-weight: bold;
		border-radius: 5px;
		padding-inline: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.jpn {
		flex: 1 0 auto;
		margin-left: 10px;
		font-weight: bold;
		color: #878787;
	}

    .content{
        width:100%;
    }

	@media only screen and (max-width: 767px) {
		.container {
			width: 100%;
		}
	}
</style>
