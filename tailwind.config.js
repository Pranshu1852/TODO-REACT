/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "autofill-500": 'repeat(auto-fill, minmax(500px, 1fr))',
        "autofill-250": 'repeat(auto-fill, minmax(250px, 1fr))'
      },
      backgroundImage:{
        "todo-60": "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(https://t4.ftcdn.net/jpg/04/15/42/27/360_F_415422702_Rkojk31mAW6my2wdAZnWL8jtvY1aCErU.jpg)",
        "todo-100": "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(https://t4.ftcdn.net/jpg/04/15/42/27/360_F_415422702_Rkojk31mAW6my2wdAZnWL8jtvY1aCErU.jpg)"
      }
    },
  },
  plugins: [],
}