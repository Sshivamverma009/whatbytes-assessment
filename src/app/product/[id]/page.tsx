"use client";

import { products } from "@/components/ProductGrid";
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/lib/features/storeSlice";
import StoreProvider from "@/app/StoreProvider";
import { RootState } from "@/lib/store";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const product = products.find((product) => product.id === id);
    const dispatch = useDispatch();

    const cart = useSelector((state: RootState) => state.store.cart);
    const isInCart = !!cart[id];

    if (!product) return <div>Product not found.</div>;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])

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
                        onClick={() => {
                            if (!isInCart) {
                                dispatch(addItem(product.id));
                            } else {
                                dispatch(removeItem(product.id))
                            }
                        }}
                        className={` max-w-full mt-3 self-center text-white px-4 py-2 rounded text-sm ${!isInCart ? "bg-blue-800" : "bg-red-600"
                    }`}
                    >
                        {!isInCart ? "Add" : "Remove"}
                    </button>
                </div>
            </div>
        </StoreProvider>
    );
}
