module.exports = {
  siteMetadata: {
    title: `DevelopingJay`,
    description: `I am a Node developer who is always hungry to keep learning.`,
    author: `Joshua Scott`,
    siteUrl: `https://developingjay.com`,
    social: {
      twitter: `developing_jay`,
      facebook: ``,
      github: `developingjay`,
      linkedin: `developingjoshua`,
      email: `developingjay@gmail.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `warn`,
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-175557115-1`,
        head: true,
      },
    },
    `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: ``,
    //     short_name: ``,
    //     start_url: `/`,
    //     background_color: ``,
    //     theme_color: ``,
    //     display: ``,
    //     icon: ``, // This path is relative to the root of the site.
    //   },
    //},
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
