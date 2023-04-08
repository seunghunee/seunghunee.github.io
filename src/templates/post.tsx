import * as React from "react"
import { styled } from "@mui/material/styles"
import { PageProps, graphql } from "gatsby"
import "prismjs/themes/prism-tomorrow.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PostMain = styled("div")(({ theme }) => ({
  [theme.breakpoints.up(680)]: {
    width: 680,
    margin: "auto",
  },
}))

const Body = styled("div")(({ theme }) => ({
  color: "#222",
  "& a": {
    color: "#00B6D0",
  },
  "& img": {
    width: "100%",
  },
  '& pre[class*="language-"]': {
    borderRadius: "0.4em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.15rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& code.language-text": {
    color: "#444",
    backgroundColor: "#EEE",
    padding: ".2em",
  },
  "& h1": {
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  "& h2": {
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  "& h3": {
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  "& p": {
    color: "#444",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.15rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& pre": {
    color: "#444",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.15rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& li": {
    color: "#444",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.15rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& tr": {
    color: "#444",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.15rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}))

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

  return (
    <Layout>
      <Seo title={title} description={description} />
      <PostMain>
        <Body dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </PostMain>
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
