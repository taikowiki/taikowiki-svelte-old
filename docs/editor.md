# Editor

공지 및 위키 문서 작성을 위한 에디터이다.

# 사용법

사용법은 다음과 같다.

```svelte
<script>
    import Editor from '$lib/module/tinymce/components/Editor.svelte';
    import setting from '$lib/module/tinymce/setting.ts';

    let value;//에디터 내부 html
</script>

<Editor conf={setting} scriptSrc='/ex/assets/js/tinymce/tinymce.min.js' bind:value>
```

setting을 수정하여 커스텀 할 수 있다.

# 추가 예정 기능

현재 이미지를 업로드하면 base64로 인코딩되어 삽입된다.

추후에 외부 업로더를 이용하여 이미지파일이 따로 저장되도록 하여야 한다.