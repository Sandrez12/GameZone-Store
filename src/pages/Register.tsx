import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate, Link } from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate("/home")
    } catch (err: any) {
      setError("Error al registrarse. Revisa tu correo y contraseña.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Crea tu cuenta</h2>
      <form onSubmit={handleRegister} className="bg-gray-700 p-6 rounded space-y-4 w-full max-w-sm">
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-secondary text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-accent outline-none"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-secondary text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-accent outline-none"
          required
        />
        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded w-full">
          Registrarse
        </button>
        <p className="text-sm text-center text-gray-300 mt-2">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="underline text-blue-300 hover:text-blue-400">
            Inicia sesión aquí
          </Link>
        </p>
      </form>
    </div>
  )
}
