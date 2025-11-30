import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const gold = {
  primary: '#D4AF37',
  dark: '#AA8C2C',
  light: '#FFD700',
  accent: '#FFC107'
};

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold,
        slate: {
          925: '#0F0F0F',
          850: '#1A1A1A',
          775: '#2D2D2D'
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['Space Grotesk', ...fontFamily.sans]
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at 30% 30%, rgba(212,175,55,0.3), transparent)',
        'gold-linear': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #AA8C2C 100%)',
        'onyx-gold': 'linear-gradient(135deg, #0F0F0F 0%, #2D2D2D 50%, #D4AF37 100%)'
      },
      boxShadow: {
        glow: '0 0 30px rgba(212, 175, 55, 0.35)',
        card: '0 20px 45px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')]
};

export default config;
