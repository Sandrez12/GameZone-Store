import { create } from "zustand"

type Product = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

type CartStore = {
  cart: Product[]
  addToCart: (product: Omit<Product, "quantity">) => void
  removeFromCart: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((p) => p.id === product.id)
      if (existing) {
        return {
          cart: state.cart.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        }
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }]
        }
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)
    })),
  increment: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    })),
  decrement: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    }))
}))
