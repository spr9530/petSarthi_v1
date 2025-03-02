import React from "react";

function DoctorProfile() {
  return (
    <>
      <div className="page-doctor-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="doctor-single-sidebar">
                <div
                  className="doctor-sidebar-box wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="doctor-sidebar-image">
                    <figure className="image-anime">
                      <img src="/images/team-1.jpg" alt="Doctor" />
                    </figure>
                  </div>

                  <div className="doctor-sidebar-body">
                    <ul>
                      <li>
                        <span>name:</span> Dr. Esther Howard
                      </li>
                      <li>
                        <span>position:</span> Psychologist
                      </li>
                      <li>
                        <span>phone:</span> +91-123 456 7890
                      </li>
                      <li>
                        <span>e-mail:</span> info@domain.com
                      </li>
                      <li>
                        <span>experience:</span> 16 years
                      </li>
                    </ul>
                  </div>

                  <div className="doctor-sidebar-footer">
                    <span>follow us:</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="doctor-single-content">
                <div className="doctor-single-entry">
                  <div className="doctor-member-info">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      Personal biography
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      Dr. Esther Howard is a highly experienced Psychologist
                      with over 12 years of expertise in diagnosing and treating
                      a wide range of mental health conditions. She specializes
                      in cognitive-behavioral therapy (CBT), trauma recovery,
                      and mindfulness techniques, offering tailored support for
                      individuals dealing with anxiety, depression, and life
                      transitions.
                    </p>
                  </div>

                  <div className="doctor-member-experience">
                    <div className="member-experience-info">
                      <h2 className="text-anime-style-3" data-cursor="-opaque">
                        My experience
                      </h2>

                      <div
                        className="member-experience-info-item wow fadeInUp"
                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                      >
                        <h3>Graduate Intern - 2013 - 2020</h3>
                        <p>
                          At Institution Name focused on family counseling and
                          conflict resolution techniques.
                        </p>
                      </div>

                      <div
                        className="member-experience-info-item wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <h3>Licensed Psychologist - 2020 - Present</h3>
                        <p>
                          At Institution Name focused on family counseling and
                          conflict resolution techniques.
                        </p>
                      </div>
                    </div>

                    <div className="doctor-member-skills">
                      <h2 className="text-anime-style-3" data-cursor="-opaque">
                        My skills
                      </h2>

                      <div className="skills-progress-bar">
                        <div className="skillbar" data-percent="56%">
                          <div className="skill-data">
                            <div className="skill-title">Psychologist</div>
                            <div className="skill-no">56%</div>
                          </div>
                          <div className="skill-progress">
                            <div className="count-bar" style={{ width: "56%" }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="skills-progress-bar">
                        <div className="skillbar" data-percent="89%">
                          <div className="skill-data">
                            <div className="skill-title">Success Case</div>
                            <div className="skill-no">89%</div>
                          </div>
                          <div className="skill-progress">
                            <div className="count-bar" style={{ width: "89%" }}></div>
                          </div>
                        </div>
                      </div>

                      

                      <div className="skills-progress-bar">
                        <div className="skillbar" data-percent="85%">
                          <div className="skill-data">
                            <div className="skill-title">Therapy Specialist</div>
                            <div className="skill-no">85%</div>
                          </div>
                          <div className="skill-progress">
                            <div className="count-bar" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="doctor-member-expertise">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      My expertise area & features
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      Esther specializes in cognitive-behavioral therapy (CBT),
                      trauma recovery, and mindfulness techniques, offering
                      tailored support for individuals dealing with anxiety,
                      depression, and life transitions.
                    </p>

                    <ul
                      className="wow fadeInUp"
                      data-wow-delay="0.4s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.4s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <li>Experienced professionals</li>
                      <li>Client-centered approach</li>
                      <li>Safe and confidential environment</li>
                      <li>Commitment to growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>

  );
}

export default DoctorProfile;
