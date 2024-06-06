<script lang="ts">
	import { page } from '$app/stores';
	import DropdownOption from './dropdown-option.svelte';

	export let width = '';
	export let height = '';
	export let style = '';
	export let options: option[] = [];
	export let value: any = options.find((e) => e.default === true)?.value || options[0].value;
	export let text: string = options.find((e) => e.default === true)?.text || options[0].text;

	//기본값
	set(options.find((e) => e.default === true)?.value || options[0].value, options.find((e) => e.default === true)?.text || options[0].text)

	export function set(v: any, t: string) {
		value = v;
		text = t;
	}

	export let disabled = false;
	export const disable = function () {
		if (disabled === true) {
			disabled = false;
		} else {
			disabled = true;
		}
	};
	$: if (disabled) {
		opened = false;
		value = options.find((e) => e.default === true)?.value || options[0].value;
		text = options.find((e) => e.default === true)?.text || options[0].text;
	}
	let opacity = 1;
	$: if (disabled === true) {
		opacity = 0.5;
	} else {
		opacity = 1;
	}

	export let opened = false;
	export const toggle = function () {
		if (opened === true) {
			opened = false;
		} else {
			opened = true;
		}
	};

	interface option {
		value: any;
		text: string;
		default?: true;
		show?: boolean;
	}
</script>

<div class="wrapper" style={`opacity:${opacity};width:${width};height:${height};${style}`}>
	{#if disabled}
		<div class="disabler" />
	{/if}
	<div
		class="indicator"
		on:click={() => {
			toggle();
		}}
		role="button"
		tabindex="0"
		on:keyup={() => {}}
	>
		{text}
	</div>
	{#if opened}
		<div class="options">
			{#each options as option}
				{#if option?.show === true || option?.show === undefined}
					<DropdownOption value={option.value} text={option.text} {set} {toggle} {height} />
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;

		position: relative;

		background-color: #b2b2b2;

		color: white;
		font-size:15px;

		border-radius: 10px;
	}

	.disabler {
		width: 100%;
		height: 100%;

		position: absolute;
		left: 0;
		top: 0;
	}

	.indicator {
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;
	}

	.options {
		width: 100%;
		height: auto;

		position: absolute;
		left: 0;
		top: 100%;
		z-index: 100;

		background-color: #b2b2b2;

		border-radius: 10px;

		overflow: hidden;
	}
</style>
