/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: "cqn1rfq"
        }
      }
    }

    /*{
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    }*/
  ]
}
