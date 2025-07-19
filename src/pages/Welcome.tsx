import React from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Welcome() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-black flex flex-col justify-center items-center text-white px-4 overflow-hidden">
      {/* Fondo de partículas */}
      <ParticlesBackground />

      {/* Contenido sobre las partículas */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-gamer mb-6 text-accent">
          GAMEZONE STORE
        </h1>
        <p className="text-lg max-w-lg mb-8 mx-auto">
          Bienvenido a tu zona gamer definitiva. PCs, periféricos, accesorios y mucho más.
        </p>
        <Link
          to="/login"
          className="bg-redButton hover:bg-red-600 text-white px-6 py-3 rounded font-bold text-lg transition"
        >
          Iniciar sesión
        </Link>
        <p className="mt-6 text-sm">
          ¿No tienes tu cuenta aún?{" "}
          <Link to="/register" className="text-accent underline hover:text-blue-400">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}
