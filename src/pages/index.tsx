import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Resource from "../components/Resource"
import Masthead from "../components/Masthead"

const IndexPage = ({ data }) => {
  const featured: {
    article: JSX.Element[],
    podcast: JSX.Element[],
    tool: JSX.Element[],
    example: JSX.Element[]
  } = {
    article: [],
    podcast: [],
    tool: [],
    example: []
  };

  const { edges, totalCount } = data.allMarkdownRemark;

  interface FrontMatter {
    type: 'article' | 'podcast' | 'tool' | 'example',
    title: string,
    tags: string[]
    featured?: boolean
    url: string
    image?: string
    author?: string
    content?: string
  }

  edges.map((edge, index) => {
    const { frontmatter, html }: { frontmatter: FrontMatter, html: string} = edge.node;
    if (!frontmatter.featured) return;
    featured[frontmatter.type].push(
      <div className="md:flex" key={index}>
        <Resource
          title={frontmatter.title}
          tags={frontmatter.tags}
          url={frontmatter.url}
          image={frontmatter.image}
          author={frontmatter.author}
          content={html}
        />
      </div>
    )
  });

  return (
    <Layout>
      <SEO title="Dark Mode Resources" />
      <Masthead>
        A collection of Dark Mode <Link to="/articles" className="underline">articles</Link>, <Link to="/tools" className="underline">tools</Link>, <Link to="/examples" className="underline">examples</Link>, <Link to="/tweets" className="underline">tweets</Link> and even a <Link to="/podcasts" className="underline whitespace-no-wrap">podcast</Link>
      </Masthead>
      <div className="p-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-4">
            <h2 className="font-bold mb-4 dark:text-gray-100">Featured Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featured.article}
            </div>
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-4 text-gray-800 dark:text-gray-100">Featured Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featured.tool}
            </div>
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-4 text-gray-800 dark:text-gray-100">Featured Examples</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featured.example}
            </div>
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-4 text-gray-800 dark:text-gray-100">Featured Podcast</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featured.podcast}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
          totalCount
            edges{ 
                node {
                    id
                    html
                    frontmatter {
                        title
                        type
                        tags
                        featured
                        url
                        image
                        author
                    }
                }
            }
        }
    }
`