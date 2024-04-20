/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "main.css"],
  theme: {
    fontFamily: {
      "outfit-regular": [
        '"Outfit", sans-serif',
        {
          fontVariationSettings: '"wght" 400',
        },
      ],
      "outfit-semi-bold": [
        '"Outfit", sans-serif',
        {
          fontVariationSettings: '"wght" 600',
        },
      ],
      "outfit-bold": [
        '"Outfit", sans-serif',
        {
          fontVariationSettings: '"wght" 700',
        },
      ],
      YoungSerif: ['"YoungSerif", serif'],
    },
    colors: {
      // Primary Colors
      Nutmeg: "hsl(14, 45%, 36%)",
      DarkRaspberry: "hsl(332, 51%, 32%)",
      //Neutral Colors
      White: "hsl(0, 0%, 100%)",
      RoseWhite: "hsl(330, 100%, 98%)",
      Eggshell: "hsl(30, 54%, 90%)",
      LightGrey: "hsl(30, 18%, 87%)",
      WengeBrown: "hsl(30, 10%, 34%)",
      DarkCharcoal: "hsl(24, 5%, 18%)",
    },
    extend: {},
  },
  plugins: [],
};
