/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yeezy_regular: ["YEEZY-REGULAR", "cursive"],
        yeezy_light: ["YEEZY-LIGHT", "cursive"],
        yeezy_heavy: ["YEEZY-HEAVY", "cursive"],
        yeezy_bold: ["YEEZY-BOLD", "cursive"],
        yeezy_mono: ["YEEZY-MONO", "cursive"],
        liberation_mono: ["LIB-REG", "cursive"],
        liberation_bold: ["LIB-BOLD", "cursive"],
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar-hide"),
    require("daisyui"),

    // add this to your plugins
  ],
};
