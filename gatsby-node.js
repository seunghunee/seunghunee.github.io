exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.frontmatter
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { slug },
    })
  })
}
