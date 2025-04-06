import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#020617',
          light: '#f8f9fa'
        },
        accent: {
          blue: '#be185d', // pink-700
          magenta: '#d946ef'
        },
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%"},
        }
      },
      animation: {
        gradient: "gradient 6s linear infinite"
      },
    }
  },
  plugins: [],
} satisfies Config