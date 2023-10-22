/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': {
          DEFAULT: '#FAFAFA',
          '90': '#EFEFEF',
          dark: '#181C21',
          'dark-90': '#12171B'
        },
        'main-text': {
          DEFAULT: '#333333',
          dark: '#D6D6D6'
        },
        'gray': {
          DEFAULT: '#707070',
          dark: '#B0B0B0',
        },
        'details': '#5784BA',
        'main-title': {
          DEFAULT: '#4A74A5',
          dark: '#8DABD4'
        },
        'subtitle': {
          DEFAULT: '#119897',
          dark: '#FDE047'
        },
        'btn': {
          DEFAULT: '#4A74A5',
          text: '#FFFFFF',
          dark: '#7189A1',
          'dark-text': '#EFEFEF'
        },
        'brackets': {
          DEFAULT: '#666666',
          dark: '#E8E8E8'
        },
        'hover': {
          DEFAULT: '#3A5C8A',
          dark: '#637B91'
        },
        'labels': {
          DEFAULT: 'rgba(0, 0, 0, 0.6)',
          dark: 'rgba(255, 255, 255, 0.7)'
        },
        'shadow': {
          DEFAULT: 'rgba(0, 0, 0, 0.1)',
          dark: 'rgba(240, 240, 240, 0.1)'
        },
        'card-code': {
          DEFAULT: '#F6F2E6',
          dark: '#4E565D'
        },
        'hover-card': {
          DEFAULT: '#ECE6D4',
          dark: '#3D454B'
        },
        'modal-bg': {
          DEFAULT: 'rgba(255, 255, 255, 0.4)',
          dark: 'rgba(0, 0, 0, 0.7)'
        },
        // Nuevo color para el modo light
        'section-light': {
          DEFAULT: '#F9F2E8',  // Arena
          '90': '#E9E1D2'     // Un tono un poco más oscuro para variaciones
        },       
        // Nuevo color para el modo dark
        'section-dark': {
          DEFAULT: '#2B3A4E',  // Un azul oscuro profundo
          '90': '#1F2A3B'     // Un tono un poco más claro para variaciones
        }
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'ubuntu': ['Ubuntu'],
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-wrap-balance': {
          'text-wrap': 'balance'
        },
      }, ['responsive', 'hover'])
    }
  ],
  darkMode: 'class',
}