/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'maghrib': {
          900: '#0a0614',
          800: '#130d2a',
          700: '#1e1040',
          600: '#2d1b5e',
          500: '#3d2478',
        },
        'senja': {
          500: '#e8734a',
          400: '#f0956b',
          300: '#f7b896',
        },
        'gold': {
          400: '#f5c842',
          300: '#fad96a',
          200: '#fdeea0',
          100: '#fef9e0',
        },
        'moon': {
          100: '#fffde8',
          200: '#fef6c2',
          300: '#fce96a',
        }
      },
      fontFamily: {
        'display': ['Cinzel Decorative', 'serif'],
        'arabic': ['Scheherazade New', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'rise': 'rise 1.2s ease-out forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'lantern-swing': 'lanternSwing 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(245, 200, 66, 0.5), 0 0 40px rgba(245, 200, 66, 0.3)' },
          '50%': { textShadow: '0 0 40px rgba(245, 200, 66, 0.9), 0 0 80px rgba(245, 200, 66, 0.6), 0 0 120px rgba(245, 200, 66, 0.3)' },
        },
        rise: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        lanternSwing: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        }
      }
    },
  },
  plugins: [],
};
