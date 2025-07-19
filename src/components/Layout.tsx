import React from "react"
import { Link } from "react-router-dom"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-primary text-white font-gamer">
      <header className="bg-black bg-opacity-80 px-8 py-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl text-accent font-bold">🎮 GameZone</h1>
        <nav className="flex gap-4 text-sm">
          <Link to="/home" className="hover:text-accent">Inicio</Link>
          <Link to="/cart" className="hover:text-accent">Carrito</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
