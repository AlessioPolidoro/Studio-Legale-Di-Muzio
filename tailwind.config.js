/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink:         "#1B1714",
        bg:          "#F4F0E6",
        surface:     "#FBF8F0",
        bordeaux:    "#6B2A2E",
        bordeauxDark:"#501F22",
        brass:       "#B08A3E",
        stone:       "#C9BFAE",
        taupe:       "#6E6557",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1B1714",
            fontFamily: "Inter, system-ui, sans-serif",
          },
        },
      },
    },
  },
  plugins: [],
};
