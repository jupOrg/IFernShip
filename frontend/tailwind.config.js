/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-left-img": "url('/gradient-curve-left.svg')",
        "gradient-right-img": "url('/gradient-curve-right.svg')",
      },
      backgroundSize: {
        "gradient-left": "50vmax 100%",
        "gradient-left-static": "10rem 100%",
        "gradient-right": "65vmax calc(100% + 10rem)",
        "gradient-right-static": "60rem calc(100% + 10rem)",
      },
      screens: {
        "2xl": "1536px",
        "4xl": "2000px",
      },
    },
  },
};
