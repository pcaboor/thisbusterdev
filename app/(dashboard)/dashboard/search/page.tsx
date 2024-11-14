'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import { useState } from "react";

const fetchAPI = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return await response.json();
};

const SearchPage: React.FC = () => {
    const router = useRouter();
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;

    const encodedSearchQuery = encodeURI(searchQuery || '');
    const { data, isLoading } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchAPI);

    // État pour le tri
    const [sortOption, setSortOption] = useState('name');

    if (!data?.products) {
        return null;
    }

    // Fonction de tri
    const sortedProducts = [...data.products].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'date') {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        return 0;
    });

    return (
        <div className="bg-background">
            <div className="flex space-x-2 justify-between">
                <button
                    onClick={() => router.back()}
                    className="mt-4 p-4 rounded-md"
                >
                    ← Go Back
                </button>
                <div className="flex space-x-2">
                    <div className="mb-4">
                        <p className="text-sm text-gray-700">Found {data.products.length} products</p>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setSortOption('name')}
                                className={`text-sm px-4 py-2 rounded-md ${sortOption === 'name' ? 'bg-gray-300' : 'bg-gray-200'}`}
                            >
                                Sort by Name
                            </button>
                            <button
                                onClick={() => setSortOption('date')}
                                className={`text-sm px-4 py-2 rounded-md ${sortOption === 'date' ? 'bg-gray-300' : 'bg-gray-200'}`}
                            >
                                Sort by Date
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {sortedProducts.map((product) => {
                // Définir le temps écoulé pour chaque produit
                const timeAgo = formatDistanceStrict(new Date(product.createdAt), new Date(), { addSuffix: true });

                return (
                    <div key={product.id} className="container">
                        <div className="p-4">
                            <Card className="">
                                <CardHeader className="p-4 dark:bg-gray-900 rounded-md mb-4 bg-gradient-to-tl from-gray-50 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900">
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex space-x-2">
                                            <CardTitle className="font-mono text-sm">{product.name} /</CardTitle>
                                            <CardTitle className="font-mono font-normal text-xs text-gray-500 dark:text-gray-200">{product.category}</CardTitle>
                                            <CardTitle className="font-mono font-normal text-xs text-gray-500 dark:text-gray-200">- {product.type}</CardTitle>
                                            <CardTitle className="font-mono font-normal text-xs text-blue-500 dark:text-blue-500">&gt; {product.language}</CardTitle>
                                        </div>
                                        <CardTitle className="font-mono text-xs font-normal dark:text-gray-200 text-gray-500">{timeAgo}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="font-mono text-xs">
                                    {product.description}
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    {/* Ajouter des éléments ici si nécessaire */}
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SearchPage;
