// const object0To10px = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
// const object0To50px = { ...Array.from(Array(51)).map((_, i) => `${i}px`) };
// const object0To200px = { ...Array.from(Array(201)).map((_, i) => '0px') };
const object0To400px = { ...Array.from(Array(101)).map((_, i) => `${i * 4}px`) };
const array100To599 = Array.from(Array(500)).map((_, i) => i + 100);
const object400To2396px = array100To599.reduce((o, key) => ({ ...o, [key]: `${key * 4}px` }), {});
const array0To599 = Array.from(Array(600)).map((_, i) => i + 1);
const object1To2396px = array0To599.reduce((o, key) => ({ ...o, [key]: `${key}px` }), {});

module.exports = {
  safelist: [
    // {
    //   pattern: /^(.*)/,
    // },
    {
      pattern: /grid-cols-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /top-(.*)/
    },
    {
      pattern: /decoration-(.*)/,
      variants: ['sm', 'md', 'hover']
    },
    {
      pattern: /border-(.*)/,
      variants: ['sm', 'md', 'hover', 'group-hover', 'focus']
    },
    {
      pattern: /ring-(.*)/,
      variants: ['focus']
    },
    {
      pattern: /divide-(.*)/,
      variants: []
    },
    {
      pattern: /from-(.*)/,
      variants: ['after']
    },
    {
      pattern: /to-(.*)/,
      variants: ['after']
    },
    {
      pattern: /border-(.*)/
    },
    {
      pattern: /scale-(.*)/,
      variants: ['hover']
    },
    {
      pattern: /bg-(.*)/,
      variants: ['hover', 'group-hover', 'after']
    },
    {
      pattern: /outline-(.*)/,
      variants: ['hover', 'group-hover']
    },
    {
      pattern: /text-(.*)/,
      variants: ['sm', 'md', 'hover', 'group-hover', 'marker']
    },
    {
      pattern: /scale-(.*)/,
      variants: ['hover', 'sm', 'md']
    },
    {
      pattern: /h-(.*)/,
      variants: ['sm', 'md', 'after']
    },
    {
      pattern: /w-(.*)/,
      variants: ['sm', 'md', 'after']
    },
    {
      pattern: /pt-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /pb-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /py-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /px-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /ml-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /justify-start|justify-end|justify-center/,
      variants: ['sm', 'md']
    },
    {
      pattern: /max-h-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /max-w-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /items-end/,
      variants: ['sm', 'md']
    },
    {
      pattern: /gap-(.*)/,
      variants: ['sm', 'md']
    },
    {
      pattern: /font-(.*)/
    },
    {
      pattern: /rounded-(.*)/,
      variants: ['sm', 'md']
    }
  ],

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./utility/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        100: '100'
      },
      colors: {
        theme: '#2A2A2A',
        primary: '#5F9EA0',
        yongyong: '#121212',
        gold: '#D7B65D'
      },
      fontFamily: {
        mont: ['Montserrat'],
        pacifico: ['Pacifico'],
        vinasans: ['Vina Sans'],
        caveat: ['Caveat'],
        carter: ['Carter One'],
        special: ['Special Elite'],
        monoton: ['Monoton'],
        'heyboss-system-ui': ['cursive']
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      },
      height: { ...object400To2396px, 'screen-dvh': '100dvh' },
      maxHeight: object400To2396px,
      width: object400To2396px,
      lineHeight: object1To2396px,
      spacing: object0To400px
      // fontSize: px0_100,
      // minWidth: px0_200,
      // minHeight: px0_200,
      // borderWidth: px0_10,
      // textUnderlineOffset: px0_10,
      // borderRadius: px0_100,
      // textIndent: px0_10,
      // divideWidth: px0_10,
      // boxShadow: px0_50,
    },
    screens: {
      // MIN
      sm: '0px',
      // => @media (min-width: 0px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }

      /// MAX
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }

      // 'sm': {'max': '639px'},
      // // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
  darkmode: false
};
