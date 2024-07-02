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
      width: {
        '200p': '200%',
      },
      colors: {
        customColor: {
          navbar: '#222222',
          black: '#000000',
          orange: '#f45d45',
          white: '#fefefe',
          textGrey: '#a2a2a2',
        },
      }
    },
  },
  plugins: [],
};
export default config;
