import * as React from "react"
import { Avatar, Box, Container, Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
    marginBottom: theme.spacing(2)
  },
  titleH1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontFamily: "vag-rundschrift-d",
    marginBottom: theme.spacing(2)
  },
  titleIcon: {
    fontSize: 40,
    paddingRight: theme.spacing(2)
  },
  content: {
    justifyContent: "center",
    alignItems: "stretch",
    padding: theme.spacing(2)
  },
  icon: {
    width: "100%",
    height: "100%",
    maxWidth: "300px",
    maxHeight: "300px",
    backgroundColor: "#000"
  }
}))

export const Profile = () => {
  const styles = useStyles()

  return (
    <>
      <Box className={styles.title}>
        <Typography color="primary" className={styles.titleH1}>
          <AccountCircle className={styles.titleIcon} />
          Profile
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Paper elevation={3}>
          <Grid container className={styles.content} spacing={3}>
            <Grid item xs={12} sm={3} md={3}>
              <Avatar src="https://source.unsplash.com/random"
                      className={styles.icon}
                      variant="rounded" />
            </Grid>
            <Grid item xs={12} sm={9} md={9}>
              <Typography>
                あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
                またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}