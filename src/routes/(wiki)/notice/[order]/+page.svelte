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
    import type { Writable } from 'svelte/store';
    import { getContext } from 'svelte';

    export let data;

    //언어
	let Lang: Writable<string> = getContext('lang');

    //타이틀
    let pageTitle:Writable<string> = getContext('page-title');
    $: $pageTitle = getTitle($Lang);
</script>

<div class="wrapper">
    <div class="container">
        <div class="title">
            <span class="title-title">{data.notice.title}</span>
            <span class="date">
                {getDate(data.notice.date)} {getType(data.notice.type, $Lang) || getType(data.notice.type, 'ko')}
            </span>
			<a href='/notice'>목록 보기</a>
        </div>
        <div class="body">
            {@html data.notice.content}
        </div>
    </div>
</div>

<style>
    .wrapper{
        width:100%;
        display:flex;
        justify-content: center;
    }

    .container{
        width:950px;
        display:flex;
        flex-direction: column;
    }

    .title{
        width:100%;

        border-bottom: 1px solid #595959;

		display:flex;
		flex-direction: row;
		align-items: baseline;
    }

    .date{
        font-size:13px;
        font-weight: bold;
        color:#595959;
    }

    .title-title{
        margin:0;
        font-size:25px;
        font-weight: bold;

		flex: 1 0 auto;
    }

	.title a{
		font-size:13px;
        font-weight: bold;
		color:rgb(100, 100, 255);

		margin-left:5px;
	}

    @media only screen and (max-width:767px){
        .container{
            width:100%;
        }

        .title{
            display:flex;
            flex-direction: column;
        }

        .title-title{
            text-wrap: pretty;
            font-size: 20px;
        }
    }

	.body{
		max-width: 950px;
	}

	.body img{
		max-width: 100%;
	}
</style>