import React from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica real de registro
    navigate("/home")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Crea tu cuenta</h2>
      <form onSubmit={handleRegister} className="bg-gray-700 p-6 rounded space-y-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full p-2 rounded bg-gray-600 text-white"
          required
        />
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
        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded w-full">
          Registrarse
        </button>
      </form>
    </div>
  )
}
