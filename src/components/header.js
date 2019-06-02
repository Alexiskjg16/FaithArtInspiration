import React from "react"
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

 const Index = () => {
 return ( 
 <div>
     <h1>Faith Art Inspiration</h1>
     <ul className={headerStyles.navList}>
        <li> <Link className={headerStyles.Links} to="/" activeClassName={headerStyles.activeLinks}>Home</Link></li>
        <li> <Link className={headerStyles.Links} to="/about" activeClassName={headerStyles.activeLinks}>About</Link></li>
        <li> <Link className={headerStyles.Links} to="/blog" activeClassName={headerStyles.activeLinks}>Blog</Link></li>
        <li> <Link className={headerStyles.Links} to="/contact" activeClassName={headerStyles.activeLinks}>Contact</Link></li>
        </ul>
    
 </div>
 )
 }
 
 
 export default Index