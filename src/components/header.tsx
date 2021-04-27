import * as React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import Link from "./link"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => (
  <AppBar position="sticky">
    <Toolbar>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Toolbar>
  </AppBar>
)

export default Header
