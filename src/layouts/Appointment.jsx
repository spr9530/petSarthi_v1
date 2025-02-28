import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DoctorCard from '../components/DoctorCard';

function Appointment() {
    return (
        <>
            <Header />
            <div className="our-approach bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="our-approach-img">
                                <figure
                                    className="image-anime reveal"
                                    style={{ transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }}
                                >
                                    <img
                                        src="images/our-approach-img.jpg"
                                        alt=""
                                        style={{ transform: 'translate(0px, 0px)' }}
                                    />
                                </figure>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="our-approach-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                        our approach
                                    </h3>
                                    <h2
                                        className="text-anime-style-3"
                                        data-cursor="-opaque"
                                        style={{ perspective: '400px' }}
                                    >
                                        <div
                                            className="split-line"
                                            style={{ display: 'block', textAlign: 'start', position: 'relative' }}
                                        >
                                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                                Providing
                                            </div>{' '}
                                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                                personalized
                                            </div>{' '}
                                            <div style={{ position: 'relative', display: 'inline-block' }}>healthcare</div>
                                        </div>
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay="0.25s"
                                        style={{ visibility: 'visible', animationDelay: '0.25s', animationName: 'fadeInUp' }}
                                    >
                                        We focus on personalized care to meet your unique needs, combining innovation and
                                        compassion for a truly patient-centered approach.
                                    </p>
                                </div>

                                <div className="vision-mission-box tab-content" id="missionvision">
                                    <div className="vision-mission-nav">
                                        <ul className="nav nav-tabs" id="mvTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="remodeling-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#vision"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    our vision
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="installation-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#mission"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    our mission
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="value-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#value"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    our value
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="value-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#value"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Type
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="value-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#value"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Type
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="custom-card">
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <div className="icon-text">
                                                            <i className="bi bi-geo-alt-fill"></i>
                                                            <div style={{ width: '100%' }}>
                                                                <label for="location" className="form-label">📍 Location</label>
                                                                <select id="location" className="form-select">
                                                                    <option selected>New York, USA</option>
                                                                    <option value="1">London, UK</option>
                                                                    <option value="2">Paris, France</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="icon-text">
                                                            <i className="bi bi-calendar-event-fill"></i>
                                                            <div style={{ width: '100%' }}>
                                                                <label for="checkIn" className="form-label">🗓️ Check In</label>
                                                                <input
                                                                    type="date"
                                                                    id="checkIn"
                                                                    className="form-control"
                                                                    value="2025-01-31"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="mt-3 text-center">
                                                    <button className="btn btn-dark custom-btn">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className="row d-flex justify-content-center">
                <h2 className='text-center'>Filters</h2>
                <div className="vision-mission-nav text-center">
                                        <ul className="nav nav-tabs" id="mvTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="remodeling-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#vision"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    our vision
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="installation-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#mission"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    our mission
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="value-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#value"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    our value
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="value-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#value"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Type
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="value-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#value"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Type
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                </div>
            </div>

            <TeamSection />

            <Footer />
        </>
    );
}

export default Appointment;


const TeamSection = () => {
    const teamMembers = [
      { name: "Dr. Esther Howard", specialty: "Ophthalmology", image: "images/team-1.jpg" },
      { name: "Dr. Jenny Wilson", specialty: "Anesthesiology", image: "images/team-2.jpg" },
      { name: "Dr. Kristin Watson", specialty: "Infectious Disease", image: "images/team-3.jpg" },
      { name: "Dr. Arlene McCoy", specialty: "Cardiology", image: "images/team-4.jpg" },
      { name: "Dr. Michael Johnson", specialty: "Orthopedics", image: "images/team-5.jpg" },
      { name: "Dr. Sarah Lee", specialty: "Pediatrics", image: "images/team-6.jpg" },
      { name: "Dr. James Smith", specialty: "Neurology", image: "images/team-7.jpg" },
      { name: "Dr. Rachel Davis", specialty: "Dermatology", image: "images/team-8.jpg" },
    ];
  
    return (
      <div className="page-team">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="team-member-item wow fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="team-image">
                    <a href="doctor-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src={member.image} alt={member.name} />
                      </figure>
                    </a>
                  </div>
                  <div className="team-body">
                    <div className="team-social-icon">
                      <ul>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3><a href="doctor-single.html">{member.name}</a></h3>
                      <p>{member.specialty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
