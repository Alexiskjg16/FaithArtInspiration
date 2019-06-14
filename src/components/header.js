import React from "react"
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'
import Faith from './banner.jpg'

 const Index = () => {
 return ( 
 <div className={headerStyles.allContent}>    
          <img src={Faith} alt="Faith" className={headerStyles.Pictures}/>
     <h1 className={headerStyles.title}>Faith Art Inspiration</h1>
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