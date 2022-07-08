import React from 'react'
import {  Link } from "react-router-dom";
import logo from '../assets/logo.png'
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <>
    <div style={{backgroundColor:"#122164",display:"flex",justifyContent:"space-between", padding:"0 1rem"}}>
    <Link to="/" style={{color:"white"}}>  <img src={logo}width={150} alt="LOGO" height={50}/></Link>
      

        
        <nav >
        <ul style={{display:"flex", alignItems:"center",textDecoration:"none",listStyle:"none",}}>
            <li style={{fontsize:"2rem",margin:"0 1rem",}}>
                 <Link to="/location" style={{color:"white"}}>choose Location</Link>
            </li>
            <li  style={{fontsize:"2rem",margin:"0 1rem",}}>
            <Link to="/carservice" style={{color:"white"}}>car service</Link>
            </li>
            <li  style={{fontsize:"2rem",margin:"0 1rem",}}>
            <Link to="/bikeservice" style={{color:"white"}}>bike service</Link>
            </li>
            <li  style={{fontsize:"2rem",margin:"0 1rem",}}>
            <Link to="/blog" style={{color:"white"}}>blog</Link>
            </li>
            <li  style={{fontsize:"2rem",margin:"0 1rem",}}>
            <Link to="/faq" style={{color:"white"}}>FAQ's</Link>
            </li>
            <li  style={{fontsize:"2rem",margin:"0 1rem",}}>
            <Link to="/contact" style={{color:"white"}}>contact us</Link>
            </li>
            <li>
            <Button variant="contained">Login/Signup</Button>
            </li>
        </ul>
       
       
       
       
       
      
      </nav>

      
    </div>

    </>
  )
}

export default Header