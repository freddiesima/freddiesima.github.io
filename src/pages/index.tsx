import * as React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { MuiTheme } from "../styles/theme"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const App = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            example
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
