import React from "react";
import { useState } from "react";
import './Nav.css'
import {Link} from 'react-scroll'
import { FaAlignLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import {NavLink, Outlet } from 'react-router-dom';
export default function Navbar(){
    const [toggle, SetToggle] = useState(false);
   

   

    return(
        <>
            <nav className="nav">
                <div className="logo"><p><Link to="home" offset={-150} smooth={true}>Med<sup>+</sup></Link></p></div>
                <div className="logo_items">
                     <Link to="home" spy={true} offset={-150} smooth={true}><p>Home</p></Link>
                    <Link spy={true} offset={-50} smooth={true} to="about"><p>About</p></Link>
                    <Link spy={true} smooth={true} to="test"> <p>Contact</p></Link>
                    {/* <Link to="test" offset={300}><p>Location</p></Link> */}
                </div>
                <div className="togglecontainer">
                <div className="togglebtn" onClick={()=> SetToggle(!toggle)} style={{display : toggle ? 'none' : ''}}>
                <FaAlignLeft />
                </div>
                <div className="toggleclosebtn" onClick={()=> SetToggle(!toggle)} style={{display : toggle ? 'block' : 'none'}}>
                <IoMdClose />
                </div>
                </div>
            </nav>
            <div className="logo_items_mobileview" style={{display : toggle ? 'flex' : 'none'}}>
                     <Link to="home" spy={true} offset={-150} smooth={true} onClick={()=> SetToggle(!toggle)}><p>Home</p></Link>
                    <Link spy={true} offset={-50} smooth={true} to="about" onClick={()=> SetToggle(!toggle)}><p>About</p></Link>
                    <Link spy={true} smooth={true} to="test" onClick={()=> SetToggle(!toggle)}> <p>Contact</p></Link>
                    
                </div>
            {/* <Outlet/> */}
            </>
       
    )
}