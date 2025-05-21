"use client";

import { products } from "@/components/ProductGrid";
import { use } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/storeSlice";
import StoreProvider from "@/app/StoreProvider";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const product = products.find((product) => product.id === id);
    const dispatch = useDispatch();

    if (!product) return <div>Product not found.</div>;

    return (
        <StoreProvider>
        <div className="p-8 flex gap-8 border border-gray-200 shadow-sm">
            <div >
                <img src={product.image} alt={product.title} className="w-80 object-contain" />
            </div>
            <div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-blue-500 font-bold">${product.price}</p>
                <p className="text-sm mb-2">{product.description}</p>
                <p className="text-xs text-gray-600 mb-4">{product.category}</p>
                <button
                    onClick={() =>
                        dispatch(
                            addItem(product.id)
                        )
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
                >
                    Add to Cart
                </button>
            </div>
        </div>
        </StoreProvider>
    );
}
