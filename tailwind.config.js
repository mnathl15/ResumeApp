module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: (theme) => ({
        "2-row": "1 0 50%",
      }),
      colors: {
        blue: {
          50: "#F0F6F9",
          100: "#E2F3F9",
          200: "#86E0FF",
          300: "#38CCFF",
          400: "#00ABE7",
          500: "#0098CD",
          600: "#057AA3",
          700: "#014861",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
