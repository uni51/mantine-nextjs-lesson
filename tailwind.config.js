/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // mantineuiとtailwind.cssを同時に利用する場合の対策
  corePlugins: {
    preflight: false,
  },
}
