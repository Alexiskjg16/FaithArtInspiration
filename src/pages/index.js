import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"


 const Index = () => {
 return ( 
 <Layout>
     <Head title="Home" />
     <h1>Faith Art Inspiration</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
     <Link to="/contact">Contact</Link>
    
 </Layout>
 )
 }
 
 
 export default Index