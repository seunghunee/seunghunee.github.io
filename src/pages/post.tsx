import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface DataProps {
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
    }
  }
}

const Post: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <Seo title="Using TypeScript" />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
)

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
