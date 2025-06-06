/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#ff6347',
        wheat: 'wheat'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#ff6347',
          'secondary': '#f5deb3',
          'accent': '#ff6347',
          'neutral': '#333',
          'base-100': '#ffffff',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
        dark: {
          'primary': '#f5deb3',
          'secondary': '#ff6347',
          'accent': '#f5deb3',
          'neutral': '#ffffff',
          'base-100': '#333333',
          'info': '#66c6ff',
          'success': '#87d039',
          'warning': '#e2d562',
          'error': '#ff6f6f',
        }
      }
    ]
  }
}
