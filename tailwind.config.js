/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "main.css"],
  theme: {
    fontFamily: {
      "outfit-bold": [
        '"Outfit", sans-serif',
        {
          fontVariationSettings: '"wght" 700',
        },
      ],
      "outfit-regular": [
        '"Outfit", sans-serif',
        {
          fontVariationSettings: '"wght" 400',
        },
      ],
      YoungSerif: ["YoungSerif", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
