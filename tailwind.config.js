/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#4824F9",
        white: "#FFFFFF",
        gray: "#FFF9EC",
        gray100: "#C2C2C2",
        grayDark: "#8F8F8F",
        purpleLight: "#8A74FB",
        greenLight: "#9CFED4",
        green: "#00CC77",
        black: "#131212",
        primaryPurpleDark: "#4824F9",
        gray800: "#282828",
        red: "#E74C3C",
        card: "#282828"
      },
      fontSize: {
        sm10: "0.625rem",
        sm12: "0.75rem",
        sm14: "0.875rem",
        sub24: "1.5rem",
        sub32: "2rem",
        sub40: "2.5rem",
        sub48: "3rem",
        sub56: "3.5rem",
        caption16: "1rem",
        caption18: "1.125rem",
        body14: "0.875rem",
        body16: "1rem",
        body18: "1.125rem",
        body20: "1.25rem",
        button16: "1rem",
        button18: "1.125rem",
        head24: "1.5rem",
        head32: "2rem",
        head40: "2.5rem",
        head48: "3rem",
        head56: "3.5rem",
        head64: "4rem",
      },
      fontFamily: {
        proximaNova: "proxima-nova",
        degular: "degular-display",
      },
      backgroundImage: {
      }
    },
  },
  plugins: [],
}