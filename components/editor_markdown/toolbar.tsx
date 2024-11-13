import React, { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useTheme } from 'next-themes';


export default function EditorMarkdown() {
    const { theme } = useTheme();

    const mdPreviewTheme = theme === "dark" || theme === "light" ? theme : undefined;

    const [text, setText] = useState('# Hello Editor');
    return <MdEditor language='en-US' theme={mdPreviewTheme} modelValue={text} onChange={setText} />;
};
