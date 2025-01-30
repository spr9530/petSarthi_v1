import React from 'react'

function Header() {
  return (
    <>
    <header class="main-header">
		<div class="header-sticky">
			<nav class="navbar navbar-expand-lg">
				<div class="container">
					<a class="navbar-brand" href="index.html">
						<img src="images/logo.svg" alt="Logo" />
					</a>

					<div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                            <li class="nav-item"><a class="nav-link" href="/">About Us</a></li>                             
                                <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                                <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                                {/* <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li> */}
                                {/* <li class="nav-item submenu"><a class="nav-link" href="#">Pages</a>
                                    <ul>                                        
                                        <li class="nav-item"><a class="nav-link" href="service-single.html">Service Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="blog-single.html">Blog Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="doctors.html">Doctors</a></li>
                                        <li class="nav-item"><a class="nav-link" href="doctor-single.html">Doctor Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="case-study.html">Case Study</a></li>
                                        <li class="nav-item"><a class="nav-link" href="case-study-single.html">Case Study Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="image-gallery.html">Image Gallery</a></li>
                                        <li class="nav-item"><a class="nav-link" href="video-gallery.html">Video Gallery</a></li>
                                        <li class="nav-item"><a class="nav-link" href="faqs.html">FAQs</a></li>
                                        <li class="nav-item"><a class="nav-link" href="404.html">404</a></li>
                                    </ul>
                                </li> */}
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                                <li class="nav-item highlighted-menu"><a class="nav-link" href="book-appointment.html">book appointment</a></li>                             
                            </ul>
                        </div>

                        <div class="header-btn">
                            <a href="book-appointment.html" class="btn-default">book appointment</a>
                        </div>
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