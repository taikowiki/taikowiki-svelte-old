<script>
	export let value;
	export let selected;
	export let text;
    export let style;

    function select(){
        selected = value;
    }
</script>

<div class={`lang ${selected === value ? 'selected' : 'notselected'}`} on:click={() => {select()}} on:keydown={() => {}} role="button" tabindex="0" {style}>
	<span>{text}</span>
</div>

<style>
	.lang {
		min-width: 120px;
		height: 26px;
        border: 3px solid rgb(178, 178, 178);
		border-radius: 10px;
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
        font-weight: bold;
	}

	.selected {
		color: rgb(178, 178, 178);
		background-color: white;
	}

    .notselected{
        background-color: rgb(178, 178, 178);
		color: white;
    }

    .lang span{
        transform:translateY(-1px);
    }

    @media only screen and (max-width:767px){
        .lang{
            min-width:68px;
        }
    }
</style>
