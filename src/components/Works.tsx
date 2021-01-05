import * as React from "react"
import {
  Box,
  Button, Card,
  CardActions,
  CardContent,
  CardMedia, Container,
  Grid,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core"
import { Collections } from "@material-ui/icons"

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
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const cards = [
  {
    title: "Room A",
    desc: "This is room A.",
    src: "https://source.unsplash.com/random"
  },
  {
    title: "Room B",
    desc: "This is room B.",
    src: "https://source.unsplash.com/random"
  },
  {
    title: "Room C",
    desc: "This is room C.",
    src: "https://source.unsplash.com/random"
  }
]

export const Works = () => {
  const styles = useStyles()

  return (
    <>
      <Box className={styles.title}>
        <Typography color="primary" className={styles.titleH1}>
          <Collections className={styles.titleIcon} />
          Works
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.card}>
                <CardMedia image={card.src} title={card.title} className={styles.cardMedia} />
                <CardContent className={styles.cardContent}>
                  <Typography component="h2" variant="h4">
                    {card.title}
                  </Typography>
                  <Typography>
                    {card.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}