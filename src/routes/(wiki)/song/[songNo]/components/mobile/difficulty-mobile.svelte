<script>
	export let selectedDifficulty;
	export let difficulty;
	export let level;
	export let setDifficulty;

	function getDifficultyColor() {
		switch (difficulty) {
			case 'easy': {
				return '#FF3720';
			}
			case 'normal': {
				return '#91B456';
			}
			case 'hard': {
				return '#3F4A2C';
			}
			case 'oni': {
				return '#DB117F';
			}
			case 'ura': {
				return '#4C5FEA';
			}
		}
	}
</script>

<div class="container" style={`transform: translateY(${selectedDifficulty === difficulty ? '20px' : ''});`}>
	<button
		class="btn"
		style={`background-color:${getDifficultyColor()};`}
		on:click={() => {
			setDifficulty(difficulty);
		}}
	>
		{#if selectedDifficulty !== difficulty}
			<span class="diff">
				{#if difficulty === 'easy'}
					간단
				{:else if difficulty === 'normal'}
					보통
				{:else if difficulty === 'hard'}
					어려움
				{:else if difficulty === 'oni'}
					오니(앞)
				{:else if difficulty === 'ura'}
					오니(뒤)
				{/if}
			</span>
            <div class="star">★</div>
		{/if}
		{level}
	</button>
</div>

<style>
	.container {
		width: 62px;
		position: relative;
		z-index: 9;
	}

	.btn {
		width: 100%;
		height: 54px;
		border-radius: 10px;
		font-family: 'Noto Sans KR';
		font-size: 20px;
		color: white;
		font-weight: 900;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		cursor: pointer;
		outline: 0;
		border: 0;
		position: relative;
	}

	.diff {
		width: 100%;
		height: 20px;
		font-size: 10px;
		font-weight: normal;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.star {
		font-family: 'Nijiiro';
		position: absolute;
		font-size: 10px;
		left: 7px;
		bottom: 8px;
	}
</style>
