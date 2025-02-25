/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // This makes sure Tailwind works in all your React files
    ],
    theme: {
      extend: {
        screens: {
          'mb': { max: '793px' }, 
          'tb': { min: '831px', max: '1024' },
        },
      },
    },
    plugins: [],
  };
  