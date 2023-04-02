import * as React from "react"
import { styled } from "@mui/material/styles"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"

import Header from "./header"

const PREFIX = "Layout"

const classes = {
  background: `${PREFIX}-background`,
  main: `${PREFIX}-main`,
}

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.background}`]: {
    backgroundColor: "#fff",
  },

  [`& .${classes.main}`]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}))

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Root className={classes.background}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container className={classes.main} maxWidth="md">
        <main>{children}</main>
      </Container>
    </Root>
  )
}

export default Layout
