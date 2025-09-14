module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FFE5D4', // gentle peach
        coral: '#FFB4A2', // soft coral
        teal: '#B5EAEA', // light hopeful teal
        blue: '#89C2D9', // light blue
        earth: '#F6F5F3', // neutral earthy background
        text: '#3D405B', // dark, readable text
        accent: '#FF7E6B', // accent coral for buttons
        primary: '#00838F', // for strong CTAs
        secondary: '#6D6875' // for muted text
      },
      fontFamily: {
        heading: ["Nunito Sans", "Montserrat", "sans-serif"],
        body: ["Open Sans", "Lora", "sans-serif"]
      }
    }
  },
  plugins: []
}