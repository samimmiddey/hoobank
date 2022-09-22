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
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Inter", "sans-serif"],
      },
      width: {
        '90': '90%'
      },
      height: {
        '18': '72px'
      },
      spacing: {
        '18': '72px'
      },
      lineHeight: {
        'perfect': '1.8'
      }
    },
    screens: {
      ss: '350px',
      xs: "500px",
      sm: "650px",
      md: "950px",
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [],
}
