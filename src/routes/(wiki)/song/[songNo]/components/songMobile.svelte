<script>
	import InfoMobile from './mobile/info-mobile.svelte';
    import DifficultySelectorMobile from './mobile/difficulty-selector-mobile.svelte';
	import DiffInfoMobile from './mobile/diff-info-mobile.svelte';

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

<div class="wrapper for-mobile">
	<InfoMobile {songHeader} />
    <DifficultySelectorMobile bind:selectedDifficulty {hasUra} {level}/>
    <DiffInfoMobile {diffInfo} bind:selectedDifficulty {dani} {songNo} {attributes} {chart}/>
</div>

<style>
	.wrapper {
		width: 100%;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
        padding-left:15px;
        padding-right: 15px;
        box-sizing: border-box;
	}
</style>
