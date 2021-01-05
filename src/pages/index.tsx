import * as React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { MuiTheme } from "../styles/Theme"
import Container from "@material-ui/core/Container"
import Helmet from "react-helmet"
import { MainFeature } from "../components/MainFeature"
import { Profile } from "../components/Profile"
import { Works } from "../components/Works"
import { Skills } from "../components/Skills"
import { SocialLink } from "../components/SocialLink"

const App = () => {
  return (
    <>
      <Helmet>
        <script>{`
          (function(d) {
          var config = {
            kitId: 'cqn1rfq',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);`}
        </script>
      </Helmet>

      <ThemeProvider theme={MuiTheme}>
        <Container maxWidth="xl">
          <MainFeature />
          <Profile />
          <Works />
          <Skills />
          <SocialLink />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
