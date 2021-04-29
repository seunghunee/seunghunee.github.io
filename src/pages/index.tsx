import * as React from "react"
import { useStaticQuery, graphql, PageProps } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/post-card"

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query Posts {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Home" />
      <List>
        {data.allMarkdownRemark.edges.map((edge: any) => (
          <ListItem key={edge.node.id} disableGutters>
            <PostCard frontmatter={edge.node.frontmatter} />
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}

export default IndexPage
