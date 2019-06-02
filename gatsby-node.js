const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
      query {
        allContentfulFaithArtInspiration {
            edges {
                node {
                    fields {
                        slug
                    }
                    }
            }
        }
      }
    `)
    
res.data.allContentfulFaithArtInspiration.edges.forEach((edges) => {
    createPage({
        component: blogTemplate,
        path: `/blog/${edges.node.fields.slug}`,
        context: {
            slug: edges.node.field.slug
        }
    })
})
}