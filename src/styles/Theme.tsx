import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6f74dd",
      main: "#3949ab",
      dark: "#00227b",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#63a4ff",
      main: "#1976d2",
      dark: "#004ba0",
      contrastText: "#ffffff"
    }
  },
  typography: {
    fontFamily: [
      "fot-udkakugo-large-pr6",
      "sans-serif"
    ].join(",")
  }
})

export const MuiTheme = responsiveFontSizes(theme)