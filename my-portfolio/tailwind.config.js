/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(180px, orange, transparent 90%)',
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'spin-slow': 'spin 10s linear infinite',
        'slideInRight': 'slideInRight 0.5s ease-out',
      },
      
    },
  },
  plugins: [
   
  ],
};
