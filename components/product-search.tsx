import React from "react";
import { Search } from "lucide-react";

interface ProductSearchProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProductSearch = ({ value, onChange }: ProductSearchProps) => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
                type="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Rechercher un produit..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
};