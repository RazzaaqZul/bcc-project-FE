/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGreen: "rgba(67, 112, 8, 1)",
        veryLightGreen: "rgba(198, 223, 166, 1)",
        veryLightGreen20: "rgba(223, 238, 204, 1)"
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter","sans-serif"]
      },
      backgroundImage: {
        'leaf-pattern': "url('./assets/leafBackground.svg')",
        'gradient-green' : 'linear-gradient(258.29deg, #5E9319 -1.74%, #264400 96.29%)',
        gradientWhiteLR: "linear-gradient(90deg, rgba(255,255,255,0.21621148459383754) 0%, rgba(255,255,255,1) 20%, rgba(241,241,241,1) 80%, rgba(255,255,255,0.21621148459383754) 100%);"

      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};