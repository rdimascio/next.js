import EditorJS from '@editorjs/editorjs';
import { useEffect, useState } from 'react';

export default function Editor () {
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        if (!editor) {
            const Editor = new EditorJS({
                /**
                 * Id of Element that should contain Editor instance
                 */
                holder: 'root'
            });

            setEditor(Editor);
        }
    }, []);

    return (
        <div id="root"></div>
    );
}
