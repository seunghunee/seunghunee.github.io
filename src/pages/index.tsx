import * as React from "react"
import { graphql, PageProps } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/post-card"

interface DataProps {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          slug: string
          title: string
          subtitle: string
          tags: string[]
        }
      }
    }[]
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <List>
      {data.allMarkdownRemark.edges.map((edge: any) => (
        <ListItem key={edge.node.frontmatter.slug} disableGutters>
          <PostCard frontmatter={edge.node.frontmatter} />
        </ListItem>
      ))}
    </List>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query Posts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            subtitle
            tags
          }
        }
      }
    }
  }
`
