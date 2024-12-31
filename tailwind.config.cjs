/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        terciary: "#0087CD",
        dark: "#0B1223",
        accent:"#EFBB04",
        "stats-yellow": "#e1b323",
        "stats-blue": "#0830aa",
        "stats-grey": "#b0aaaa",
        "stats-green": "#22d83c",
        "stats-red": "#5f0f19",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        back: "url('./src/assets/images/bg.jpg')",
        stats: "url('./src/assets/images/banner-bg.png')",
      },
      spacing: {
        414: "414px",
        761: "761px",
        351: "351px",
      },
      borderRadius: {
        "xl-rounded": "20px",
        "lg-rounded": "10px",
      },
      screens: {
        'tablet': '1023px',
      },
    },
  },
  safelist: [
    'border-stats-yellow',
    'border-stats-green',
  ],
  plugins: [],
};