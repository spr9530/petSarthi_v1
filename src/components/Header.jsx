import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header class="main-header">
                <div class="header-sticky">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container">
                            <div class="navbar-brand" href="index.html">
                                <img src="images/logo.svg" alt="Logo" />
                            </div>

                            <div class="collapse navbar-collapse main-menu">
                                <div class="nav-menu-wrapper">
                                    <ul class="navbar-nav mr-auto" id="menu">
                                        <NavLink to='/'>
                                            <li class="nav-item"><div class="nav-link" >Home</div></li>
                                        </NavLink>
                                        <li class="nav-item"><div class="nav-link" href="about.html">About Us</div></li>
                                        <li class="nav-item"><div class="nav-link" href="services.html">Services</div></li>
                                        {/* <li class="nav-item"><div class="nav-link" href="blog.html">Blog</div></li> */}
                                        {/* <li class="nav-item submenu"><div class="nav-link" href="#">Pages</div>
                                    <ul>                                        
                                        <li class="nav-item"><div class="nav-link" href="service-single.html">Service Details</div></li>
                                        <li class="nav-item"><div class="nav-link" href="blog-single.html">Blog Details</div></li>
                                        <li class="nav-item"><div class="nav-link" href="doctors.html">Doctors</div></li>
                                    </ul>
                                </li> */}
                                        <NavLink to="/contact-us">
                                            <li class="nav-item"><div class="nav-link">Contact Us</div></li>
                                        </NavLink>
                                        <li class="nav-item highlighted-menu"><div class="nav-link" href="book-appointment.html">book appointment</div></li>
                                    </ul>
                                </div>

                                <NavLink to='/book-appointments'>
                                <div class="header-btn">
                                    <div class="btn-default">book appointment</div>
                                </div>
                                </NavLink>
                            </div>
                            <div class="navbar-toggle"></div>
                        </div>
                    </nav>
                    <div class="responsive-menu"></div>
                </div>
            </header>
        </>
    )
}

export default Header