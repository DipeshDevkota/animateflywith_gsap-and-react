/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      spacing: {
        '5vw': '5vw',
        '60vh': '60vh',
        '0.8vw': '0.8vw',
      },
      zIndex: {
        '9': '9',
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      inset: {
        '-10%': '-10%',
      },
      colors: {
        blue: "#2997FF",
        customBlue: '#000415',
        customBlack: "#151619",
        customnone: "#00020E",
        customviolet:"#1D3461",
        oxford:"#0A1128",
        lol:"#C0C0C0",
        green:"#253B39",
        makep:"#3A4E4C",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
       
      },
      variants: {
        extend: {
          backgroundColor: ['hover'], // Ensure hover background color change is enabled
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        skillAnimation: 'skillAnimation 2s forwards', // Added custom animation
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        skillAnimation: { // Added keyframes for skillAnimation
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
