import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from '../styles/contact.module.scss'


 const Contact = () => {
 return ( 
 <Layout>
      <Head title="Contact" />
      <section className={contactStyles.content}>
             <a href="https://www.facebook.com/faithartinspiration/"  target="_blank" rel="noopener noreferrer" className={contactStyles.indvItem}> Facebook</a>
             <a href="https://www.instagram.com/faithartinspiration/"  target="_blank" rel="noopener noreferrer" className={contactStyles.indvItem}>Instagram</a>
             <a href="mailto:stampinhands04@gmail.com"  target="_blank" rel="noopener noreferrer" className={contactStyles.indvItem}>Email</a>
             </section>
 </Layout>
 )
 }
 
 
 export default Contact