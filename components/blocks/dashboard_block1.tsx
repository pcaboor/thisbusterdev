'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BarChart2, Shield, MessageCircle, ShoppingCart, DollarSign, User, Zap } from 'lucide-react';
import SearchInput from '../marketplace/searchInput';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import { VscCalendar, VscGitFetch } from "react-icons/vsc";
import { HiCube } from "react-icons/hi2";
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { UserAvatar } from '../user-avatar';

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
}

const categoryIconMap = {
    "Free": { icon: <Zap size={16} />, color: 'text-green-500' },
    "Analytics": { icon: <BarChart2 size={16} />, color: 'text-blue-500' },
    "Security": { icon: <Shield size={16} />, color: 'text-red-500' },
    "Messaging": { icon: <MessageCircle size={16} />, color: 'text-green-500' },
    'E-commerce': { icon: <ShoppingCart size={16} />, color: 'text-purple-500' },
    "Finance": { icon: <DollarSign size={16} />, color: 'text-yellow-500' },
    "Education": { icon: <Shield size={16} />, color: 'text-purple-500' },
    "Health": { icon: <Shield size={16} />, color: 'text-green-500' },
};

const ProductFeature = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [sortOption, setSortOption] = useState('name');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const router = useRouter();

    const productsPerPage = 18;

    const fetchProducts = async (page: number) => {
        try {
            const queryParams = new URLSearchParams({
                page: page.toString(),
                limit: productsPerPage.toString()
            });

            const response = await fetch(`/api/products/list?${queryParams}`);
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

    const sortedProducts = [...products].sort((a, b) => {
        const aHasTag = a.description.includes("use client") || a.type.includes("use client");
        const bHasTag = b.description.includes("use client") || b.type.includes("use client");

        if (aHasTag && !bHasTag) return -1;
        if (!aHasTag && bHasTag) return 1;

        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'date') {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }

        return 0;
    });

    const filteredProducts = selectedCategory
        ? sortedProducts.filter(product => product.category === selectedCategory)
        : sortedProducts;

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
        <section className="relative min-h-screen">
            <div className="container relative flex flex-col min-h-screen">
                <div className='flex items-center space-x-4 py-5'>
                    <div className='flex-grow'>
                        <SearchInput />
                    </div>
                    <div className="">
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setSortOption('name')}
                                className={`flex items-center space-x-1 px-3 py-1 shadow-sm border text-xs rounded-lg ${sortOption === 'name' ? 'border-blue-500' : ''
                                    }`}
                            >
                                <VscGitFetch className='mr-2' />
                                Sort by Name
                            </button>
                            <button
                                onClick={() => setSortOption('date')}
                                className={`flex items-center space-x-1 px-3 py-1 shadow-sm border text-xs rounded-lg ${sortOption === 'date' ? 'border-blue-500' : ''
                                    }`}
                            >
                                <VscCalendar className='mr-2' />
                                Sort by Date
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                    {Object.keys(categoryIconMap).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                            className={`flex items-center space-x-1 px-3 py-1 text-gray-600 shadow-sm border text-xs rounded-md  ${selectedCategory === category ? 'border-blue-500' : ''
                                }`}
                        >
                            <span className={`${categoryIconMap[category].color}`}>
                                {categoryIconMap[category].icon}
                            </span>
                            <span>{category}</span>
                        </button>
                    ))}
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-500 py-10">
                        <Card className="h-[300px] bg-gradient-to-t from-gray-100 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900 flex items-center justify-center">

                            <CardContent className="font-mono text-xs text-center text-gray-500">
                                <div className="flex justify-center items-center mb-4">
                                    <HiCube className="text-2xl text-gray-400" /> {/* Vous pouvez ajuster la taille de l'icône ici */}
                                </div>
                                You don't find what you're looking for? Tell us and maybe we'll add it!
                            </CardContent>

                        </Card>
                    </div>

                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                        {filteredProducts.map((product) => {
                            const timeAgo = formatDistanceStrict(new Date(product.createdAt), new Date(), { addSuffix: true });
                            return (
                                <div
                                    key={product.id}
                                    className='cursor-pointer'
                                    onClick={() => router.push(`/dashboard/marketplace/${product.id}`)}
                                >
                                    <Card className="">
                                        <CardHeader className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md mb-4">
                                            <div className="flex justify-between items-center">
                                                <div className="flex space-x-2">
                                                    <CardTitle className="font-mono text-xs text-gray-500"> <Avatar>
                                                        <AvatarImage src={product.image} className='h-5' />
                                                    </Avatar></CardTitle>
                                                    <div className="w-48"> {/* Définit une largeur fixe de 12rem */}
                                                        <CardTitle className="font-mono text-sm truncate">
                                                            {product.name} /
                                                        </CardTitle>
                                                    </div>

                                                    <CardTitle className="font-mono text-xs text-gray-500">{product.category}</CardTitle>
                                                </div>
                                                <CardTitle className="font-mono text-xs text-gray-500">{timeAgo}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="font-mono text-xs truncate">
                                            {product.description}
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                )}

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
