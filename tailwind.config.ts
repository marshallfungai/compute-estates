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
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-dark-green': {
          DEFAULT: '#0A3622', // Very dark green
          50: '#E6F0EB',
          100: '#C2DAD0',
          200: '#9FC4B5',
          300: '#7BAE9A',
          400: '#57987F',
          500: '#3D6D5B',
          600: '#2A4C3F',
          700: '#1B3128',
          800: '#0D1814',
          900: '#040807',
          950: '#020403',
        },
      },
    },
  },
  plugins: [],
};
export default config;
