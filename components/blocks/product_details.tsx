import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { EmptyPlaceholder } from "../empty-placeholder";
import { PostCreateButton } from "../post-create-button";
import { Boxes, BookOpen, Code2, Heart, TerminalSquare, GitPullRequest } from "lucide-react";
import { Button } from "../ui/button";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { MdPreview } from "md-editor-rt";
import { useTheme } from "next-themes";
import DocsPreview from "../editor_markdown/docsPreview";
import MarkdownPreview from "../editor_markdown/MarkdownPreview";


interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    link: string;
    type: string,
    language: string,
    license: string,
    likecount: string,
    createdAt: string,
    docs: string,
}

interface ProductDetailProps {
    params: { id: string };
}



const ProductDetails = ({ params }: ProductDetailProps) => {

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
        <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No api created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
                You don&apos;t have any api yet. Explore the market place.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
        </EmptyPlaceholder>
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
    const timeAgo = formatDistanceStrict(new Date(product.createdAt), new Date(), { addSuffix: true });

    console.log(product.docs);

    return (
        <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
            <div className="flex flex-col md:flex-row md:gap-8">
                <article className="w-full md:flex-1 dark:prose-invert prose-sm">
                    <button
                        onClick={() => router.back()}
                        className="pb-2 "
                    >
                        ← Go Back
                    </button>

                    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                        <h1 className="text-xl font-semibold">{product.name}</h1>
                        <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="xs">
                                <GitPullRequest className="w-4 h-4" />
                                Request
                            </Button>
                            <Button variant="secondary" size="xs">
                                <TerminalSquare className="w-4 h-4" />
                                Test
                            </Button>
                            <Button className="bg-blue-600 text-white hover:bg-blue-700" size="xs">
                                Use this API
                            </Button>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500">{timeAgo}</p>
                    <p className="mt-2">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        <Button variant="outline" size="sm">
                            <Boxes className="w-4 h-4 text-yellow-500" />
                            {product.category}
                        </Button>
                        <Button variant="outline" size="sm">
                            <Code2 className="w-4 h-4 text-blue-500" />
                            {product.language}
                        </Button>
                        <Button variant="outline" size="sm">
                            <BookOpen className="w-4 h-4 text-purple-500" />
                            {product.license}
                        </Button>
                        <Button variant="outline" size="sm">
                            <Heart className="w-4 h-4 text-red-500" />
                            {product.likecount}
                        </Button>
                    </div>

                    <div className="mt-6">
                        <MarkdownPreview content={product.docs} />
                    </div>
                </article>

                {/* Aside pour les informations supplémentaires */}
                {/* <aside className="mt-8 md:mt-0 md:w-64 md:flex-shrink-0">
                    <div className="rounded border border-gray-300 bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-800">
                        <h3 className="text-lg font-semibold mb-4">About {product.name}</h3>
                        <div className="text-sm mb-2">
                            <span className="font-bold">Company:</span> Some Company
                        </div>
                        <div className="text-sm mb-2">
                            <span className="font-bold">Industry:</span> Technology
                        </div>
                        <div className="text-sm mb-2">
                            <span className="font-bold">Location:</span> London, UK
                        </div>
                        <div className="text-sm mb-2">
                            <span className="font-bold">Size:</span> 11-50 employees
                        </div>
                        <div className="text-sm">
                            <span className="font-bold">Website:</span>{" "}
                            <a href="https://example.com" className="text-blue-600 underline">
                                https://example.com
                            </a>
                        </div>
                    </div>
                </aside> */}
            </div>
        </section>

    );
};

export default ProductDetails;