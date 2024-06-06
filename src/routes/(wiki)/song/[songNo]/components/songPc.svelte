<script>
	import DiffInfoPc from './pc/diffInfoPc.svelte';
	import DifficultySelectorPc from './pc/difficultySelectorPc.svelte';
	import InfoPc from './pc/infoPc.svelte';

	export let songHeader;
	export let selectedDifficulty;
    export let hasUra;
    export let level;
    export let diffInfo;
    export let dani;
    export let songNo;
    export let attributes;
	export let chart;
</script>

<div class="wrapper for-pc">
	<InfoPc {songHeader} />
	<DifficultySelectorPc bind:selectedDifficulty {hasUra} {level}/>
    <DiffInfoPc {diffInfo} bind:selectedDifficulty {dani} {songNo} {attributes} {chart}/>
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
	}
</style>
