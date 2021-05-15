import * as React from "react"
import { PageProps, graphql } from "gatsby"
import "prismjs/themes/prism-tomorrow.css"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface DataProps {
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
      description: string
    }
  }
}

const Post: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  const classes = useStyles()
  return (
    <Layout>
      <Seo title={title} description={description} />
      <div className={classes.post}>
        <Typography className={classes.title}>{title}</Typography>
        <div
          className={classes.body}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  post: {
    [theme.breakpoints.up(680)]: {
      width: 680,
      margin: "auto",
    },
  },
  title: {
    color: "#111",
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
    [theme.breakpoints.up("xs")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  body: {
    color: "#222",
    "& a": {
      textDecoration: "none",
      color: "#00B6D0",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
    "& img": {
      width: "100%",
    },
    '& pre[class*="language-"]': {
      borderRadius: "0.4em",
    },
    "& code.language-text": {
      color: "#444",
      backgroundColor: "#EEE",
      padding: ".2em",
    },
    "& h1": {
      marginTop: theme.spacing(6),
      [theme.breakpoints.up("xs")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.25rem",
      },
    },
    "& h2": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "2.25rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    "& h3": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.7rem",
      },
    },
    "& h4": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.7rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
    "& h5": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.3rem",
      },
    },
    "& h6": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
    "& p": {
      color: "#444",
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.15rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    "& pre": {
      color: "#444",
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.15rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    "& li": {
      color: "#444",
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.15rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    "& tr": {
      color: "#444",
      [theme.breakpoints.up("xs")]: {
        fontSize: "1.15rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
  },
}))
