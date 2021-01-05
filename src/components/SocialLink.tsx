import * as React from "react"
import { Box, Container, Grid, IconButton, makeStyles, Paper, Theme, Typography } from "@material-ui/core"
import { InsertLink, YouTube, Facebook, GitHub, Twitter } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
  titleH1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontFamily: "vag-rundschrift-d"
  },
  titleIcon: {
    fontSize: 40,
    paddingRight: theme.spacing(2)
  },
  icon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    display: "flex",
    color: "primary",
    fontsize: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    padding: theme.spacing(3),
    justifyContent: "center",
    alignItems: "center"
  }
}))

export const SocialLink = () => {
  const styles = useStyles()

  return (
    <>
      <Box className={styles.title}>
        <Typography color="primary" className={styles.titleH1}>
          <InsertLink className={styles.titleIcon} />
          Links
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Paper>
          <Grid container className={styles.content}>
            <IconButton className={styles.content}>
              <YouTube className={styles.icon} />
            </IconButton>
            <IconButton className={styles.content}>
              <Facebook className={styles.icon} />
            </IconButton>
            <IconButton className={styles.content}>
              <Twitter className={styles.icon} />
            </IconButton>
            <IconButton className={styles.content}>
              <GitHub className={styles.icon} />
            </IconButton>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}