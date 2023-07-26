/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mali': ['"Mali"', 'cursive'],
      'montserrat': ['"Montserrat"', 'sans-serif']
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '0.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: { 
      boxShadow: {
        'rectanlge': '0px 30px 30px 0px rgba(0, 0, 0, 0.05)',
        'options-values': '0px 9.733498573303223px 9.733498573303223px 0px #B4D8F4',
        'success': '0px 15px 30px rgba(82, 225, 201, 0.1), 0px 30px 40px rgba(82, 225, 201, 0.3)',
        'error': '0px 15px 30px rgba(255, 124, 128, 0.1), 0px 30px 40px rgba(255, 124, 128, 0.3)',
      },
      keyframes: {
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0,   },
          '100%': { transform: 'translateX(0)', opacity: 1,    },
        },
        fadein: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '25%': { opacity: 0, transform: 'translateX(-75%)' },
          '50%': { opacity: 0, transform: 'translateX(-50%)' },
          '75%': { opacity: 0, transform: 'translateX(-25%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        }, 
      },
      animation: {
        'slide-left': 'slide-in-from-left 1s ease-in forwards',
        'fadein': 'fadein 0.4s ease-out forwards',
      },
    },
  },
  plugins: [
    
  ],
}

