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
        chesnaGrotesk: ["var(--font-chesnaGrotesk)", "serif"],
      },
      colors: {
        "custom-blue": "#2A3143",
        "custom-blue-light": "#3E465A",
        "custom-blue-dark": "#1B2130",
        "custom-beige": "#E5C6A2",
        "custom-beige-light": "#F2D8BA",
        "custom-beige-dark": "#C8A27F",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
  ],
};
