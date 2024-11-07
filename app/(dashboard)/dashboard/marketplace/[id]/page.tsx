// app/marketplace/[id]/page.tsx
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductDetails from "@/components/blocks/product_details";


interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    link: string;
}

interface ProductDetailProps {
    params: { id: string };
}

const ProductDetailPage = ({ params }: ProductDetailProps) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${params.id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setError("Could not load product details");
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params.id]);

    if (loading) {
        return <div className="container py-8">Loading...</div>;
    }

    if (error || !product) {
        return (
            <div className="container py-8">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-red-500">{error}</h2>
                    <button
                        onClick={() => router.back()}
                        className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div >
            <ProductDetails params={{ id: product.id }} />
        </div>

    );
};

export default ProductDetailPage;

