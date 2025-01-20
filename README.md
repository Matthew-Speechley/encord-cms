## 🚀 Encord Frontend Assignment

This project is set up with the following tech stack:

- React work: Gatsby

- CMS: Contentful

- Styling: CSS Modules

The project can be run locally with `gatsby develop`.

Performance notes:
- Suspense used to wrap main app content, lazy loading each component and reducing the initial JavaScript bundle size
- `gatsbyImageData` used to fetch image data, and `<GatsbyImage/>` used on render
- Font stored locally and preloaded in gatsby-ssr.js
