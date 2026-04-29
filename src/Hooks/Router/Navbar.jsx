import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav style={{display:"flex",justifyContent:"space-evenly"}}>

        <Link to={"/nav"}>
    <a> Login </a>
        </Link>
        
        <Link to={"/home"}>
    <a> Navigate to homepage </a>
        </Link>

        <Link to={"/about"}>
    <a> Navigate to AboutPage </a>
        </Link>
        <Link to={"/contact"}>
    <a> Navigate to ContactPage </a>
        </Link>

    </nav>
    
    
    </>
  )
}
