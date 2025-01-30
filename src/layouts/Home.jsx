import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
    return (
        <>

            <Header />

            <div className="hero bg-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">your health our priority</h3>
                                    <h1 className="text-anime-style-3" data-cursor="-opaque">
                                        Expert medical care you can rely on
                                    </h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                                    </p>
                                </div>

                                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                                    <a href="book-appointment.html" className="btn-default">
                                        book an appointment
                                    </a>
                                    <a href="about.html" className="btn-default">
                                        about us
                                    </a>
                                </div>

                                <div className="google-rating wow fadeInUp" data-wow-delay="0.75s">
                                    <ul>
                                        <li>
                                            Google Rating <span>5.0</span>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>based on 500 reviews</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hero-image">
                                <div className="hero-img">
                                    <figure>
                                        <img src="images/hero-img.png" alt="Hero" />
                                    </figure>
                                </div>

                                <div className="export-category-box">
                                    <div className="export-category-item btn-default category-item-1">
                                        <div className="icon-box">
                                            <img src="images/icon-export-category-1.svg" alt="Orthopedics" />
                                        </div>
                                        <div className="export-category-content">
                                            <p>orthopedics</p>
                                        </div>
                                    </div>

                                    <div className="export-category-item btn-default category-item-2">
                                        <div className="icon-box">
                                            <img src="images/icon-export-category-2.svg" alt="Cardiology" />
                                        </div>
                                        <div className="export-category-content">
                                            <p>cardiology</p>
                                        </div>
                                    </div>

                                    <div className="export-category-item btn-default category-item-3">
                                        <div className="icon-box">
                                            <img src="images/icon-export-category-3.svg" alt="Neurology" />
                                        </div>
                                        <div className="export-category-content">
                                            <p>neurology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- About Us Section Start --> */}
            <div class="about-us">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            {/* <!-- About Us Content Start --> */}
                            <div class="about-us-content">
                                {/* <!-- Section Title Start --> */}
                                <div class="section-title">
                                    <h3 class="wow fadeInUp">about us</h3>
                                    <h2 class="text-anime-style-3" data-cursor="-opaque">Professionals dedicated to your health</h2>
                                    <p class="wow fadeInUp" data-wow-delay="0.25s">Our team of skilled professionals is committed to providing personalized, compassionate care. With a focus.</p>
                                </div>
                                {/* <!-- Section Title End --> */}

                                {/* <!-- About Us Body Start --> */}
                                <div class="about-us-body">
                                    {/* <!-- About Info Item Start --> */}
                                    <div class="about-info-item wow fadeInUp">
                                        <div class="icon-box">
                                            <img src="images/icon-about-info-1.svg" alt="" />
                                        </div>
                                        <div class="about-info-item-content">
                                            <h3>patient-centered care</h3>
                                            <p>Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                                        </div>
                                    </div>
                                    {/* <!-- About Info Item End --> */}

                                    {/* <!-- About Info Item Start --> */}
                                    <div class="about-info-item wow fadeInUp" data-wow-delay="0.25s">
                                        <div class="icon-box">
                                            <img src="images/icon-about-info-2.svg" alt="" />
                                        </div>
                                        <div class="about-info-item-content">
                                            <h3>specialist doctors</h3>
                                            <p>Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                                        </div>
                                    </div>
                                    {/* <!-- About Info Item End --> */}

                                    {/* <!-- About Info Item Start --> */}
                                    <div class="about-info-item wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="icon-box">
                                            <img src="images/icon-about-info-3.svg" alt="" />
                                        </div>
                                        <div class="about-info-item-content">
                                            <h3>24 hours service</h3>
                                            <p>Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                                        </div>
                                    </div>
                                    {/* <!-- About Info Item End --> */}
                                </div>
                                {/* <!-- About Us Body End --> */}

                                {/* <!-- About Us Button Start --> */}
                                <div class="about-us-btn wow fadeInUp" data-wow-delay="0.75s">
                                    <a href="about.html" class="btn-default">view more about us</a>
                                </div>
                                {/* <!-- About Us Button End --> */}
                            </div>
                            {/* <!-- About Us Content End --> */}
                        </div>

                        <div class="col-lg-7">
                            {/* <!-- About Us Images Start --> */}
                            <div class="about-us-images">
                                {/* <!-- About Image 1 Start --> */}
                                <div class="about-img-1">
                                    <figure class="image-anime ">
                                        <img src="images/about-img-1.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* <!-- About Image 1 End --> */}

                                {/* <!-- About Image 2 Start --> */}
                                <div class="about-img-2">
                                    <figure class="image-anime">
                                        <img src="images/about-img-2.jpg" alt="" />
                                        <h3>video call support</h3>
                                    </figure>
                                </div>
                                {/* <!-- About Image 2 End --> */}

                                {/* <!-- Company Timing Start --> */}
                                <div class="company-timing">
                                    <h3>Opening hours</h3>
                                    <ul>
                                        <li><span>Mon To Fri</span> 09:30 - 07:30</li>
                                        <li><span>Saturday</span> 10:30 - 5:00</li>
                                        <li><span>Sunday</span> Closed</li>
                                    </ul>

                                    <figure>
                                        <i class="fa-solid fa-clock"></i>
                                    </figure>
                                </div>
                                {/* <!-- Company Timing End --> */}
                            </div>
                            {/* <!-- About Us Images End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Us Section End --> */}

            {/* <!-- Our Service Section Start --> */}
            <div class="our-services bg-section">
                <div class="container">
                    <div class="row section-row align-items-center">
                        <div class="col-lg-12">
                            {/* <!-- Section Title Start --> */}
                            <div class="section-title">
                                <h3 class="wow fadeInUp">our services</h3>
                                <h2 class="text-anime-style-3" data-cursor="-opaque">Comprehensive services for your health</h2>
                            </div>
                            {/* <!-- Section Title End --> */}
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Service Item Start --> */}
                            <div class="service-item wow fadeInUp">
                                {/* <!-- Service Header Start --> */}
                                <div class="service-header">
                                    {/* <!-- Service Item Box Start --> */}
                                    <div class="service-item-box">
                                        <div class="icon-box">
                                            <img src="images/icon-service-1.svg" alt="" />
                                        </div>
                                        <div class="service-item-content">
                                            <h3>urology</h3>
                                        </div>
                                    </div>
                                    {/* <!-- Service Item Box End --> */}

                                    {/* <!-- Service Readmore Start --> */}
                                    <div class="service-readmore">
                                        <a href="service-single.html"><img src="images/arrow-dark.svg" alt="" /></a>
                                    </div>
                                    {/* <!-- Service Readmore End --> */}
                                </div>
                                {/* <!-- Service Header End --> */}

                                {/* <!-- Service Body Start --> */}
                                <div class="service-body">
                                    <p>Our neurology department provides expert care for conditions affecting the brain, spine, and nervous system</p>
                                </div>
                                {/* <!-- Service Body End --> */}

                                {/* <!-- Service Image Start --> */}
                                <div class="service-image">
                                    <a href="service-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/service-img-1.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Service Image End --> */}
                            </div>
                            {/* <!-- Service Item End --> */}
                        </div>

                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Service Item Start --> */}
                            <div class="service-item wow fadeInUp" data-wow-delay="0.25s">
                                {/* <!-- Service Header Start --> */}
                                <div class="service-header">
                                    {/* <!-- Service Item Box Start --> */}
                                    <div class="service-item-box">
                                        <div class="icon-box">
                                            <img src="images/icon-service-2.svg" alt="" />
                                        </div>
                                        <div class="service-item-content">
                                            <h3>neurology</h3>
                                        </div>
                                    </div>
                                    {/* <!-- Service Item Box End --> */}

                                    {/* <!-- Service Readmore Start --> */}
                                    <div class="service-readmore">
                                        <a href="service-single.html"><img src="images/arrow-dark.svg" alt="" /></a>
                                    </div>
                                    {/* <!-- Service Readmore End --> */}
                                </div>
                                {/* <!-- Service Header End --> */}

                                {/* <!-- Service Body Start --> */}
                                <div class="service-body">
                                    <p>Our neurology department provides expert care for conditions affecting the brain, spine, and nervous system</p>
                                </div>
                                {/* <!-- Service Body End --> */}

                                {/* <!-- Service Image Start --> */}
                                <div class="service-image">
                                    <a href="service-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/service-img-2.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Service Image End --> */}
                            </div>
                            {/* <!-- Service Item End --> */}
                        </div>

                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Service Item Start --> */}
                            <div class="service-item wow fadeInUp" data-wow-delay="0.5s">
                                {/* <!-- Service Header Start --> */}
                                <div class="service-header">
                                    {/* <!-- Service Item Box Start --> */}
                                    <div class="service-item-box">
                                        <div class="icon-box">
                                            <img src="images/icon-service-3.svg" alt="" />
                                        </div>
                                        <div class="service-item-content">
                                            <h3>eye care</h3>
                                        </div>
                                    </div>
                                    {/* <!-- Service Item Box End --> */}

                                    {/* <!-- Service Readmore Start --> */}
                                    <div class="service-readmore">
                                        <a href="service-single.html"><img src="images/arrow-dark.svg" alt="" /></a>
                                    </div>
                                    {/* <!-- Service Readmore End --> */}
                                </div>
                                {/* <!-- Service Header End --> */}

                                {/* <!-- Service Body Start --> */}
                                <div class="service-body">
                                    <p>Our neurology department provides expert care for conditions affecting the brain, spine, and nervous system</p>
                                </div>
                                {/* <!-- Service Body End --> */}

                                {/* <!-- Service Image Start --> */}
                                <div class="service-image">
                                    <a href="service-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/service-img-3.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Service Image End --> */}
                            </div>
                            {/* <!-- Service Item End --> */}
                        </div>

                        <div class="col-lg-12">
                            {/* <!-- More Services Content Start --> */}
                            <div class="more-service-content">
                                <p class="wow fadeInUp" data-wow-delay="0.25s">From preventive care to specialized treatments, our wide range of services is designed to support your health at every stage.</p>
                                <a href="services.html" class="btn-default wow fadeInUp" data-wow-delay="0.5s">view all services</a>
                            </div>
                            {/* <!-- More Services Content End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Our Service Section End --> */}

            {/* <!-- Our Service Section Start --> */}
            <div class="our-team">
                <div class="container">
                    <div class="row section-row">
                        <div class="col-lg-12">
                            {/* <!-- Section Title Start --> */}
                            <div class="section-title">
                                <h3 class="wow fadeInUp">team members</h3>
                                <h2 class="text-anime-style-3" data-cursor="-opaque">Compassionate experts you can trust</h2>
                                <p class="wow fadeInUp" data-wow-delay="0.25s">Our team brings together a wealth of experience, passion, and a dedication to excellence in patient care.</p>
                            </div>
                            {/* <!-- Section Title End --> */}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            {/* <!-- Team Member Item Start --> */}
                            <div class="team-member-item wow fadeInUp">
                                {/* <!-- Team Image Start --> */}
                                <div class="team-image">
                                    <a href="doctor-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/team-1.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Team Image End --> */}

                                {/* <!-- Tema Body Start --> */}
                                <div class="team-body">
                                    {/* <!-- Team Social Icon Start --> */}
                                    <div class="team-social-icon">
                                        <ul>
                                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- Team Social Icon End --> */}
                                    {/* <!-- Team Content Start --> */}
                                    <div class="team-content">
                                        <h3><a href="doctor-single.html">dr. esther howard</a></h3>
                                        <p>ophthalmology</p>
                                    </div>
                                    {/* <!-- Team Content End --> */}
                                </div>
                                {/* <!-- Tema Body End --> */}
                            </div>
                            {/* <!-- Team Member Item End --> */}
                        </div>

                        <div class="col-lg-3 col-md-6">
                            {/* <!-- Team Member Item Start --> */}
                            <div class="team-member-item wow fadeInUp" data-wow-delay="0.2s">
                                {/* <!-- Team Image Start --> */}
                                <div class="team-image">
                                    <a href="doctor-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/team-2.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Team Image End --> */}

                                {/* <!-- Tema Body Start --> */}
                                <div class="team-body">
                                    {/* <!-- Team Social Icon Start --> */}
                                    <div class="team-social-icon">
                                        <ul>
                                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- Team Social Icon End --> */}
                                    {/* <!-- Team Content Start --> */}
                                    <div class="team-content">
                                        <h3><a href="doctor-single.html">dr. jenny wilson</a></h3>
                                        <p>anesthesiology</p>
                                    </div>
                                    {/* <!-- Team Content End --> */}
                                </div>
                                {/* <!-- Tema Body End --> */}
                            </div>
                            {/* <!-- Team Member Item End --> */}
                        </div>

                        <div class="col-lg-3 col-md-6">
                            {/* <!-- Team Member Item Start --> */}
                            <div class="team-member-item wow fadeInUp" data-wow-delay="0.4s">
                                {/* <!-- Team Image Start --> */}
                                <div class="team-image">
                                    <a href="doctor-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/team-3.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Team Image End --> */}

                                {/* <!-- Tema Body Start --> */}
                                <div class="team-body">
                                    {/* <!-- Team Social Icon Start --> */}
                                    <div class="team-social-icon">
                                        <ul>
                                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- Team Social Icon End --> */}
                                    {/* <!-- Team Content Start --> */}
                                    <div class="team-content">
                                        <h3><a href="doctor-single.html">dr. kristin watson</a></h3>
                                        <p>infectious disease</p>
                                    </div>
                                    {/* <!-- Team Content End --> */}
                                </div>
                                {/* <!-- Tema Body End --> */}
                            </div>
                            {/* <!-- Team Member Item End --> */}
                        </div>

                        <div class="col-lg-3 col-md-6">
                            {/* <!-- Team Member Item Start --> */}
                            <div class="team-member-item wow fadeInUp" data-wow-delay="0.6s">
                                {/* <!-- Team Image Start --> */}
                                <div class="team-image">
                                    <a href="doctor-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/team-4.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Team Image End --> */}

                                {/* <!-- Tema Body Start --> */}
                                <div class="team-body">
                                    {/* <!-- Team Social Icon Start --> */}
                                    <div class="team-social-icon">
                                        <ul>
                                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- Team Social Icon End --> */}
                                    {/* <!-- Team Content Start --> */}
                                    <div class="team-content">
                                        <h3><a href="doctor-single.html">dr. arlene mccoy</a></h3>
                                        <p>cardiology</p>
                                    </div>
                                    {/* <!-- Team Content End --> */}
                                </div>
                                {/* <!-- Tema Body End --> */}
                            </div>
                            {/* <!-- Team Member Item End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Our Services Section End --> */}

            {/* <!-- We Work Section Start --> */}
            <div class="we-work bg-section">
                <div class="container">
                    <div class="row section-row align-items-center">
                        <div class="col-lg-12">
                            {/* <!-- Section Title Start --> */}
                            <div class="section-title">
                                <h3 class="wow fadeInUp">how we work</h3>
                                <h2 class="text-anime-style-3" data-cursor="-opaque">We work to achieve better health outcomes</h2>
                                <p class="wow fadeInUp" data-wow-delay="0.25s">We are committed to improving health outcomes through personalized care, innovative treatments, and a focus on prevention.</p>
                            </div>
                            {/* <!-- Section Title End --> */}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            {/* <!-- Work Steps Box Start --> */}
                            <div class="work-steps-box">
                                {/* <!-- Work Step Item Start --> */}
                                <div class="work-step-item">
                                    <div class="work-step-image">
                                        <figure class="image-anime">
                                            <img src="images/work-step-img-1.jpg" alt="" />
                                        </figure>

                                        <div class="work-step-no">
                                            <h3>01</h3>
                                        </div>
                                    </div>
                                    <div class="work-step-content">
                                        <h3>Create Account</h3>
                                        <p>Join our community by creating an account today.</p>
                                    </div>
                                </div>
                                {/* <!-- Work Step Item End --> */}

                                {/* <!-- Work Step Item Start --> */}
                                <div class="work-step-item">
                                    <div class="work-step-image">
                                        <figure class="image-anime">
                                            <img src="images/work-step-img-2.jpg" alt="" />
                                        </figure>

                                        <div class="work-step-no">
                                            <h3>02</h3>
                                        </div>
                                    </div>
                                    <div class="work-step-content">
                                        <h3>search doctor</h3>
                                        <p>Join our community by creating an account today.</p>
                                    </div>
                                </div>
                                {/* <!-- Work Step Item End --> */}

                                {/* <!-- Work Step Item Start --> */}
                                <div class="work-step-item">
                                    <div class="work-step-image">
                                        <figure class="image-anime">
                                            <img src="images/work-step-img-3.jpg" alt="" />
                                        </figure>

                                        <div class="work-step-no">
                                            <h3>03</h3>
                                        </div>
                                    </div>
                                    <div class="work-step-content">
                                        <h3>schedule appointment</h3>
                                        <p>Join our community by creating an account today.</p>
                                    </div>
                                </div>
                                {/* <!-- Work Step Item End --> */}

                                {/* <!-- Work Step Item Start --> */}
                                <div class="work-step-item">
                                    <div class="work-step-image">
                                        <figure class="image-anime">
                                            <img src="images/work-step-img-4.jpg" alt="" />
                                        </figure>

                                        <div class="work-step-no">
                                            <h3>04</h3>
                                        </div>
                                    </div>
                                    <div class="work-step-content">
                                        <h3>start consultation</h3>
                                        <p>Join our community by creating an account today.</p>
                                    </div>
                                </div>
                                {/* <!-- Work Step Item End --> */}
                            </div>
                            {/* <!-- Work Steps Box End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- We Work Section End --> */}


            {/* <!-- Intro Video Section Start --> */}
            <div class="intro-video">
                <div class="container">
                    <div class="row section-row align-items-center">
                        <div class="col-lg-7">
                            {/* <!-- Section Title Start --> */}
                            <div class="section-title">
                                <h3 class="wow fadeInUp">why choose us</h3>
                                <h2 class="text-anime-style-3" data-cursor="-opaque">Why patients trust us with their care</h2>
                                <p class="wow fadeInUp" data-wow-delay="0.25s">Our commitment to excellence, compassion, and personalized treatment has earned the trust of countless patients. Discover what sets our care apart. Discover what sets our care apart.</p>
                            </div>
                            {/* <!-- Section Title End --> */}
                        </div>

                        <div class="col-lg-5">
                            {/* <!-- Why Choose List Start --> */}
                            <div class="why-choose-list wow fadeInUp">
                                <ul>
                                    <li>We offer flexible hours to fit your busy schedule.</li>
                                    <li>Team is committed to making you feel comfortable.</li>
                                    <li>We ensure you receive prompt and effective care.</li>
                                    <li>Helping you manage your health at every stage of life.</li>
                                </ul>
                            </div>
                            {/* <!-- Why Choose List End --> */}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            {/* <!-- Intro Video Image Start --> */}
                            <div class="intro-video-box">
                                {/* <!-- Intro Image Start --> */}
                                <div class="intro-video-image">
                                    <figure>
                                        <img src="images/intro-video-bg.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* <!-- Intro Image End --> */}

                                {/* <!-- Video Play Button Start --> */}
                                <div class="video-play-button">
                                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" class="popup-video" data-cursor-text="Play"><img src="images/icon-play.svg" alt="" /></a>
                                </div>
                                {/* <!-- Video Play Button End --> */}

                                <div class="why-choose-box">
                                    {/* <!-- Why Choose Item Start --> */}
                                    <div class="why-choose-item wow fadeInUp">
                                        <div class="icon-box">
                                            <img src="images/icon-why-choose-1.svg" alt="" />
                                        </div>
                                        <div class="why-choose-item-content">
                                            <h3>50+ Expert Doctor</h3>
                                            <p>Our team includes over 50 highly skilled doctors.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Why Choose Item End --> */}

                                    {/* <!-- Why Choose Item Start --> */}
                                    <div class="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                                        <div class="icon-box">
                                            <img src="images/icon-why-choose-2.svg" alt="" />
                                        </div>
                                        <div class="why-choose-item-content">
                                            <h3>24/7 Instant Support</h3>
                                            <p>Our team includes over 50 highly skilled doctors.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Why Choose Item End --> */}

                                    {/* <!-- Why Choose Item Start --> */}
                                    <div class="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="icon-box">
                                            <img src="images/icon-why-choose-3.svg" alt="" />
                                        </div>
                                        <div class="why-choose-item-content">
                                            <h3>Expert Medical Team</h3>
                                            <p>Our team includes over 50 highly skilled doctors.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Why Choose Item End --> */}
                                </div>
                            </div>
                            {/* <!-- Intro Video Btn End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Intro Video Section End --> */}


            {/* <!-- Our Faqs Section Start --> */}
            <div class="our-faqs bg-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="our-faqs-content">
                                {/* <!-- Section Title Start --> */}
                                <div class="section-title">
                                    <h3 class="wow fadeInUp">frequently asked questions</h3>
                                    <h2 class="text-anime-style-3" data-cursor="-opaque">Helping you understand healthcare</h2>
                                    <p class="wow fadeInUp" data-wow-delay="0.25s">Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.</p>
                                </div>
                                {/* <!-- Section Title End --> */}

                                {/* <!-- Faq CTA Box Start --> */}
                                <div class="faq-cta-box wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="icon-box">
                                        <img src="images/icon-faq-cta.svg" alt="" />
                                    </div>
                                    <div class="faq-cta-content">
                                        <p>We always take care of your smile</p>
                                        <h3>24/7 Emergency</h3>
                                        <p><a href="tel:659888589">659-888-589</a></p>
                                    </div>
                                </div>
                                {/* <!-- Faq CTA Box End --> */}
                            </div>
                        </div>

                        <div class="col-lg-6">
                            {/* <!-- FAQ Accordion Start --> */}
                            <div class="faq-accordion" id="faqaccordion">
                                {/* <!-- FAQ Item Start --> */}
                                <div class="accordion-item wow fadeInUp">
                                    <h2 class="accordion-header" id="heading1">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            What should I bring to my first appointment?
                                        </button>
                                    </h2>
                                    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                                        <div class="accordion-body">
                                            <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- FAQ Item End --> */}

                                {/* <!-- FAQ Item Start --> */}
                                <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 class="accordion-header" id="heading2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            How do I schedule an appointment?
                                        </button>
                                    </h2>
                                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                        <div class="accordion-body">
                                            <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- FAQ Item End --> */}

                                {/* <!-- FAQ Item Start --> */}
                                <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 class="accordion-header" id="heading3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            What insurance plan do you accept?
                                        </button>
                                    </h2>
                                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                                        <div class="accordion-body">
                                            <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- FAQ Item End --> */}

                                {/* <!-- FAQ Item Start --> */}
                                <div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 class="accordion-header" id="heading4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Can I get a prescription refill without an appointment?
                                        </button>
                                    </h2>
                                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                                        <div class="accordion-body">
                                            <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- FAQ Item End --> */}

                                {/* <!-- FAQ Item Start --> */}
                                <div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 class="accordion-header" id="heading5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                            What should I expect during my first visit?
                                        </button>
                                    </h2>
                                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
                                        <div class="accordion-body">
                                            <p>Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- FAQ Item End -->                     */}

                                {/* <!-- FAQ Item Start --> */}
                                <div class="accordion-item wow fadeInUp" data-wow-delay="1s">
                                    <h2 class="accordion-header" id="heading6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                            How are treatment plans customized for individual needs?
                                        </button>
                                    </h2>
                                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqaccordion">
                                        <div class="accordion-body">
                                            <p>Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- FAQ Item End --> */}
                            </div>
                            {/* <!-- FAQ Accordion End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Our Faqs Section End --> */}


            {/* <!-- Our Health Section Start --> */}
            <div class="our-health">
                <div class="container">
                    <div class="row section-row align-items-center">
                        <div class="col-lg-12">
                            {/* <!-- Section Title Start --> */}
                            <div class="section-title">
                                <h3 class="wow fadeInUp">our numbers</h3>
                                <h2 class="text-anime-style-3" data-cursor="-opaque">Health is wealth, and the medical field</h2>
                                <p class="wow fadeInUp" data-wow-delay="0.25s">Excellence in healthcare is our standard, and our numbers back it up. From patient satisfaction rates to successful treatment outcomes.</p>
                            </div>
                            {/* <!-- Section Title End --> */}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            {/* <!-- Our Health Boxes Start --> */}
                            <div class="our-health-boxes">
                                {/* <!-- Our Health Item Start --> */}
                                <div class="our-health-item health-box-1">
                                    <div class="health-item-content">
                                        <img src="images/icon-health-item-1.svg" alt="" />
                                        <h3>Your Health, Our Priority in Wellcare</h3>
                                        <a href="#" class="btn-default">read more</a>
                                    </div>
                                    <div class="health-item-image">
                                        <img src="images/health-item-img-1.png" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Our Health Item End --> */}

                                {/* <!-- Our Health Item Start --> */}
                                <div class="our-health-image health-box-2">
                                    <figure class="image-anime ">
                                        <img src="images/health-item-img-2.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* <!-- Our Health Item End --> */}

                                {/* <!-- Our Health Item Start --> */}
                                <div class="our-health-image health-box-3">
                                    <figure class="image-anime ">
                                        <img src="images/health-item-img-3.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* <!-- Our Health Item End --> */}

                                {/* <!-- Our Health Item Start --> */}
                                <div class="our-health-item health-box-4">
                                    <div class="health-item-content">
                                        <img src="images/icon-health-item-2.svg" alt="" />
                                        <h3><span class="counter">58</span>M+ Happy Clients</h3>
                                    </div>
                                    <div class="happy-client-images">
                                        <div class="happy-client-img">
                                            <figure class="image-anime ">
                                                <img src="images/happy-client-img-1.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="happy-client-img">
                                            <figure class="image-anime ">
                                                <img src="images/happy-client-img-2.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="happy-client-img">
                                            <figure class="image-anime ">
                                                <img src="images/happy-client-img-3.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="happy-client-img">
                                            <figure class="image-anime ">
                                                <img src="images/happy-client-img-4.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="happy-client-img add-more">
                                            <figure>
                                                <a href="#"><i class="fa-solid fa-plus"></i></a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Our Health Item End --> */}

                                {/* <!-- Our Health Item Start --> */}
                                <div class="our-health-item health-box-5">
                                    <div class="health-item-content">
                                        <h3>Healing Starts Here Caring for You Always</h3>
                                        <a href="#" class="learn-btn">learn more</a>
                                    </div>
                                    <div class="health-item-image">
                                        <img src="images/health-item-img-4.png" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Our Health Item End --> */}
                            </div>
                            {/* <!-- Our Health Boxes End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Our Health Section End --> */}



            {/* <!-- Latest News Section Start --> */}
            <div class="latest-news">
                <div class="container">
                    <div class="row section-row align-items-center">
                        <div class="col-lg-12">
                            {/* <!-- Section Title Start --> */}
                            <div class="section-title">
                                <h3 class="wow fadeInUp">latest news</h3>
                                <h2 class="text-anime-style-3" data-cursor="-opaque">Health updates you need to know</h2>
                                <p class="wow fadeInUp" data-wow-delay="0.2s">Get the latest information on health topics, wellness tips, and advancements in patient care.</p>
                            </div>
                            {/* <!-- Section Title End --> */}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Post Item Start --> */}
                            <div class="post-item wow fadeInUp">
                                {/* <!-- Post Featured Image Start--> */}
                                <div class="post-featured-image">
                                    <a href="blog-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/post-1.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Post Featured Image End --> */}

                                {/* <!-- Post Item Body Start --> */}
                                <div class="post-item-body">
                                    {/* <!-- Post Item Tag Start --> */}
                                    <div class="post-item-meta">
                                        <ul>
                                            <li><a href="blog-single.html">by joseph</a></li>
                                            <li>december 3, 2024</li>
                                        </ul>
                                    </div>
                                    {/* <!-- Post Item Tag End --> */}

                                    {/* <!-- Post Item Content Start --> */}
                                    <div class="post-item-content">
                                        <h2><a href="blog-single.html">Research Breakthrough in Heart Disease Treatment</a></h2>
                                    </div>
                                    {/* <!-- Post Item Content End --> */}

                                    {/* <!-- Post Item Button Start--> */}
                                    <div class="post-item-btn">
                                        <a href="blog-single.html" class="readmore-btn">Read more</a>
                                    </div>
                                    {/* <!-- Post Item Button End--> */}
                                </div>
                                {/* <!-- Post Item Body End --> */}
                            </div>
                            {/* <!-- Post Item End --> */}
                        </div>

                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Post Item Start --> */}
                            <div class="post-item wow fadeInUp" data-wow-delay="0.2s">
                                {/* <!-- Post Featured Image Start--> */}
                                <div class="post-featured-image">
                                    <a href="blog-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/post-2.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Post Featured Image End --> */}

                                {/* <!-- Post Item Body Start --> */}
                                <div class="post-item-body">
                                    {/* <!-- Post Item Tag Start --> */}
                                    <div class="post-item-meta">
                                        <ul>
                                            <li><a href="blog-single.html">by joseph</a></li>
                                            <li>december 1, 2024</li>
                                        </ul>
                                    </div>
                                    {/* <!-- Post Item Tag End --> */}

                                    {/* <!-- Post Item Content Start --> */}
                                    <div class="post-item-content">
                                        <h2><a href="blog-single.html">Advanced Medical Solutions for Every Patient's Needs</a></h2>
                                    </div>
                                    {/* <!-- Post Item Content End --> */}

                                    {/* <!-- Post Item Button Start--> */}
                                    <div class="post-item-btn">
                                        <a href="blog-single.html" class="readmore-btn">Read more</a>
                                    </div>
                                    {/* <!-- Post Item Button End--> */}
                                </div>
                                {/* <!-- Post Item Body End --> */}
                            </div>
                            {/* <!-- Post Item End --> */}
                        </div>

                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Post Item Start --> */}
                            <div class="post-item wow fadeInUp" data-wow-delay="0.4s">
                                {/* <!-- Post Featured Image Start--> */}
                                <div class="post-featured-image">
                                    <a href="blog-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/post-3.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                {/* <!-- Post Featured Image End --> */}

                                {/* <!-- Post Item Body Start --> */}
                                <div class="post-item-body">
                                    {/* <!-- Post Item Tag Start --> */}
                                    <div class="post-item-meta">
                                        <ul>
                                            <li><a href="blog-single.html">by joseph</a></li>
                                            <li>november 30, 2024</li>
                                        </ul>
                                    </div>
                                    {/* <!-- Post Item Tag End --> */}

                                    {/* <!-- Post Item Content Start --> */}
                                    <div class="post-item-content">
                                        <h2><a href="blog-single.html">Your Trusted Partner in Comprehensive Medical Care</a></h2>
                                    </div>
                                    {/* <!-- Post Item Content End --> */}

                                    {/* <!-- Post Item Button Start--> */}
                                    <div class="post-item-btn">
                                        <a href="blog-single.html" class="readmore-btn">Read more</a>
                                    </div>
                                    {/* <!-- Post Item Button End--> */}
                                </div>
                                {/* <!-- Post Item Body End --> */}
                            </div>
                            {/* <!-- Post Item End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Latest News Section End --> */}

            {/* <!-- CTA Section Start --> */}
            <div class="cta-section bg-section mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-3 col-6 order-lg-1 order-md-1 order-2">
                            {/* <!-- CTA Box img 1 Start --> */}
                            <div class="cta-img-1">
                                <img src="images/cta-img-1.png" alt="" />
                            </div>
                            {/* <!-- CTA Box img 1 End --> */}
                        </div>

                        <div class="col-lg-4 col-md-6 order-lg-2 order-md-2 order-1">
                            {/* <!-- CTA Box Content Start --> */}
                            <div class="cta-box-content">
                                {/* <!-- Section Title Start --> */}
                                <div class="section-title">
                                    <h2 class="text-anime-style-3" data-cursor="-opaque">Take the first step to better health</h2>
                                </div>
                                {/* <!-- Section Title End --> */}

                                {/* <!-- CTA Box Button Start --> */}
                                <div class="cta-box-btn wow fadeInUp" data-wow-delay="0.25s">
                                    <a href="book-appointment.html" class="btn-default">Book a appointment now</a>
                                </div>
                                {/* <!-- CTA Box Button End --> */}

                                {/* <!-- CTA Box Text Start --> */}
                                <div class="cta-box-text wow fadeInUp" data-wow-delay="0.5s">
                                    <p>It only <span>takes 2 minutes</span> to complete</p>
                                </div>
                                {/* <!-- CTA Box Text End --> */}
                            </div>
                            {/* <!-- CTA Box Content End --> */}
                        </div>

                        <div class="col-lg-4 col-md-3 col-6 order-lg-3 order-md-3 order-3">
                            {/* <!-- CTA Box img 2 Start --> */}
                            <div class="cta-img-2">
                                <img src="images/cta-img-2.png" alt="" />
                            </div>
                            {/* <!-- CTA Box img 2 End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- CTA Section End --> */}

            <Footer />

        </>
    )
}

export default Home