import { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<{
    allContentfulLandingPage: {
      nodes: { slug: string }[];
    };
  }>(`
    query AllLandingPages {
      allContentfulLandingPage {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(`GraphQL query failed: ${result.errors}`);
  }

  result.data?.allContentfulLandingPage.nodes.forEach((page) => {
    createPage({
      path: page.slug === "home" ? "/" : `/${page.slug}`,
      component: path.resolve("./src/pages/LandingPage/LandingPage.tsx"),
      context: {
        slug: page.slug,
      },
    });
  });
};
