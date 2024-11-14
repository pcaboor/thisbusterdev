import { MdPreview } from 'md-editor-rt';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function DocsPreview({ content }) {
    const { theme } = useTheme();
    const [id] = useState('preview-only');
    const mdPreviewTheme = theme === "dark" || theme === "light" ? theme : undefined;

    // S'assurer que le contenu est une chaîne de caractères
    const safeContent = typeof content === 'string' ? content :
        (typeof content === 'object' ? JSON.stringify(content) : '');

    return (
        <div className="w-full">
            <MdPreview
                theme={mdPreviewTheme}
                language="en-US"
                modelValue={safeContent}
                editorId={id}
            />
        </div>
    );
}