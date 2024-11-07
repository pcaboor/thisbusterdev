'use client';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useEffect, useState } from "react";
import { ArrowRight, BarChart2, Shield, MessageCircle, ShoppingCart, DollarSign } from "lucide-react"; // Importez les icônes nécessaires

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    link: string;
}

const categoryIconMap = {
    "Analytics": { icon: <BarChart2 />, color: "text-blue-500" },
    "Security": { icon: <Shield />, color: "text-red-500" },
    "Messaging": { icon: <MessageCircle />, color: "text-green-500" },
    "E-commerce": { icon: <ShoppingCart />, color: "text-purple-500" },
    "Finance": { icon: <DollarSign />, color: "text-yellow-500" },
};


const ProductFeature = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1); // Page actuelle
    const [totalProducts, setTotalProducts] = useState<number>(0); // Nombre total de produits
    const [totalPages, setTotalPages] = useState<number>(0); // Nombre total de pages

    const productsPerPage = 9; // Nombre de produits par page

    // Fonction pour récupérer les produits depuis l'API
    const fetchProducts = async (page: number) => {
        try {
            const response = await fetch(`/api/products?page=${page}&limit=${productsPerPage}`); // Passer les paramètres de pagination à l'API
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            setProducts(data.products); // Supposons que votre API renvoie un objet avec un tableau de produits et un total
            setTotalProducts(data.total); // Nombre total de produits disponible
            setTotalPages(data.totalPages); // Nombre total de pages
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    // Charger les produits lors du changement de page
    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    // Gérer les états de chargement et d'erreur
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="relative py-4 before:absolute before:inset-0 before:bg-primary/10 before:[mask-image:url(/images/block/waves.svg)] before:[mask-repeat:repeat] before:[mask-size:_64px_32px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background"></div>
            <div className="container relative">
                <h2 className="mb-8 max-w-screen-sm text-balance text-2xl font-semibold lg:text-4xl">
                    Explore our Products
                </h2>

                <div className="z-30 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => {
                        // Récupérer l'icône et la couleur en fonction de la catégorie
                        const { icon, color } = categoryIconMap[product.category] || {};
                        return (
                            <div key={product.id} className="flex flex-col gap-6 rounded-lg border p-6">
                                {/* Icône et couleur de catégorie */}
                                <div className={`text-3xl ${color}`}>
                                    {icon}
                                </div>
                                <h3 className="mt-4 text-base font-medium">{product.name}</h3>
                                <h6 className="mb-2 text-base font-bold">{product.category}</h6>
                                <p className="text-sm text-muted-foreground">{product.description}</p>
                                <a href={product.link} className="flex items-center gap-2 text-sm font-medium">
                                    Learn more <ArrowRight className="w-4" />
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
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

                            {/* Page Number Links */}
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

                            {/* Pagination Ellipsis */}
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
