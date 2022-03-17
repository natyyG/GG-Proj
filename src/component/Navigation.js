import React from 'react'
import '../css/navigation.css'
import '../css/navigation.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
function Navigation() {
    function toggleMobileMenu(menu) {
        menu.classList.toggle('open');
    }
  return (
    <div>
        <nav>
        <div className="nav">
            <ul>
                <li>
                    <a href="#">Online course</a>
                </li>
                <li>
                    <a href="#">Terms & condition</a>
                </li>
                <Link to="/contribute">
                <li>
                    <a href="#">Contribute</a>
                </li>
                </Link>
            </ul>
        </div>
        <div className="navigation">
            <ul>
                <Link to="/home">
                <li>
                    <a href="#">Home</a>
                </li>
                </Link>
                <Link to="/about">
                <li>
                    <a href="#">AboutUs</a>
                </li>
                </Link>
                <Link to="/adminlogin">
                <li>
                    <a href="#">Admin</a>
                </li>
                </Link>
               
            </ul>
        </div>
    </nav>

    <div id="hamburger-icon" onclick={()=>{toggleMobileMenu(this)}}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <ul className="mobile-menu">
            <li><a href="home">Home</a></li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">Developers</a></li>
            <hr/>
            <li id="#"><a href="#" >Online Course</a></li>
            <li id="signup"><a href="#">Terms & Condition</a></li>
            <li><a href="#">Contribute</a></li>
          </ul>
    </div>
    </div>
  )
}

export default Navigation