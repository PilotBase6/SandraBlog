
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: {"min":"0px", "max":"767px"},

      md: {"min":"768px", "max":"1024px"},
      // => @media (min-width: 768px) { ... }

      lg:{"min": "1024px", "max": "2000px"},
      // => @media (min-width: 1024px) { ... }
      xl:{"min":"768px", "max":"2000px"}

    },
    extend: {
      fontFamily:{
        "poppins":['Poppins', "sans-serif"],
      },
    }
    
  },
  variants:{
    scrollSnapType:["responsive"],
  },
  plugins: []
};


