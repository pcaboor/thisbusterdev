'use client';

import React, { useState, useEffect } from 'react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'; // Use this import for consistency
import { formatDistanceStrict } from 'date-fns';
import { useRouter } from 'next/navigation';  // Correct import for routing
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const RandomProducts = () => {
    const [data, setData] = useState<any[]>([]);  // Renamed from 'product' to 'data'
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchRandomProducts = async () => {
            try {
                const response = await fetch('/api/products/random');
                if (!response.ok) throw new Error('Failed to fetch data');
                const products = await response.json();
                setData(products);
                console.log('Fetched random products:', products);
                setIsLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An unknown error occurred'));
                setIsLoading(false);
            }
        };

        fetchRandomProducts();
    }, []);

    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur de chargement: {error.message}</div>;

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {data.map((product) => {  // Updated to 'data' from 'product'
                const timeAgo = formatDistanceStrict(new Date(product.createdAt), new Date(), { addSuffix: true });
                return (
                    <div
                        key={product.id}
                        className='cursor-pointer'
                        onClick={() => router.push(`/dashboard/marketplace/${product.id}`)}
                    >
                        <Card className="w-[400px]">
                            <CardHeader className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md mb-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <CardTitle className="font-mono text-xs text-gray-500">
                                            <Avatar>
                                                <AvatarImage src={product.image} className='h-5' />
                                            </Avatar>
                                        </CardTitle>
                                        <div className="w-48"> {/* Définit une largeur fixe de 12rem */}
                                            <CardTitle className="font-mono text-sm truncate">
                                                {product.name}
                                            </CardTitle>
                                        </div>
                                    </div>
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
    );
};

export default RandomProducts;
