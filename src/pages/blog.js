import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby";
import Head from "../components/head"
import blogStyles from '../styles/blog.module.scss'


 const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                fields: date,
                  order: DESC
                
                } )
                {
                edges {
                  node {
                    title
                    slug
                    date(formatString:"MMMM Do, YYYY")
                  }
                }
              }
        }
    `)


 return ( 
 <Layout>
    <Head title="Blog" />
     <ol className={blogStyles.ol}>
     {data.allContentfulBlogPost.edges.map((edges) => {
                    return (
                      <li>
                        <Link to={`/blog/${edges.node.slug}`} className={blogStyles.li}>
                        <h2>{edges.node.title}</h2>
                        <p className={blogStyles.dateText}>{edges.node.date}</p>
                        </Link>
                      </li>
                    )
                })}
                
            </ol>
 </Layout>
 )
 }
 
 
 export default Blog