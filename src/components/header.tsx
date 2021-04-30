import * as React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import Link from "./link"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar
      position="relative"
      elevation={0}
      style={{
        background: "linear-gradient(45deg, #00C9B7 30%, #00B6D0 90%)",
      }}
    >
      <Toolbar>
        <Link to="/">
          <Typography className={classes.siteTitle}>{siteTitle}</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header

const useStyles = makeStyles(theme => ({
  siteTitle: {
    color: "#E8F3F1",
    fontWeight: "bold",
    fontSize: "1.6em",
  },
}))
