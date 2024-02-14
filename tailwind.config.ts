import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        sidebar: "300px auto",
      },
      gridTemplateRows: {
        header: "64px auto",
      },
      keyframes: {
        spins: {
          "0%": { transform: "rotate(0turn)" },
          "100%": { transform: "rotate(1turn)" },
        },
      },
      animation: {
        spins: "spins 300ms ease-in-out",
      },
      loader: {
        "pointer-events": "none",
        width: "30px",
        height: "30px",
        "border-radius": "50%",
        border: "3px solid transparent",
        "border-top-color": "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
