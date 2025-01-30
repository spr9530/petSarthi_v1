import React from 'react';

function DoctorCard() {
    return (
        <div className="col-lg-4 col-md-6">
            <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.2s"
                style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}
            >
                <div className="service-header">
                    <div className="service-item-box">
                        <div className="icon-box">
                            <img
                                src="images/doctor.jpg"
                                alt="Doctor"
                                style={{
                                    borderRadius: '50%',
                                    width: '80px',
                                    height: '80px',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <div className="service-item-content">
                            <h3>Dr. Cristino Murphy</h3>
                            <p>M.B.B.S, Gynecologist</p>
                        </div>
                    </div>
                    <div className="service-readmore">
                        <i
                            className="fas fa-heart"
                            style={{ color: '#f05a5a', fontSize: '1.5rem', cursor: 'pointer' }}
                        ></i>
                    </div>
                </div>

                <div>
                    <img src="https://doctris-landing.vercel.app/static/media/03.b192aca452235f61b392.jpg" alt="Service Icon" />
                </div>

                <div className="service-body">
                    <div className="d-flex align-items-center mb-2">
                        <div className="star-rating me-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <span className="ms-auto">5 Star</span>
                    </div>
                    <p>63, PG Shustoke, UK</p>
                    <p>Mon: 2:00 PM - 6:00 PM</p>
                    <p>$75 USD / Visit</p>
                </div>

                <div className="service-image d-flex justify-content-between mt-3">
                    <a href="#" className="text-primary">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-primary">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-primary">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-primary">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DoctorCard;
