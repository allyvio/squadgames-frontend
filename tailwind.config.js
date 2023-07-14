/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#9747FF",
        darkPurple: "#8A40F5",
        blue: "#491FC1",
        orange: "#FFA313",
        darkOrange: "#FF6813",
        pink: "#FFB1D2",
        green: "#96D495",
        yellow: "#FFCC4A",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1300px",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        heading: ["Bebas Neue"],
        body: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
