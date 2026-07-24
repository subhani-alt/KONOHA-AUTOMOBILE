/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#050505',
          light: '#0A0A0A',
          card: '#111111',
          border: '#1E1E1E',
        },
        copper: {
          light: '#E59B73',
          DEFAULT: '#C87D55',
          dark: '#A65F38',
        },
        gold: {
          light: '#F2D785',
          DEFAULT: '#D4AF37',
          dark: '#B39124',
        },
        titanium: {
          light: '#E2E8F0',
          DEFAULT: '#C0C0C0',
          dark: '#8A94A6',
        },
      },
      fontFamily: {
        brand: ['Syncopate', 'Orbitron', 'sans-serif'],
        signature: ['Alex Brush', 'cursive'],
        cinematic: ['Orbitron', 'Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-copper': 'linear-gradient(135deg, #C87D55 0%, #D4AF37 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.95) 100%)',
        'glass-pattern': 'radial-gradient(circle at 50% 50%, rgba(200, 125, 85, 0.08) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
