<script>
	import { page } from '$app/stores';
	import Dropdown from '$lib/components/dropdown/dropdown.svelte';
	import OtherOptions from './otherOptionsWrapper.svelte';

	export let options;
	export let regions;

	/*가격*/
	const priceOptions = [
		{
			value: null,
			text: '전체',
			default: true
		},
		{
			value: {
				price: 500,
				songs: 2
			},
			text: '500|2'
		},
		{
			value: {
				price: 1000,
				songs: 3
			},
			text: '1000|3'
		},
		{
			value: {
				price: 1000,
				songs: 4
			},
			text: '1000|4'
		}
	];

	/*지역*/
	const regionOptions = [
		{
			value: null,
			text: '전국'
		}
	];
	regions.forEach((e) => {
		regionOptions.push({
			value: e,
			text: e
		});
	});
	regionOptions.forEach(e => {
		if(e.text === ($page.url.searchParams.get('region') || "전국")){
			e.default = true;
		}
	})

	console.log(regionOptions.find(e => e.default === true))
</script>

<div class="pc for-pc">
	<Dropdown options={priceOptions} bind:value={options.price} width="130px" height="30px" style="font-size:17px;font-weight:bold;margin-left:6px;margin-right:6px;" />
	<Dropdown options={regionOptions} bind:value={options.region} width="130px" height="30px" style="font-size:17px;font-weight:bold;margin-left:6px;margin-right:6px;" />
	<OtherOptions bind:selected={options.others} />
</div>
<div class="mobile for-mobile">
	<select bind:value={options.price}>
		{#each priceOptions as price}
			<option value={price.value}>{price.text}</option>
		{/each}
	</select>
	<select bind:value={options.region}>
		{#each regionOptions as region}
			<option value={region.value}>{region.text}</option>
		{/each}
	</select>
	<OtherOptions bind:selected={options.others} />
</div>

<style>
	.pc {
		margin-top: 60px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.mobile {
		width: 90%;
		height: 72px;
		margin-top: 30px;
		gap: 4px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.mobile select {
		width: 80px;
		height: 30px;

		text-align: center;

		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		background-color: rgb(178, 178, 178);
		border-radius: 10px;
		font-family: 'Noto Sans JP', 'Noto Sans KR';
		font-weight: 600;
		font-size: 15px;
		color: rgb(255, 255, 255);
		cursor: pointer;
		position: relative;
	}
</style>
