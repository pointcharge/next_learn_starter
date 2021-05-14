// tailwind.config.js
// removes all unused css from tailwind
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.jsx",
  ],
  // ...
};
