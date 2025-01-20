import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Encord CMS`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "k4cxy3jaceag",
        accessToken: "6zErGdpx2nKHPFC6F4oqYQFxywiWMRTEOgIuNkfI9LE",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};

export default config;
