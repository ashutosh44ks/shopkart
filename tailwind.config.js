/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "540px",
      ...require("tailwindcss/defaultConfig").theme.screens,
    }
  },
  plugins: [],
};
