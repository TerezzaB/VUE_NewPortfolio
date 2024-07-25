/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#a87cff',
        'second-color': '#6e26ff',
        'third-color': '#40ffff',
        'fourth-color': '#ff69b4',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(90deg, var(--main-color), var(--second-color))',
        'gradient-2': 'linear-gradient(90deg, var(--third-color), var(--main-color))',
      },
    },
  },
  plugins: [],
}

