/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        marcellus: ["var(--font-marcellus)", "serif"],
        merriweather: ["var(--font-merriweather)", "serif"],
        lora: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
