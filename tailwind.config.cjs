/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        bidafi: {
          "primary": "#ef4444",
          "secondary": "#a8a29e",
          "accent": "#292524",
          "neutral": "#181F2A",
          "base-100": "#F4F4F5",
          "info": "#4E8AE4",
          "success": "#196742",
          "warning": "#f59e0b",
          "error": "#F4534E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
