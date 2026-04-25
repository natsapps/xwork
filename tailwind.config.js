/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111315",
        shell: "#171a1d",
        panel: "#1f252b",
        mist: "#f1eadc",
        gold: "#d4af6a",
        teal: "#4eb7ad",
        rust: "#de6b56",
        ember: "#9a3428"
      },
      boxShadow: {
        glow: "0 24px 64px rgba(0, 0, 0, 0.28)"
      },
      fontFamily: {
        sans: ["'Manrope'", "system-ui", "sans-serif"],
        display: ["'Fraunces'", "Georgia", "serif"]
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
