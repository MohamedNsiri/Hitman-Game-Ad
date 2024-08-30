/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'opacity-25': 'hsl(0, 0%, 80%)',
        'opacity-50': 'rgba(0, 0, 0, 0.5)',
        'opacity-75': 'rgba(0, 0, 0, 0.75)',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito'],
        roboto: ['Roboto Condensed']
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "badass-navy": "#001F3F",
        "light-gray": "#CCCCCC",
        "silver": "#C0C0C0",
        "red-blood": "#B30000",
        "red-laith": "#420D09",
        'navy-light': '#4F5D75',
        'gpt-gray': '#F4F4F4', 
        'navy-dark': '#19232D',
        'cool-gray': "#2B3945"
      },
    },
  },
  variants: {},
  plugins: [],
}