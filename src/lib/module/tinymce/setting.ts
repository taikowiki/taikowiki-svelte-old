import toolbar from "./settings/toolbar";
import style_formats from "./settings/style_formats";
import toolbar_menubutton from "./settings/toolbar_menubuttons";
import plugins from "./settings/plugins";
import file_picker_callback from "./settings/file_picker_callback";

const setting = {
    language: 'ko_KR',
    promotion: false,
    toolbar,
    menubar: false,
    plugins,
    style_formats,
    file_picker_callback,
    file_picker_types:'image',
    setup: (editor: any) => {
        toolbar_menubutton.forEach((e) => {
            e(editor);
        })
    },
}

export default setting;