const path = require('path');

exports.createPages = async ({ actions, graphql, reporter}) => {
  const { createPage } = actions;

  const categoryTemplate = path.resolve('src/templates/category.tsx');

  const result = await graphql(`
    {
      categoriesRemark: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              type
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  const categoryDescription = (type) => {
    switch (type) {
      case 'article':
        return 'Articles to help you implement dark mode';
      case 'podcast':
        return 'Podcasts to inspire and explain dark mode implementations'
      case 'tweet':
        return 'Bite-sized pieces of usefulness';
      case 'tool':
        return 'Tools to help design and develop for dark mode';
      case 'example':
        return 'The best examples of dark mode implementations';
      default:
        return null;
    }
  }

  const categories = result.data.categoriesRemark.edges;

  categories.forEach(category => {
    const { type } = category.node.frontmatter;
    createPage({
      path: type + 's',
      component: categoryTemplate,
      context: {
        category: category.node.frontmatter.type,
        description: categoryDescription(type)
      }
    })
  })
}