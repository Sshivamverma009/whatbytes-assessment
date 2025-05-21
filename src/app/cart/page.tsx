"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Card from "@/components/Card";
import { products } from "@/components/ProductGrid";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.store.cart);

  const cartProducts = products.filter(
    (product) => typeof product.id === "string" && cart.hasOwnProperty(product.id)
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartProducts.map((product) => (
            <li key={product.id}>
              <Card product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
