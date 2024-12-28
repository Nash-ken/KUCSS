import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        background: "hsl(192, 58%, 6%)",
        primary: "hsl(192, 50%, 8%)",
        border: "hsl(192, 31%, 14%)",
        text: "hsl(193, 42%, 71%)",
        "text-muted": "hsl(191, 23%, 53%)",
      },
      screens: {
        desktop: "968px",
      },
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans Variable", "sans-serif"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
