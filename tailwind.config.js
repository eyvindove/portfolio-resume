/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      kalam: ['Kalam', 'Montserrat', 'system-ui'],
    },
    extend: {
      keyframes: {
        typing: {
          '0%, 100%': { width: 0 },
          '40%, 60%': { width: '22ch' },
        },
        'blink-caret': {
          '0%': { borderColor: 'transparent' },
          '100%': { borderColor: '#5eead4' }, // teal.300
        },
        wave: {
          '0%': { rotate: 0 },
          '33%': { rotate: '15deg' },
          '66%': { rotate: '-15deg' },
        },
        'slide-left-in': {
          '0%': { left: '100%' },
          '100%': { left: 0 },
        },
      },
      animation: {
        'typing-with-blink-caret':
          'typing 5s steps(23) infinite, blink-caret 500ms steps(40) infinite',
        'hand-wave': 'wave 2s linear infinite',
        'slide-left-in': 'slide-left-in .3s ease-in-out',
      },
    },
  },
  plugins: [],
}
