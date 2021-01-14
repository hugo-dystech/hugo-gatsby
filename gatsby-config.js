module.exports = {
  siteMetadata: {
    title: "Hugo Richard",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-smoothscroll",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      __key: "images",

      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
      fonts: [{
              family: `Poppins`,
              variants: [`400`, `500`, `700`]
      }],
      },

      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.ico`,
      },
    },
    },
    
  ],
};
