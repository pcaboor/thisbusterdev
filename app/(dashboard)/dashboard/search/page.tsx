'use client'

import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr"

const fetchAPI = async (url: string) => {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return await response.json();
}

const SearchPage: React.FC = () => {
    const router = useRouter();

    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;


    const encodedSearchQuery = encodeURI(searchQuery || '');

    const { data, isLoading } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchAPI);

    // if (!encodedSearchQuery) {
    //     router.push("/");
    //   }

    //   if (isLoading) {
    //     return <Spinner />;
    //   }

    if (!data?.products) {
        return null;
    }


    console.log("t", data);

    return (
        <>
            <button
                onClick={() => router.back()}
                className="mt-4 py-1 rounded-md"
            >
                ← Go Back
            </button>
            {data.products.map((product) => (
                <div key={product.id}>


                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <img src={product.image} alt={product.name} />

                    <p>{product.type}</p>
                    <p>Added: {product.createdAt}</p>
                    <p>Category: {product.category}</p>
                    <a href={product.link}>Visit the Product</a>
                </div>
            ))}
        </>
    );
};

export default SearchPage;