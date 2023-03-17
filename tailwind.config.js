/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,jsx}",
   
  ],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 2s ease-out'
    },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGreen: "rgba(67, 112, 8, 1)",
        veryLightGreen: "rgba(198, 223, 166, 1)",
        veryLightGreen20: "rgba(223, 238, 204, 1)",
        neutral100: "rgba(17, 24, 39, 1)",
        neutral70: "rgba(93, 99, 113, 1)",
        neutral10: "rgba(253, 253, 253, 1)",
        neutral20: "rgba(225, 227, 230, 1)",
        green90: "rgba(38, 68, 0, 1)",
        green80: "rgba(67, 112, 8, 1)",
        green60: "rgba(120, 168, 58, 1)",
        green40: "rgba(172, 206, 128, 1)",
        green30: "rgba(198, 223, 166, 1)",
        green20: "rgba(223, 238, 204, 1)",
        green10: "rgba(249, 252, 245, 1)",
        warning: "rgba(236, 212, 4, 1)",
        postive: "rgba(6, 151, 110, 1)",
        negative: "rgba(232, 76, 61, 1)"

        
      },      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter","sans-serif"],
        mulish: ['"Mulish"',"sans-serif"]
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
      lg: "1100px",
      resgrid : "1500px",
      xl: "1700px",
    },
  },
  plugins: [],
};