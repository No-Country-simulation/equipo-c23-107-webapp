/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gris: '#737072',
        azulOscuro: '#5F95D7',
        azulClaro: '#A0C3EE',
        celesteClaro: '#C1DDFF',
        amarilloOscuro: '#FDB900',
        amarilloClaro: '#FFEEC1',
        amarilloLogo: '#F6E77C',
        cremaClaro: '#FFFAED',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
