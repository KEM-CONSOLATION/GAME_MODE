/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4F7FF21",
        secondary: "#FCE2E2",
        border: "#FA5045",
        TextPrimary: "#333333",
        TextSecondary: "#616161",
      },
    },
  },
  plugins: [],
};
