/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        backgroundColor: {
          "position:hover": "rgba(0, 0, 0, 0.60)",
        },
      },
    },
  },
  plugins: [],
};
