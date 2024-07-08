import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'zenon-green': '#19e321',
        'zenon-blue': '#0061EB',
        'zenon-pink': '#F91690',
        'syrius-green': '#00D557',
        'intergalactic-black': '#151515',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
export default config;
