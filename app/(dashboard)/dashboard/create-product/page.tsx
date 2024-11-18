'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useTheme } from 'next-themes';

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    link: string;
    type: string;
    language: string;
    license: string;
    likecount: string;
    createdAt: string;
    price: Number;
    docs: string;
}

export default function CreateProduct() {
    const { theme } = useTheme();

    const mdPreviewTheme = theme === "dark" || theme === "light" ? theme : undefined;

    const [product, setProduct] = useState<Partial<Product>>({});
    const [docsText, setDocsText] = useState('');
    const router = useRouter();

    const handleDocsChange = (value: string) => {
        setDocsText(value);
    };

    const saveProductDocs = async () => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...product, docs: docsText }),
            });

            if (!response.ok) {
                throw new Error('Failed to save product');
            }

            const data = await response.json();
            setProduct(data);
            console.log('Product created successfully:', data);
            router.push(`/dashboard/marketplace/${data.id}`);
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div>
            <h1>Create Product</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={product.name || ''}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    value={product.category || ''}
                    onChange={(e) => setProduct({ ...product, category: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="language">Language:</label>
                <input
                    type="text"
                    id="language"
                    value={product.language || ''}
                    onChange={(e) => setProduct({ ...product, language: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="license">License:</label>
                <input
                    type="text"
                    id="license"
                    value={product.license || ''}
                    onChange={(e) => setProduct({ ...product, license: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    id="type"
                    value={product.type || ''}
                    onChange={(e) => setProduct({ ...product, type: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={product.description || ''}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                ></textarea>
            </div>
            <div>
                <h2>Product Documentation</h2>
                <MdEditor
                    toolbarsExclude={['github']}
                    previewTheme='github'
                    placeholder="Enter product documentation here"
                    language="en-US"
                    theme={mdPreviewTheme}
                    modelValue={docsText}
                    onChange={handleDocsChange}
                />
                <button onClick={saveProductDocs}>Save Product</button>
            </div>
        </div>
    );
}