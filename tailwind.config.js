/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    extend: {
      boxShadow: {
        sm2: "0px 40px 70px -10px rgba(0, 0, 0, 0.08)"
      },
      colors: {
        primary: "#F86061",
        black: "#2E2E2E"
      },
      screens: {
        xl: "1170px"
      },
      container: {
        center: true
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
