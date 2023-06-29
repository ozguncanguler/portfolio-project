/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#E3E3E3",
        grey: "#B9B9B9",
        black: "#000000",
        blue: "#398CCA",
        "deep-blue": "#245C86",
        "neon-blue": "#52CBBE",
        "navy-blue": "#070D29",
        yellow: "#FDFF00",
        "pale-yellow": "#fdfdb4",
        orange: "#FF5300",
      },
      backgroundImage: (theme) => ({
        "gradient-rainblue":
          "linear-gradient(90deg, #52CBBE 14.53%, #245C86 69.36%, #070D29 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        neonderthaw: ["Neonderthaw"],
      },
      content: {
        logo1: "url('./assets/Logo1.png')",
        logo2: "url('./assets/Logo2.png')",
        logo3: "url('./assets/Logo3.png')",
        photo1: "url('./assets/Photo1.jpeg')",
        photo2: "url('./assets/Photo2.jpeg')",
        video: "url('./assets/Video.mp4')",
        menuicon: "url('./assets/menu-icon.svg')",
        closeicon: "url('./assets/close-icon.svg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
