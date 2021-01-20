module.exports = {
  siteMetadata: {
     title: `DecorWood`,
    description: `DecorWood. Jedinstveni Dekoratvni Predmeti Od Drveta `,
    author: `@zorandasic`,
    titleTemplate: `%s | Gatsby - DecorWood`,
    siteUrl: `https://svadbenicvet.com`,
    image: `123.png`,
    twitterUsername: ``,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: [`400`, `500`, `700`],
            },
            {
              family: "Open Sans",
              variants: ["300", "700"],
            },
            {
              family: `Caveat`,
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Decoorwood`,
        short_name: `DecoorWood`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#ed8936`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
   {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
