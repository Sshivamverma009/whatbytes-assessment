"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "@/lib/features/storeSlice";
import { RootState } from "@/lib/store";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ItemPayload {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export default function Card({ product }: { product: ItemPayload }) {
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

  const isInCart = !!cart[product.id];

  return (
    <div className="border border-gray-200 flex flex-col align-middle rounded-lg p-4 font-500 bg-white">
      <div className="flex justify-center mb-3">
        <Link href={`/product/${product.id}`} className="cursor-pointer">
          <Image
            width={220}
            height={220}
            src={product.image}
            alt={product.description}
            className="w-[200px] h-[200px] object-cover"
          />
        </Link>
      </div>
      <h3 className="text-lg mb-1">{product.title}</h3>
      <h3 className="text-gray-700 font-medium mb-2">${product.price}</h3>
      <button
        onClick={() => {
          if (!isInCart) {
            dispatch(addItem(product.id));
          } else {
            dispatch(removeItem(product.id));
          }
        }}
        className={`bg-blue-800 max-w-full mt-3 self-center text-white px-4 py-2 rounded text-sm ${
          isInCart ? "opacity-50" : "hover:bg-blue-900"
        }`}
      >
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
