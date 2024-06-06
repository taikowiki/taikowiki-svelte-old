<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const level = [10, 9, 8, 7, 6];
	let selectedLevel = Number($page.params?.level);

	let L;
</script>

<div class="wrapper for-pc">
	{#each level as L}
		<a href={`/diffchart/clear/${L}`}>
			★ {L}
		</a>
	{/each}
</div>
<select
	class="for-mobile"
	bind:value={L}
	on:change={() => {
		goto(`/diffchart/clear/${L}`);
	}}
>
	{#each level as L}
		{#if L === selectedLevel}
			<option value={L} selected>★ {L}</option>
		{:else}
			<option value={L}>★ {L}</option>
		{/if}
	{/each}
</select>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 10px;
		font-family: 'Nijiiro';
		font-weight: bold;
	}

	.wrapper a {
		width: calc(20% - 10px);
		height: 50px;
		background-color: rgb(157, 157, 157);
		color: rgb(255, 255, 255);
		border-radius: 10px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}

    select{
        width:100%;
        text-align: center;
        height:40px;
        font-family: 'Nijiiro';
		font-weight: bold;
        font-size:18px;
        border:0;
        background-color: rgb(233, 233, 233);
    }
</style>
