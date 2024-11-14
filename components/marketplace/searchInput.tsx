'use client'

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
};

const SearchInput = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState<string | null>("");
    const [searchType, setSearchType] = useState("name");
    const router = useRouter();

    // Utilisation de SWR pour obtenir les résultats de recherche
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
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchQuery && searchQuery.trim()) {
            const encodedSearchQuery = encodeURI(searchQuery);
            router.push(`/dashboard/search?q=${encodedSearchQuery}`);
        }
    };

    return (
        <div className="relative w-2/3">
            <form onSubmit={onSearch} className="flex justify-center items-center">
                <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="mr-2 px-3 py-1 rounded bg-zinc-800 text-zinc-200"
                >
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                    <option value="type">Type</option>
                </select>
                <input
                    value={searchQuery || ""}
                    onChange={(event) => {
                        setSearchQuery(event.target.value);
                        setIsDropdownOpen(true);
                    }}
                    className="px-5 py-1 w-full sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
                    placeholder={`Search by ${searchType}`}
                />
            </form>

            {/* Menu déroulant pour les résultats de recherche */}
            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute w-full bg-secondary shadow-md rounded-md mt-2 z-10"
                >
                    {isLoading ? (
                        <div className="px-4 py-2 text-gray-500">Loading...</div>
                    ) : error ? (
                        <div className="px-4 py-2 text-red-500">Error loading data</div>
                    ) : data && data.products ? (
                        data.products.slice(0, 10).map((product: any) => (
                            <div
                                key={product.id}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium"
                                onClick={() => router.push(`/product/${product.id}`)}
                            >
                                {product.name} - {product.category} - {product.type}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-gray-500">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;
