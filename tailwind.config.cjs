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
        accent: "#EFBB04",
        "stats-yellow": "#e1b323",
        "stats-blue": "#0830aa",
        "stats-grey": "#b0aaaa",
        "stats-green": "#22d83c",
        "stats-red": "#5f0f19",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        gradient: "gradientAnimation 3s ease infinite",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(45deg, #0B1426 0%,#0B1426 0%, rgba(60, 187, 254, 100) 20%, rgba(55, 164, 244, 0.9) 40%, #0C89F5 45%, #0C89F5 50%, #0A2339 90%, rgba(15, 38, 62, 0.9) 100%, #050410 100%)',
          'detail-about': 'url(/src/assets/icons/detail-about.svg)',
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
          'custom-xl': '1153px',
          'custom-lg': '1024px',
        },
      },
    },
  },
  safelist: [
    'border-stats-yellow',
    'border-stats-green',
  ],
  plugins: [],
};