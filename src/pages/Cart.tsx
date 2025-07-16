import { useCartStore } from "../store/cart"
import React from "react";

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  const increment = useCartStore((state) => state.increment)
  const decrement = useCartStore((state) => state.decrement)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Carrito de compras</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">El carrito está vacío.</p>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto">
          {cart.map((item) => (
            <div key={item.id} className="bg-white shadow p-4 rounded flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-lg">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  )
}
