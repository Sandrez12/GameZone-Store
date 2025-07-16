import React from "react";

type Props = {
  name: string
  price: number
  image: string
  onAddToCart?: () => void
}

export default function ProductCard({ name, price, image, onAddToCart }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h2 className="mt-2 text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button
        onClick={onAddToCart}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Agregar al carrito
      </button>
    </div>
  )
}
