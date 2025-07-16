/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lola: '#DDCCD0',
        havelock: '#498FD8',
        cranberry: '#D86089',
        tan: '#FB9D5B'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-main': 'linear-gradient(135deg, rgba(73, 143, 216, 0.1), rgba(216, 96, 137, 0.1))',
        'gradient-hover': 'linear-gradient(135deg, rgba(216, 96, 137, 0.2), rgba(251, 157, 91, 0.2))',
        'gradient-text': 'linear-gradient(to right, #498FD8, #D86089, #FB9D5B)',
        'bubble-pattern': "url('/assets/icons/circleai.png')",
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [],
} 