"use client";
import Card from "@/components/Card";
import {products} from "@/components/ProductGrid"
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Cart() {
  const [cart, setCart] = useState<typeof products>([]);
  const cartItems = useSelector((state:RootState) => state.store.cart);
  useEffect(() => {
    const ids= Object.keys(cartItems);
    const response = products.filter(product => ids.includes(product.id));
    setCart(response)
  }, [])
  return(
    <div className="max-w-xl p-6">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart
                .map(product => (
                  <li key={product.id}>
                    <Card product={product} />
                  </li>
                ))}
            </ul>
    </div>
  )
}
