/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    colors: {
      dark: "hsl(229, 25%, 31%)",
      score: "hsl(229, 64%, 46%)",
      header: "hsl(217, 16%, 45%)",
      scissors_from: "hsl(39, 89%, 49%)",
      scissors_to: "hsl(40, 84%, 53%)",
      paper_from: "hsl(230, 89%, 62%)",
      paper_to: "hsl(230, 89%, 65%)",
      rock_from: "hsl(349, 71%, 52%)",
      rock_to: "hsl(349, 70%, 56%)",
      lizard_from: "hsl(261, 73%, 60%)",
      lizard_to: "hsl(261, 72%, 63%)",
      cyan_from: "hsl(189, 59%, 53%)",
      cyan_to: "hsl(189, 58%, 57%)",
      background_from: "hsl(214, 47%, 23%)",
      background_to: "hsl(237, 49%, 15%)",
      white: "#FFFFFF",
      black: "#000000",
    },
    screens: {
      mobile: "375px",
      desktop: "1366px",
    },

    extend: {
      keyframes: {
        showUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        showUp: "showUp 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
