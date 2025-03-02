/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0ef',
        secondary: '#ff004f',
        dark: {
          100: '#020224',
          200: '#02021c',
          300: '#0a0a2e',
        }
      },
      animation: {
        'skill-progress': 'progress 2s ease-in-out forwards',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress)' },
        },
      },
    },
  },
  plugins: [],
};