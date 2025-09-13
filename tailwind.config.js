module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        peach: "#FFD6D1",
        coral: "#FF7E6B",
        teal: "#B3E5FC",
        blue: "#00838F",
        earth: "#F7F1E3",
        text: "#6D6875"
      },
      fontFamily: {
        heading: ["Nunito Sans", "Montserrat", "sans-serif"],
        body: ["Open Sans", "Lora", "sans-serif"]
      }
    }
  },
  plugins: []
}