/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8B4513",
          secondary: "#bf9678",
          accent: "#FFF5E1",
          neutral: "#ffd7ba",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
