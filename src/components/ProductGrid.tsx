"use client"
import { useSelector } from "react-redux";
import Card from "./Card"
import type { RootState } from "@/lib/store";

export const products = [
  {
    id: "p1",
    title: "Wireless Headphones",
    description: "High-quality over-ear wireless headphones with noise cancellation.",
    image: "/headphone.png",
    price: 129.99,
    quantity: 20,
    category: "Electronics"
  },
  {
    id: "p2",
    title: "Smart Watch",
    description: "Water-resistant smart watch with health and fitness tracking.",
    image: "/smartwatch.png",
    price: 89.99,
    quantity: 15,
    category: "Electronics"
  },
  {
    id: "p3",
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality and battery life.",
    image: "https://example.com/images/speaker.jpg",
    price: 45.00,
    quantity: 35,
    category: "Home"
  },
  {
    id: "p4",
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable DPI and RGB lighting.",
    image: "https://example.com/images/gaming-mouse.jpg",
    price: 39.99,
    quantity: 50,
    category: "Electronics"
  },
  {
    id: "p5",
    title: "Mechanical Keyboard",
    description: "Compact mechanical keyboard with tactile switches and backlight.",
    image: "https://example.com/images/keyboard.jpg",
    price: 74.99,
    quantity: 25,
    category: "Accessories"
  }
];


export default function ProductGrid() {
  const category = useSelector((state: RootState) => state.store.category)
  const price = useSelector((state : RootState) => state.store.price)
  const cart = useSelector((state : RootState) => state.store.cart);
  console.log(cart);
  return (
    <div className="">
      <h1 className="font-bold text-2xl mb-3">Product Listing</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          products
            .filter(product => category === "All" || product.category === category)
            .filter(product => product.price <= price)
            .map(product => (
              <li key={product.id}>
                <Card product={product} />
              </li>
            ))

        }
      </ul>
    </div>
  )
}
