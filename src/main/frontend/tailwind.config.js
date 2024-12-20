/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../resources/templates/**/*.html", // Rutas a las plantillas Thymeleaf (.html)
    "../resources/static/**/*.{js,css}", // Archivos estáticos, como JS y CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
