/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',  // 512px
        144: '36rem',  // 576px
        160: '40rem',  // 640px
        // Add any custom size you need
      },
    },
  },
  plugins: [],
};
