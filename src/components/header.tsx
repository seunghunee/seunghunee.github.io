import * as React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"

import Link from "./link"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <Box style={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        elevation={0}
        style={{
          background: "linear-gradient(45deg, #00C9B7 30%, #00B6D0 90%)",
        }}
      >
        <Toolbar>
          <Link to="/" style={{ flexGrow: 1 }}>
            <Typography className={classes.siteTitle}>{siteTitle}</Typography>
          </Link>
          <Tooltip title="LinkedIn">
            <IconButton
              onClick={() =>
                open(
                  "https://www.linkedin.com/in/shin-seunghun-790172b6/",
                  "_blank"
                )
              }
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              onClick={() => open("https://github.com/seunghunee", "_blank")}
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
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
