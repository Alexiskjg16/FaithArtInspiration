import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


 const Index = () => {
 return ( 
 <Layout>
     <h1>Faith Art Inspiration</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
     <Link to="/contact">Contact</Link>
    
 </Layout>
 )
 }
 
 
 export default Index