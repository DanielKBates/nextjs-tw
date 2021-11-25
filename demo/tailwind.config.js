module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rockSalt: ["Rock Salt", "cursive"]
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
