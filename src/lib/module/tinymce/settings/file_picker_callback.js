const file_picker_callback = (callback, value, meta) => {
    if(meta.filetype === 'image'){
        let input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.addEventListener('change', function(e){
            const file = e.target.files[0];

            const size = file.size;
            
            if(size > 5242880){
                alert('이미지 업로드 최대 용량은 5MB입니다.');
                return;
            }
            
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                const id = 'blobid' + new Date().getTime();
                const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                const base64 = reader.result.split(',')[1];
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                callback(blobInfo.blobUri(), { title: file.name });
            });
            reader.readAsDataURL(file);
        })
        input.click();
    }
}

export default file_picker_callback