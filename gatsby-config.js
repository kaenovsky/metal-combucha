module.exports = {
  siteMetadata: {
    title: `Taberna Odin Live`,
    description: `Radio online de Heavy Metal.`,
    author: `@kaenovsky`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `odin-live`,
        short_name: `odin`,
        start_url: `/`,
        background_color: `#F9BD16`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/logo-odin-transparente.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
