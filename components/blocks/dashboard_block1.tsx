'use client';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart2, Shield, MessageCircle, ShoppingCart, DollarSign, BookOpen, Boxes, Code2, Heart, Terminal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { format, formatDistanceStrict, formatDistanceToNow } from 'date-fns';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import SearchInput from '../marketplace/searchInput';

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
    createdAt: string;
}

const categoryIconMap = {
    "Analytics": { icon: <BarChart2 />, color: 'text-blue-500' },
    "Security": { icon: <Shield />, color: 'text-red-500' },
    "Messaging": { icon: <MessageCircle />, color: 'text-green-500' },
    'E-commerce': { icon: <ShoppingCart />, color: 'text-purple-500' },
    "Finance": { icon: <DollarSign />, color: 'text-yellow-500' },
};

const ProductFeature = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const router = useRouter();

    const productsPerPage = 18;

    // Fonction mise à jour pour récupérer les produits depuis l'API
    const fetchProducts = async (page: number) => {
        try {
            const queryParams = new URLSearchParams({
                page: page.toString(),
                limit: productsPerPage.toString()
            });

            const response = await fetch(`/api/products/list?${queryParams}`); // Utilisation d'un nouvel endpoint "list"

            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            setProducts(data.products);
            setTotalProducts(data.total);
            setTotalPages(data.totalPages);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="relative min-h-screen before:absolute before:inset-0 before:bg-primary/10 before:[mask-image:url(/images/block/waves.svg)] before:[mask-repeat:repeat] before:[mask-size:_64px_32px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background"></div>
            <div className="container relative flex flex-col min-h-screen">
                <div className='py-4 relative z-50'>
                    <SearchInput />
                </div>

                {/* Grid des produits avec flex-1 pour prendre l'espace disponible */}
                <div className="z-30 grid gap-4 md:grid-cols-2 lg:grid-cols-3 flex-1">
                    {products.map((product) => {
                        const timeAgo = formatDistanceStrict(new Date(product.createdAt), new Date(), { addSuffix: true });
                        return (
                            <div
                                key={product.id}
                                className='cursor-pointer'
                                onClick={() => router.push(`/dashboard/marketplace/${product.id}`)}
                            >
                                <Alert className='bg-muted'>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Boxes className="flex-shrink-0 w-3 h-auto text-yellow-400" />
                                        <AlertTitle className="truncate">{product.name}</AlertTitle>
                                    </div>
                                    <AlertDescription className="text-sm text-muted-foreground truncate">
                                        <div className="flex flex-wrap gap-2 justify-start">
                                            <Boxes className="flex-shrink-0 w-3 h-auto text-blue-400" />
                                            {product.category}
                                            <p className="text-xs text-muted-foreground">{timeAgo}</p>
                                        </div>
                                    </AlertDescription>
                                </Alert>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination avec mt-auto pour la pousser vers le bas */}
                <div className="mt-auto py-8">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                                    }}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPages }, (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        href="#"
                                        isActive={currentPage === index + 1}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(index + 1);
                                        }}
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            {totalPages > 5 && currentPage < totalPages - 1 && (
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            )}

                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                                    }}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </section>
    );
};

export default ProductFeature;