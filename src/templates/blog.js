import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Head from '../components/head'


// export const query = graphql`
// query( $slug:String! ) {
//     markdownRemark (
//       fields: {    slug: {  eq: $slug   }  }
//     ) {
//       frontmatter {
//         title
//         date
//       }
//     }
//   }`

export const query = graphql`
query ( $slug:String! ) {
    contentfulBlogPost(slug: {eq:$slug}) {
        title
        date (formatString: "MMMM Do, YYYY")
    }
}
`


const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.date}</p>
        </Layout>
    )
}

export default Blog