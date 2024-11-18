import React, { useEffect, useState } from 'react';
import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useTheme } from 'next-themes';

const MarkdownPreview = ({ content }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [previewContent, setPreviewContent] = useState('');

    // Handle theme switching and initial load
    useEffect(() => {
        setMounted(true);

        // Handle content parsing
        try {
            if (typeof content === 'string') {
                setPreviewContent(content);
            } else if (typeof content === 'object') {
                setPreviewContent(JSON.stringify(content));
            } else {
                setPreviewContent('');
            }
        } catch (error) {
            console.error('Error parsing markdown content:', error);
            setPreviewContent('Error displaying content');
        }
    }, [content]);

    // Don't render until mounted to avoid hydration issues
    if (!mounted) {
        return <div className="w-full h-32 animate-pulse bg-muted rounded-md" />;
    }

    return (
        <div className="w-full">
            <MdPreview
                modelValue={previewContent}
                previewTheme="github"
                codeTheme={theme === 'dark' ? 'dracula' : 'github'}
                theme={theme === 'dark' ? 'dark' : 'light'}
                language="en-US"
            // previewOnly
            />
        </div>
    );
};

export default MarkdownPreview;