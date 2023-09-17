/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'biru-lantang': '#163870',
        'kuning-lantang':'#FFCA17',
        'putih-lantang': '#EFEFEF',
        'biru-coba':'#145F87',
        'kuning-ring':'##FF930A'
      },
      maxHeight:{
        'logo': '116px'
      },
      height:{
        'logo': '116px',
        'divider-nav':'38px',
      },
      width:{
        'logo':'204px',
        'divider-nav':'2px'
      },
      margin:{
        'logo-kiri':'2.38rem',
        'logo-atas':'1.81rem',
        'divider-atas':'4.25rem',
        'divider-bawah':'2.44rem',
        'menu-nav-atas':'4.69rem',
        'menu-nav-bawah':'3.31rem',
        
      },
      fontFamily:{
        'Helvetica': 'Helvetica',
      },
      spacing:{
        '1.38rem':'1.38rem',
        '2.19rem':'2.19rem',
        '39.8%':'39.8%',
        '50%':'50%',
        '40%':'40%',
        '30%':'30%',
        '15%':'15%'
      }
    },
  },
  plugins: [],
}

