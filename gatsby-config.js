module.exports = {
  siteMetadata: {
    title: `new_world`,
    description: `컴퓨터기술과 관련된 여러 정보와 생각을 글로 정리하는 곳`,
    author: `@HelloSeunghun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `new_world`,
        short_name: `new_world`,
        start_url: `/`,
        background_color: `#00C9B7`,
        theme_color: `#00C9B7`,
        display: `fullscreen`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `@iostindex/gatsby-plugin-material-ui`, // FIX: https://github.com/hupe1980/gatsby-plugin-material-ui/issues/110
  ],
}
