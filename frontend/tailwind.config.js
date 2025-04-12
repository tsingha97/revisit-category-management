/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
      },
      colors: {
        primary: "#2563EB", // blue-600 alternative
        background: "#F3F4F6", // gray-100 alternative
        card: "#FFFFFF",
        accent: "#10B981", // emerald-500 alternative
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
