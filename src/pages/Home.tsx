import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import { useCartStore } from "../store/cart"
import React from "react";

export default function Home() {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Tienda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}
