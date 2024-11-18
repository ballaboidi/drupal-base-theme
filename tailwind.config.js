/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html.twig', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['proxima-nova', 'helvetica', 'sans-serif']
      },
      fontSize: {
      },
      colors: {
        'primary': '#32A7A1',
        'turquoise': '#32A7A1',
        'red': '#E7533A',
        'black': '#393634',
      },
      screens: {
        '2xl': '1660px',
      }
    }
  }
}
