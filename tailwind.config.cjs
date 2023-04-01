/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {},
    lineHeight: {},
    minHeight: {
      calc: 'calc(100vh - 45px)',
      leftBarCalc: 'calc(100vh - 100px)',
    },
    maxHeight: {
      calc: 'calc(100vh - 45px)',
    },
    extend: {
      spacing: {},
      fontSize: {
        sm: '12px',
        m: '14px',
        classic: '16px',
        l: '18px',
        xl: '21px',
        xxl: '24px',
        lg: '36px',
      },
      fontFamily: {},
      lineHeight: {
        sm: '18px',
        m: '20px',
        classic: '22px',
        l: '24px',
        xl: '28px',
        xxl: '32px',
        lg: '46px',
      },
      backgroundColor: {
        lightBlue: '#d6e4eb',
        bgLightBlue: '#e8f1f5',
        darkBlue: '#004282',
      },
      borderColor: {},
      colors: {
        white: 'white',
        black: 'black',
      },
    },
  },
  plugins: [],
};
