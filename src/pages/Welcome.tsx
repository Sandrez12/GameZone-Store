import React from "react"
import { Link } from "react-router-dom"

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">🎮 Bienvenido a GameZone Store</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Tu tienda gamer definitiva. Encuentra todo lo que necesitas para llevar tu experiencia al siguiente nivel.
      </p>
      <Link
        to="/login"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mb-4"
      >
        Iniciar sesión
      </Link>
      <p className="text-sm">
        ¿No tienes tu cuenta aún?{" "}
        <Link to="/register" className="underline text-blue-400 hover:text-blue-500">
          Regístrate aquí
        </Link>
      </p>
    </div>
  )
}
