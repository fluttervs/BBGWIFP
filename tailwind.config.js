export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#fffdf7',
        blush: '#fff6fa',
        petal: '#ffe3ef',
        bubblegum: '#ff7fae',
        cherry: '#e05286',
        grape: '#a882f5',
        lilac: '#efe6ff',
        mint: '#9fe8c6',
        sky: '#bfe4ff',
        butter: '#ffe6a3',
        cocoa: '#5b3a50',
        mocha: '#8a6379',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'ui-rounded', 'system-ui', 'sans-serif'],
        body: ['Quicksand', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        cute: '0 18px 40px -18px rgba(224, 82, 134, 0.45)',
        sticker: '0 10px 0 -4px rgba(255, 127, 174, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        float: 'float 5s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'float-slow': 'float 7.5s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        wiggle: 'wiggle 4s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        bob: 'bob 2s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        marquee: 'marquee 26s linear infinite',
        'marquee-reverse': 'marquee-reverse 26s linear infinite',
      },
    },
  },
}
