module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./atoms/**/*.{js,ts,jsx,tsx}",
    "./molecules/**/*.{js,ts,jsx,tsx}",
    "./organisms/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue-color': '#031434',
        'primaryBlue': '#0A74DC',
        'border-color': '#A4A7B74D',
        'text-color-3': '#B0B9C8',
        'text-color-1': '#0B2253',
      },
    },
  },
  plugins: [],
}