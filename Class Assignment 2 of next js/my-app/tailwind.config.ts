import { Open_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['montserrat', 'sans-serif'],
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",}
      },
    },
  },
  plugins: [],
};
export default config;
