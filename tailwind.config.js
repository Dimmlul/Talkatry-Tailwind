import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./storage/framework/views/*.php",
    "./resources/**/*.js",
    "./src/**/*.{html,js}",
    "./public/**/*.html",
    "**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        satu: "#028174",
        dua: "#0ab68b",
        tiga: "#92de8b",
        empat: "#ffe3b3",
        putih: "#f7f7f7",
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "cyberpunk", "dim", "dracula"],
  },
};
