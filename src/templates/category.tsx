import React, { useState } from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout';
import SEO from "../components/seo"
import Resource from '../components/Resource';
import Filters from '../components/Filters';
import { ucFirst } from '../utils';
import TweetEmbed from 'react-tweet-embed';
import Masthead from '../components/Masthead';

export default ({ pageContext, data }) => {
    const { category, description } = pageContext;
    const { edges } = data.allMarkdownRemark;

    const tags: string[] = [];
    const [filters, setFilters] = useState(['all']);
    
    const all = edges.map(({node}) => {
        const { id, frontmatter, html } = node;
        if (frontmatter.type !== category) return;
        frontmatter.tags.forEach((tag: string) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })

        return {
            ...id,
            ...frontmatter,
            content: html  
        };
    });

    const shownItems = () => {
        return all.filter(item => {
            if (filters[0] === 'all') {
                return item;
            }
            
            if (!item) return false;

            return filters.every(filter => {
                return item.tags.includes(filter)
            })
        })
    }

    const handleFiltersChange = (array: string[]) => {
        if (array.length === 0) {
            setFilters(['all']);
        } else {
            setFilters(array);
        }
    }

    let twitterTheme = 'light';
    if (typeof document !== 'undefined' && document.documentElement.classList.contains('mode-dark')) {
        twitterTheme = 'dark';
    }

    let cols = 3;
    if (category === 'tweet') {
        cols = 2;
    }
    const gridClasses = `grid grid-cols-1 sm:grid-cols-${cols-1} md:grid-cols-${cols} gap-4`;

    return (
        <Layout>
            <SEO title={`${ucFirst(category)}s`} />
            {description &&
                <Masthead>
                    <p>{description}</p>
                </Masthead>
            }
            <div className="p-4">
                <div className="max-w-screen-xl mx-auto">
                    {tags.length > 1 &&
                        <Filters
                            tags={tags}
                            filters={filters}
                            onFiltersChange={handleFiltersChange}
                        />
                    }
                    <div className={gridClasses}>
                        {shownItems().map((item, index) => (
                                <div className="md:flex" key={index}>
                                    {item.type === 'tweet' &&
                                        <TweetEmbed
                                            id={item.tweetid} 
                                            options={{
                                                theme: twitterTheme // TODO
                                            }}
                                        />
                                    }
                                    {item.type !== 'tweet' &&
                                        <Resource
                                            title={item.title}
                                            tags={item.tags}
                                            url={item.url}
                                            content={item.content}
                                            author={item.author}
                                            image={item.image}
                                        />
                                    }
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($type: String) {
        allMarkdownRemark(
            filter: { frontmatter: { type: { eq: $type } }}
        ) {
            edges{ 
                node {
                    id
                    html
                    frontmatter {
                        title
                        tags
                        type
                        url
                        tweetid
                        image
                        author
                    }
                }
            }
        }
    }
`