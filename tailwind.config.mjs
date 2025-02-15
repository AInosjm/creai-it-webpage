/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        sky: "#38BDF8",
        skyDark: "#0284C7",
        charcoal: "#374151",
        offWhite: "#F9FAFB",
        accent: "#4F46E5"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(3,16,52,0.8) 100%)",
        "accent-gradient": "linear-gradient(135deg, #4F46E5, #818CF8)"
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"]
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards"
      }
    },
  },
  plugins: [],
}
