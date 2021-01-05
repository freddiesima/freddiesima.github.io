import * as React from "react"
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Tab, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow,
  Tabs,
  Theme,
  Typography
} from "@material-ui/core"
import { useState } from "react"
import { Create, Wallpaper, Assignment, Computer } from "@material-ui/icons"

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
  table: {
    padding: theme.spacing(3)
  },
  tableHeadText: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: theme.spacing(2)
  }
}))

const createData = (name: string, level: number, desc: string) => {
  return { name, level, desc }
}

const datas = [
  [
    createData("Java", 4, "JavaFXを用いたGUIアプリケーション等"),
    createData("Javascript", 3, "Node.jsでのDiscord Botのバックエンド"),
    createData("C#", 5, "Unity開発経験")
  ],
  [
    createData("Illustrator", 4, "店内ポスター・宣材等の制作"),
    createData("After Effects", 3, "販促用動画の編集・アニメーションロゴの制作")
  ],
  [
    createData("Blender", 2, "簡単な家具などのモデリング"),
    createData("PC Build", 5, "自作PCのパーツ選定・構築およびチューニング")
  ]
]

interface TabPanelProps {
  children?: React.ReactNode,
  index: any,
  value: any
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  )
}

export const Skills = () => {
  const styles = useStyles()
  const [tabState, setTabState] = useState(0)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabState(newValue)
  }

  const tableGenerator = (datas) => {
    return (
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={styles.tableHeadText}>Name</TableCell>
            <TableCell align="center" className={styles.tableHeadText}>Level</TableCell>
            <TableCell align="center" className={styles.tableHeadText}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.level}</TableCell>
              <TableCell>{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  return (
    <>
      <Box className={styles.title}>
        <Typography color="primary" className={styles.titleH1}>
          <Computer className={styles.titleIcon} />
          Skills
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Paper>
          <Tabs
            value={tabState}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Programming" icon={<Create />} />
            <Tab label="Design" icon={<Wallpaper />} />
            <Tab label="Other" icon={<Assignment />} />
          </Tabs>
          <TabPanel index={0} value={tabState}>
            {tableGenerator(datas[0])}
          </TabPanel>
          <TabPanel index={1} value={tabState}>
            {tableGenerator(datas[1])}
          </TabPanel>
          <TabPanel index={2} value={tabState}>
            {tableGenerator(datas[2])}
          </TabPanel>
        </Paper>
      </Container>
    </>
  )
}