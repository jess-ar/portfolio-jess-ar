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
        muted: "#10b981",
        "stats-yellow": "#e1b323",
        "stats-blue": "#0830aa",
        "stats-blue-light": "#56a4e4",
        "stats-grey": "#b0aaaa",
        "stats-green": "#22d83c",
        "stats-red": "#5f0f19",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        gradient: "gradientAnimation 3s ease infinite",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        "shimmer-move": "shimmer-move var(--speed, 5s) linear infinite",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "spin-around": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "shimmer-move": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #0B1426 0%,#0B1426 0%, rgba(60, 187, 254, 100) 20%, rgba(55, 164, 244, 0.9) 40%, #0C89F5 45%, #0C89F5 50%, #0A2339 90%, rgba(15, 38, 62, 0.9) 100%, #050410 100%)",
        "detail-about": "url(/src/assets/icons/detail-about.svg)",
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
        'xs': '540px', 
        'tablet-mid': { min: '540px', max: '767px' },
        'sm': '768px',
        "md": "1024px",
        "lg": "1280px",
        "xl": "1440px",
        "xxl": "1920px",
        "xxxl": "2560px",
      },

    },
  },
  safelist: [
    "border-stats-yellow",
    "border-stats-blue",
    "border-stats-grey",
    "border-stats-green",
    "border-stats-red",
    "gradient-button-default",
    "gradient-button-default:hover",
    "gradient-button-variant",
    "gradient-button-variant:hover",
    "gradient-button-neutral",
    "gradient-button-neutral:hover",
    "bg-terciary/10",
    "border-terciary/30",
    "text-terciary",
    "bg-accent/10",
    "border-accent/30",
    "text-accent",
    "bg-stats-green/10",
    "border-stats-green/30",
    "text-stats-green",
  ],
  plugins: [],
};
