/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d7f0ff',
          200: '#b6e4ff',
          300: '#85d2ff',
          400: '#4db8ff',
          500: '#2196f3',
          600: '#1976d2',
          700: '#1557a1',
          800: '#123f78',
          900: '#0f335f'
        }
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        'radial-fade': 'radial-gradient(100% 100% at 50% 0%, rgba(33,150,243,0.15) 0%, rgba(33,150,243,0) 60%)'
      }
    },
  },
  plugins: [],
}


