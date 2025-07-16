import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica real de autenticación
    navigate("/home")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded space-y-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-2 rounded bg-gray-600 text-white"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 rounded bg-gray-600 text-white"
          required
        />
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded w-full">
          Entrar
        </button>
        <p className="text-sm text-center">
          ¿No tienes tu cuenta aún?{" "}
          <Link to="/register" className="underline text-blue-300">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  )
}
