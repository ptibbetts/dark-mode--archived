module.exports = {
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        900: '#1A1D22',
        800: '#2A2F36',
        700: '#2D3748',
        600: '#718096',
        500: '#A0AEC0',
        400: '#CBD5E0',
        300: '#E2E8F0',
        200: '#EDF2F7',
        100: '#F7FAFC'
      }
    },
  },
  variants: {
    backgroundColor: ['dark'],
    borderColor: ['dark'],
    textColor: ['dark', 'visited']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
