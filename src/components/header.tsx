import * as React from "react"
import { styled } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import Link from "./link"

const PREFIX = "Header"

const classes = {
  siteTitle: `${PREFIX}-siteTitle`,
}

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.siteTitle}`]: {
    color: "#E8F3F1",
    fontWeight: "bold",
    fontSize: "1.4em",
  },
}))

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <StyledBox style={{ flexGrow: 1 }}>
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
    </StyledBox>
  )
}

export default Header
