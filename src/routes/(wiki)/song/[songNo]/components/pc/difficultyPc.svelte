<script>
    export let selectedDifficulty;
	export let difficulty;
	export let level;
    export let setDifficulty;

    function getDifficultyColor(){
        switch (difficulty){
            case 'easy':{
                return '#FF3720';
            }
            case 'normal':{
                return '#91B456';
            }
            case 'hard':{
                return '#3F4A2C';
            }
            case 'oni':{
                return '#DB117F';
            }
            case 'ura':{
                return '#4C5FEA';
            }
        }
    }
</script>

<div class="container" style={`background-color:${selectedDifficulty === difficulty ? getDifficultyColor() : ''};`}>
	<button class="btn" style={`background-color:${getDifficultyColor()};`} on:click={() => {setDifficulty(difficulty)}}>
		<span class="star">★</span>
		{level}
	</button>
</div>

<style>
	.container {
		width: 110px;
		height: 60px;
		border-radius: 10px 10px 0 0;
	}

	.btn {
		width: 110px;
		height: 45px;
		border-radius: 10px;
		font-family: 'Noto Sans KR';
		font-size: 30px;
		color: white;
		font-weight: 900;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
        outline: 0;
        border:0;
	}

	.star {
		font-family: 'Nijiiro';
		margin-top: -2px;
		font-weight: bold;
		font-size: 25px;
		margin-right: 10px;
	}
</style>
