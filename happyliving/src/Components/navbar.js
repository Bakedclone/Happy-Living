import React from 'react'
import '../styles/Style1.css';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
        <div class="container">
            <div class="nav-wrapper">
                <a href="#"><img src="images/logo.svg" alt="Logo" /></a>
                <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"
                    id="navToggle">
                    <img class="icon-hamburger" src="images/icon-hamburger.svg" alt="hamburger" aria-hidden="true" />
                    <img class="icon-close" src="images/icon-close.svg" alt="close" aria-hidden="true" />
                    <span class="visiually-hidden">Menu</span>
                </button>
                <nav class="primary-navigation fs-nav" id="primary-navigation">
                    <ul role="list" aria-label="primary" class="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        {/* <li><a href="#">Community</a></li> */}
                    </ul>
                </nav>
                <Link to="/login"><button class="button button-sm-none">Login</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar