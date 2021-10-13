const _ = require("lodash")

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  pathPrefix: `/classes/MAS.863/EECS/people/mattfeng`,
  siteMetadata: {
    title: `/mattfeng/how to make almost anything`,
    description: `how to make almost anything fall 2021`,
    author: `@mattfeng`,
    siteUrl: `http://fab.cba.mit.edu/classes/MAS.863/EECS/people/mattfeng/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: true,
              wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {},
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
