<script context="module" lang="ts">
	function getTitle(language: string) {
		switch (language) {
			case 'ko': {
				return '공지';
			}
			case 'jp': {
				return 'お知らせ';
			}
            default:{
                return '공지';
            }
		}
	}

	function getURL(order: number, title: string, page: any) {
		let url = new URL(page.url.href);
		url.pathname = `/notice/${order}`;
		url.searchParams.set('title', title.trim());
		url.searchParams.delete('page');
		return url.href;
	}

	function getType(type: 'official' | 'wiki' | 'other', language: string = 'ko') {
		switch (type) {
			case 'official': {
				switch (language) {
					case 'ko': {
						return '공식';
					}
					case 'jp': {
						return '公式';
					}
				}
			}
			case 'wiki': {
				switch (language) {
					case 'ko': {
						return '위키';
					}
					case 'jp': {
						return 'ウィキ';
					}
				}
			}
			case 'other': {
				switch (language) {
					case 'ko': {
						return '기타';
					}
					case 'jp': {
						return 'その他';
					}
				}
			}
            default:{
                switch (language) {
					case 'ko': {
						return '기타';
					}
					case 'jp': {
						return 'その他';
					}
				}
            }
		}
	}

	function getDate(dateString: string) {
		return new Date(dateString).toLocaleDateString().replaceAll('. ', '-').replace('.', '');
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let list: any[];

	//언어
	let Lang: Writable<string> = getContext('lang');
	let language: Writable<any> = getContext('language');

	//타이틀
	$: title = getTitle($Lang);
    let pageTitle:Writable<string> = getContext('page-title');
    $: $pageTitle = getTitle($Lang);
</script>

<div class="title for-pc">
	{title}
</div>
<div class="wrapper">
	{#each list as notice}
		<a class="notice" href={getURL(notice.order, notice.title, $page)}>
			<div class="date">
				{getDate(notice.date)}
			</div>
			<div class="type">
				{getType(notice.type, $Lang)}
			</div>
			<div class="notice-title">
				{notice.title}
			</div>
		</a>
	{/each}
</div>

<style>
	.title {
		width: 100%;
		text-align: center;
		font-weight: bold;
		font-family: 'Noto Sans JP', 'SDKukdetopokki';
		font-size: 40px;
		margin-top: 80px;
		margin-bottom: 40px;
	}

	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
	}

	.notice {
		width: 950px;
		height: 50px;
		border-radius: 15px;

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.notice:nth-child(2n-1) {
		background-color: #f3f3f3;
	}
	.notice:nth-child(2n) {
		background-color: #e7e7e7;
	}

	.date {
		width: 77px;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		color: rgb(89, 89, 89);
        margin-left:46px;
        box-sizing: border-box;
	}

    .type{
        text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: rgb(89, 89, 89);
        margin-left:16px;
        margin-right:16px;
    }

    .notice-title{
        font-size:18px;
        font-weight: bold;
        color: #595959;
    }

    @media only screen and (max-width: 767px){
        .notice{
            width:100%;
        }

        .date{
            margin-left:5px;
            font-weight: normal;
            color:black;
        }

        .type{
            width:36px;
            margin-left:5px;
            margin-right:5px;
        }

        .notice-title{
            width:calc(100% - 132px);
            text-wrap: nowrap;
            text-overflow: ellipsis;
            overflow-x: hidden;
            font-size:16px;
        }
    }
</style>
