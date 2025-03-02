import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DoctorCard from '../components/DoctorCard'

function Contact() {
  return (
    <>
    <div class="page-header bg-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header-box">
                        <h1 class="text-anime-style-3" data-cursor="-opaque">Contact us</h1>
                        <nav class="wow fadeInUp" data-wow-delay="0.25s">
                            
                        </nav>
                    </div>
                </div>
            </div>
        </div>	
	</div>

    <div class="page-contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact-us-box">
                        <div class="contact-info-box">
                            <div class="contact-info-list">
                                <div class="contact-info-item wow fadeInUp">
                                    <div class="icon-box">
                                        <img src="images/icon-phone.svg" alt=""/>
                                    </div>

                                    <div class="contact-info-content">
                                        <h3>contact details</h3>
                                        <p>+01-787-582-568</p>
                                    </div>
                                </div>

                                <div class="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                                    <div class="icon-box">
                                        <img src="images/icon-location.svg" alt=""/>
                                    </div>

                                    <div class="contact-info-content">
                                        <h3>address</h3>
                                        <p>403, Port Washington Road, Canada</p>
                                    </div>
                                </div>

                                <div class="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="icon-box">
                                        <img src="images/icon-mail.svg" alt=""/>
                                    </div>

                                    <div class="contact-info-content">
                                        <h3>email us</h3>
                                        <p>info@domain.com</p>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-social-list wow fadeInUp" data-wow-delay="0.75s">
                                <span>follow us:</span>
                                    <ul>
                                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    </ul>
                            </div>
                        </div>

                        <div class="contact-us-form">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">contact us</h3>
                                <h2 class="text-anime-style-3" data-cursor="-opaque">Reach out for questions</h2>
                                <p class="wow fadeInUp" data-wow-delay="0.25s">We take the time to understand your individual needs and goals, creating customized treatment plans to help you achieve optimal oral health.</p>
                            </div>

                            <div class="contact-form">
                                <form id="contactForm" action="#" method="POST" data-toggle="validator" class="wow fadeInUp" data-wow-delay="0.25s">
                                    <div class="row">
                                        <div class="form-group col-md-12 mb-4">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Enter Your Name" required/>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="form-group col-md-6 mb-4">
                                            <input type="email" name ="email" class="form-control" id="email" placeholder="Enter Your Email" required/>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="form-group col-md-6 mb-4">
                                            <input type="text" name="phone" class="form-control" id="phone" placeholder="Enter Your Number" required/>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="form-group col-md-12 mb-5">
                                            <textarea name="message" class="form-control" id="message" rows="4" placeholder="Write Message.."></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="col-md-12">
                                            <button type="submit" class="btn-default">submit now</button>
                                            <div id="msgSubmit" class="h3 hidden"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <DoctorCard/> */}


    </>
  )
}

export default Contact