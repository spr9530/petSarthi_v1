import React from 'react';

function DoctorCard() {
    return (
        // <div className="col-lg-4 col-md-6">
        //     <div
        //         className="service-item wow fadeInUp"
        //         data-wow-delay="0.2s"
        //         style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp', 
        //             boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        //          }}
        //     >
        //         <div className="service-header">
        //             <div className="service-item-box">
        //                 <div className="icon-box">
        //                     <img
        //                         src="images/doctor.jpg"
        //                         alt="Doctor"
        //                         style={{
        //                             borderRadius: '50%',
        //                             width: '80px',
        //                             height: '80px',
        //                             objectFit: 'cover',
        //                         }}
        //                     />
        //                 </div>
        //                 <div className="service-item-content">
        //                     <h3>Dr. Cristino Murphy</h3>
        //                     <p class="mb-0">M.B.B.S, Gynecologist</p>
        //                 </div>
        //             </div>
        //             <div className="service-readmore">
        //                 <i
        //                     className="fas fa-heart"
        //                     style={{ color: '#f05a5a', fontSize: '1.5rem', cursor: 'pointer' }}
        //                 ></i>
        //             </div>
        //         </div>

        //         <div className='d-flex justify-content-center'>
        //             <img src="https://doctris-landing.vercel.app/static/media/03.b192aca452235f61b392.jpg" style={{height: '250px'}} height="270px" alt="Service Icon" />
        //         </div>

        //         <div className="service-body">
        //             <div className="d-flex align-items-center mb-2">
        //                 <div className="star-rating me-2">
        //                     <i className="fas fa-star" style={{color:"#FFB300"}}></i>
        //                     <i className="fas fa-star" style={{color: "#FFB300"}}></i>
        //                     <i className="fas fa-star" style={{color: "#FFB300"}}></i>
        //                     <i className="fas fa-star" style={{color: "#FFB300"}}></i>
        //                     <i className="fas fa-star" style={{color: "#FFB300"}}></i>
        //                 </div>
        //                 <span className="ms-auto">5 Star</span>
        //             </div>
        //             <p>63, PG Shustoke, UK</p>
        //             <p>Mon: 2:00 PM - 6:00 PM</p>
        //             <p>$75 USD / Visit</p>
        //         </div>

        //         <div className="service-image d-flex justify-content-between mt-3">
        //             <a href="#" className="text-primary">
        //                 <i className="fab fa-facebook-f"></i>
        //             </a>
        //             <a href="#" className="text-primary">
        //                 <i className="fab fa-linkedin-in"></i>
        //             </a>
        //             <a href="#" className="text-primary">
        //                 <i className="fab fa-twitter"></i>
        //             </a>
        //             <a href="#" className="text-primary">
        //                 <i className="fas fa-envelope"></i>
        //             </a>
        //         </div>
        //     </div>
        // </div>
        <>
            <div class="row card d-flex flex-column py-3">
                <div className='d-flex flex-row'>
                    <div class="banner col-3">

                        <img src="images/team-2.jpg" alt="" />

                    </div>
                    <div class="col-8 px-2">

                        <h2 class="name">Morgan Sweeney</h2>
                            <div class="title">Ant Collector</div>
                            <div class="d-flex w-full ">
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span><b>4.9</b></span>
                            </div>
                        <div className='p-2 '>
                            <div className='doctor-highlight'>
                                <ul className='row d-flex flex-wrap'>
                                    <li className='col-md-6'>abcdejf</li>
                                    <li className='col-md-6'>abcdejf</li>
                                    <li className='col-md-6'>abcdejf</li>
                                    <li className='col-md-6'>abcdejf</li>
                                    <li className='col-md-6'>abcdejf</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="actions ">
                    <div class="follow-btn row justify-content-center">
                        <button className='btn-default' style={{ color: 'white' }}>Book Now</button>
                    </div>
                </div>
            </div>

        </>


    );
}

export default DoctorCard;
