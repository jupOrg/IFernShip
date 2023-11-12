/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-left-img': "url('/public/gradient-curve-left.svg')",
        'gradient-right-img': "url('/public/gradient-curve-right.svg')",
      },
      backgroundSize: {
        'gradient-left': '40vmax calc(100% + 25rem)',
        'gradient-right': '65vmax calc(100% + 10rem)',
        'gradient-right-static': '60rem calc(100% + 10rem)',
      },
    },
  },
};
