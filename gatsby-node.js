const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const sectionTemplate = path.resolve(`src/templates/section.tsx`)

  const result = await graphql(`
    {
      allContentfulCourse {
        edges {
          node {
            title
            sections {
              title
              duration
              description
              slug
            }
          }
        }
      }
    }
  `)

  const sections = result.data.allContentfulCourse.edges[0].node.sections
  sections.forEach(section => {
    createPage({
      path: `${section.slug}`,
      component: sectionTemplate,
      context: {
        slug: section.slug,
      }
    })
  })
}
