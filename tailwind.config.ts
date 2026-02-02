import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0b7845',
          dark: '#095d36',
          light: '#0e8a52',
        },
        secondary: {
          DEFAULT: '#FFD700',
          dark: '#e6c54f',
        },
        cream: '#fbfbee',
        'dark-text': '#002309',
        'brand-teal': {
          DEFAULT: '#0b5d6f',
          dark: '#004f5d',
          light: '#0d7a8e',
        },
        'brand-orange': {
          DEFAULT: '#ff5722',
          dark: '#e64a19',
          light: '#ff6f43',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
