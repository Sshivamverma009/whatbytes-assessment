"use client";

import { useEffect, useState, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/lib/features/storeSlice";
import { RootState } from "@/lib/store";
import { products } from "@/components/ProductGrid";
import Image from "next/image";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.store.cart);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  if (!hasMounted) return null;
  if (!product) return <div>Product not found.</div>;

  const isInCart = !!cart[product.id];

  return (
    <div className="p-8 flex gap-8 border border-gray-200 shadow-sm">
      <div>
        <Image
          width={220}
          height={220}
          src={product.image}
          alt={product.description}
          className="w-[200px] h-[200px] object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-blue-500 font-bold">${product.price}</p>
        <p className="text-sm mb-2">{product.description}</p>
        <p className="text-xs text-gray-600 mb-4">{product.category}</p>
        <button
          onClick={() =>
            isInCart
              ? dispatch(removeItem(product.id))
              : dispatch(addItem(product.id))
          }
          className={`${
            isInCart ? "bg-red-600" : "bg-blue-800"
          } max-w-full mt-3 self-center text-white px-4 py-2 rounded text-sm`}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
