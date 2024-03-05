/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'mobile': '200px',
      'tablet': '800px',
      'desktop': '1280px'
    },
    colors: {
      'light-gray': 'var(--light-gray)',
      'dark-blue': 'var(--dark-blue)',
      'main-blue': 'var(--main-blue)',
      'light-blue': 'var(--light-blue)',
      'lightest-blue': 'var(--lightest-blue)',
      'light-orange': 'var(--light-orange)',
      'dark-orange': 'var(--dark-orange)',
      'white': 'var(--white)',
      'black': 'var(--black)'
    },
    extend: {},
  },
  plugins: [],
}
