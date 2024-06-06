<script lang="ts">
	import { page } from "$app/stores";
	import Noticelist from "./components/notice list.svelte";
	import Pageselect from "./components/page select.svelte";

    export let data;

    $: pageNumber = Number($page.url.searchParams.get('page')) || 1;
    $: type = null;
    $: list = data.notice.filter((e:any, i:number) => (pageNumber - 1) * 30 <= i && i < pageNumber * 30 ).map((e:any) => {
        if(!type){
            return e;
        }
        if(type === e.type){
            return e;
        }
        return null;
    }).filter((e:any) => e !== null);
</script>

<Noticelist {list}/>
<Pageselect list={data.notice}/>