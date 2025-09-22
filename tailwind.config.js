/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#065d28',
        'primary-dark': '#04421d',
        secondary: '#e9741f',
        accent: '#235f83',
        'base-text': '#333333',
        'light-text': '#777777',
        'background': '#ffffff',
        'background-alt': '#f8f9fa',
      },
      fontFamily: {
        // Aquí le decimos a Tailwind que use nuestras nuevas variables de fuente
        heading: ['var(--font-space-grotesk)'],
        body: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
