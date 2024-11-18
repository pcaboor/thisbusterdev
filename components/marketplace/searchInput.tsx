'use client';

import { Box, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
};

const SearchInput = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState<string | null>('');
    const router = useRouter();

    const highlightText = (text: string, query: string) => {
        if (!query) return text;

        // Escape special characters in the query to avoid invalid regex syntax
        const escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

        const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <span key={index} className="bg-muted/15 font-semibold text-blue-500">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };


    const { data, error, isLoading } = useSWR(
        searchQuery ? `/api/search?q=${encodeURI(searchQuery)}` : null,
        fetcher
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchQuery && searchQuery.trim()) {
            const encodedSearchQuery = encodeURI(searchQuery);
            router.push(`/dashboard/search?q=${encodedSearchQuery}`);
        }
    };

    const organizeResults = (products: any[]) => {
        const names = products.filter((product) => product.name).slice(0, 10);
        const categories = products.filter((product) => product.category).slice(0, 10);
        const types = products.filter((product) => product.type).slice(0, 10);
        const languages = products.filter((product) => product.language).slice(0, 10);

        return { names, categories, types, languages };
    };

    const results = data && data.products ? organizeResults(data.products) : null;

    return (
        <div className="relative w-2/3">
            <form onSubmit={onSearch} className="flex items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Box className="w-5 h-5 text-gray-400" />
                </div>
                <input
                    value={searchQuery || ''}
                    onChange={(event) => {
                        setSearchQuery(event.target.value);
                        setIsDropdownOpen(true);
                    }}
                    className="pl-10 pr-5 py-1.5 w-full border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none text-sm"
                    placeholder="Search for products or press term + enter to search everything..."
                    style={{ paddingLeft: '2.5rem' }}
                />
                {isLoading && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                    </div>
                )}
            </form>

            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute w-full bg-primary-foreground shadow-lg rounded-md mt-2 z-10 "
                >
                    {results ? (
                        <>
                            <div className="px-4 py-2 font-bold border-b bg-gradient-to-b from-gray-50 via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900">API</div>
                            {results.names.length > 0 ? (
                                results.names.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-sm font-medium ${index !== results.names.length - 1 ? 'border-b' : ''}`}
                                        onClick={() => router.push(`/dashboard/marketplace/${product.id}`)}
                                    >
                                        <div className='text-base font-semibold'>
                                            {highlightText(product.name, searchQuery || '')}
                                        </div>
                                        <div className="font-mono truncate text-sm">
                                            {highlightText(product.description, searchQuery || '')}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-gray-500 text-sm">No names found</div>
                            )}
                        </>
                    ) : (
                        <div className="px-4 py-2 text-gray-500 text-sm">No results found</div>
                    )
                    }
                </div>
            )}
        </div>

    );
};

export default SearchInput;