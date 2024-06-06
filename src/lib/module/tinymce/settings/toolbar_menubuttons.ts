const toolbar_menubutton = [
    //inlines
    function (editor:any) {
        editor.ui.registry.addMenuButton('inline', {
            icon: 'bold',
            fetch: (callback:Function) => {
                const items = [
                    {
                        icon: 'bold',
                        type: 'menuitem',
                        onAction: () => { editor.formatter.toggle('bold'); editor.focus() }
                    },
                    {
                        icon: 'italic',
                        type: 'menuitem',
                        onAction: () => { editor.formatter.toggle('italic'); editor.focus() }
                    },
                    {
                        icon: 'underline',
                        type: 'menuitem',
                        onAction: () => { editor.formatter.toggle('underline'); editor.focus() }
                    },
                    {
                        icon: 'strike-through',
                        type: 'menuitem',
                        onAction: () => { editor.formatter.toggle('strikethrough'); editor.focus() }
                    },
                    {
                        icon: 'line',
                        type: 'menuitem',
                        onAction: () => { editor.formatter.toggle('line'); editor.focus() }
                    },
                    {
                        icon: 'superscript',
                        type: 'menuitem',
                        onAction: () => { editor.formatter.toggle('superscript'); editor.focus() }
                    },
                    {
                        icon: 'subscript',
                        type: 'menuitem',
                        onAction: () => { editor.formatter.toggle('subscript'); editor.focus() }
                    },
                ];
                callback(items);
            }
        });
    },
    //lists
    function (editor:any) {
        editor.ui.registry.addMenuButton('list', {
            icon: 'unordered-list',
            fetch: (callback:Function) => {
                const items = [
                    {
                        icon: 'unordered-list',
                        type: 'menuitem',
                        onAction: () => { editor.insertContent('<ul><li></li></ul>') }
                    },
                    {
                        icon: 'ordered-list',
                        type: 'menuitem',
                        onAction: () => { editor.insertContent('<ol><li></li></ol>') }
                    }
                ];
                callback(items);
            }
        });
    }
]

export default toolbar_menubutton;