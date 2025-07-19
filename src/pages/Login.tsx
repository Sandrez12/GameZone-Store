import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/home")
    } catch (err: any) {
      setError("Correo o contraseña incorrectos")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded space-y-4 w-full max-w-sm">
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          className="w-full p-3 rounded bg-secondary text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-accent outline-none"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-3 rounded bg-secondary text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-accent outline-none"
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
