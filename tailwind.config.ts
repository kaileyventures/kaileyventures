import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Future dark mode ke liye class-based setup
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        brand: { 900: '#0a0a0a', 800: '#1a1a1a', 500: '#737373', 100: '#f5f5f5' }
      },
      animation: {
        'grid-slow': 'grid-pan 15s linear infinite',
        'grid-fast': 'grid-pan 5s linear infinite',
      },
      keyframes: {
        'grid-pan': {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '4rem 4rem' }
        }
      }
    },
  },
  plugins: [],
}
export default config;