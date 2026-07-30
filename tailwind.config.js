/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#f5efe6',
          100: '#e8d9c4',
          200: '#d4b896',
          300: '#c09468',
          400: '#b07040',
          500: '#8a5530',
          600: '#6e4025',
          700: '#4e2c18',
          800: '#2a1810',
          900: '#1a0f0a',
          950: '#0d0705',
        },
        amber: {
          gold: '#c9974a',
          light: '#e8b96a',
          dark: '#9a6e2e',
          muted: '#b8965a',
        },
        cream: {
          DEFAULT: '#f5efe6',
          dark: '#e8d9c4',
          muted: '#c8b99a',
        },
        charcoal: {
          DEFAULT: '#2a1f1a',
          light: '#3d2e26',
          dark: '#1a1210',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1.05' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '0.95' }],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
