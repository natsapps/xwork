/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink:   "#111315",
        shell: "#171a1d",
        panel: "#1e2329",
        edge:  "#252c34",
        mist:  "#f0e8d8",
        gold:  "#c9a84c",
        teal:  "#3fada4",
        rust:  "#d96b56",
        sage:  "#5daf8e",
      },
      fontFamily: {
        sans:    ["'Cabinet Grotesk'", "system-ui", "sans-serif"],
        display: ["'Erode'", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(201,168,76,0.08)",
      },
    },
  },
  plugins: [],
};
