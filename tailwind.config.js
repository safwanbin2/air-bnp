/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // theme: {
  //   colors: {
  //     'primary': '#ff385c',
  //     'gc': '#717171',
  //     'bc': '#383838',
  //     'base-100': "#ffffff"
  //   }
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff385c",
          "gc": "#717171",
          "bc": "#383838",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}

