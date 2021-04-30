import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./header"

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

  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container className={classes.main} maxWidth="md">
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}))
