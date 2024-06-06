<script lang="ts">
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
    import Editor from "$lib/module/tinymce/components/Editor.svelte";
    import setting from '$lib/module/tinymce/setting';

    export let html:string;
    export let title:string;
    let order = $page.url.searchParams.get('order') || '';

    if($page.data?.noticeData){
        html = $page.data.noticeData.content;
        title = $page.data.noticeData.title;
    }
    if($page.form?.error && browser){ 
        alert($page.form.error);
    }
    if($page.form?.html){
        html = $page.form.html;
    }
    if($page.form?.title){
        title = $page.form.title;
    }
</script>

<input type="text" bind:value={title} placeholder="제목" style="width:100%;">

<Editor scriptSrc="/ex/assets/js/tinymce/tinymce.min.js" conf={{...setting, height:800}} bind:value={html}/>

<form method="post" action="/write">
    <input type="text" value={title} name="title" style="display:none;"/>
    <input type="text" value={html} name="html" style="display:none;"/>
    <input type="text" value={order} name="order" style="display:none;"/>
    <input type="password" name="password" placeholder="비밀번호"/>
    <select name="notice_type">
        <option value="official">
            공식
        </option>
        <option value="wiki">
            위키
        </option>
    </select>
    <input type="submit"/>
</form>