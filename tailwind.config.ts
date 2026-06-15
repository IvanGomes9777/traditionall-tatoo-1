import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        'navy-dark': '#14213a',
        red: '#C1272D',
        gold: '#C9A86A',
        cream: '#F4ECD8',
        cream2: '#ece3cd',
        sepia: '#5C4033',
      },
      fontFamily: {
        display: ['var(--font-alfa)', 'serif'],
        script: ['var(--font-rye)', 'serif'],
        body: ['var(--font-bitter)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        shell: '1180px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        spinStar: {
          to: { transform: 'rotate(360deg)' },
        },
        drop: {
          from: { opacity: '0', transform: 'translateY(-14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%,100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '.45', transform: 'scale(.82) rotate(8deg)' },
        },
        floatUp: {
          from: { opacity: '0', transform: 'translateY(26px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        swayBanner: {
          '0%,100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        spinStar: 'spinStar 9s linear infinite',
        drop: 'drop .6s ease both',
        twinkle: 'twinkle 4s ease-in-out infinite',
        floatUp: 'floatUp 1s ease both',
        swayBanner: 'swayBanner 6s ease-in-out infinite',
        fadeIn: 'fadeIn .2s ease both',
      },
    },
  },
  plugins: [],
};

export default config;
