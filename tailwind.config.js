// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Gris oscuro azulado
        secondary: "#1e293b", // Azul más claro
        accent: "#38bdf8", // Cian neón
        redButton: "#ef4444", // Botón rojo
        greenAccent: "#22c55e", // Verde
      },
      fontFamily: {
        gamer: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
}
