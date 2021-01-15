module.exports = {
  siteMetadata: {
    title: "Hugo Richard",
    siteUrl:"https://hugorichard.io",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-smoothscroll",
    {

      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hugo Richard`,
        short_name: `Hugo Richard`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
      
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
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ],
      
      },
      
    },
    },
    
  ],
};
