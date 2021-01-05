import * as React from "react"
import { Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  mainFeature: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(https://source.unsplash.com/random)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.2)"
  },
  mainFeatureContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: theme.spacing(3),
    textShadow: "5px 5px 6px black",
    fontFamily: "balboa-plus-fill",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      minHeight: "450px"
    }
  },
  pageTitle: {
    fontFamily: "vag-rundschrift-d"
  },
  pageDescription: {
    fontFamily: " rig-shaded-bold-face"
  }
}))

export const MainFeature = () => {
  const styles = useStyles()

  return (
    <Grid item xs={12}>
      <Paper className={styles.mainFeature}>
        <div className={styles.overlay} />
        <Grid container>
          <Grid item xs={12}>
            <div className={styles.mainFeatureContent}>
              <Typography component="h1" variant="h2" gutterBottom className={styles.pageTitle}>
                Sample Portfolio Template
              </Typography>
              <Typography variant="h5" className={styles.pageDescription}>
                This is a portfolio page of "Sample User."
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}