import React from 'react'

function DoctorAppointment() {
    return (
        <>

            <div class="col-lg-8 col-xl-9">
                <div class="dashboard-header">
                    <h3>Appointments</h3>
                    <ul class="header-list-btns">
                        <li>
                            <div class="input-block dash-search-input">
                                <input type="text" class="form-control" placeholder="Search" />
                                <span class="search-icon"><i class="isax isax-search-normal"></i></span>
                            </div>
                        </li>
                        <li>
                            <div class="view-icons">
                                <a href="https://doccure.dreamstechnologies.com/html/template/appointments.html" class="active"><i class="isax isax-grid-7"></i></a>
                            </div>
                        </li>
                        <li>
                            <div class="view-icons">
                                <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointments-grid.html"><i class="fa-solid fa-th"></i></a>
                            </div>
                        </li>
                        <li>
                            <div class="view-icons">
                                <a href="#"><i class="isax isax-calendar-tick"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="appointment-tab-head">
                    <div class="appointment-tabs">
                        <ul class="nav nav-pills inner-tab " id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-upcoming-tab" data-bs-toggle="pill" data-bs-target="#pills-upcoming" type="button" role="tab" aria-controls="pills-upcoming" aria-selected="false">Upcoming<span>21</span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-cancel-tab" data-bs-toggle="pill" data-bs-target="#pills-cancel" type="button" role="tab" aria-controls="pills-cancel" aria-selected="true">Cancelled<span>16</span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-complete-tab" data-bs-toggle="pill" data-bs-target="#pills-complete" type="button" role="tab" aria-controls="pills-complete" aria-selected="true">Completed<span>214</span></button>
                            </li>
                        </ul>
                    </div>
                    <div class="filter-head">
                        <div class="position-relative daterange-wraper me-2">
                            <div class="input-groupicon calender-input">
                                <input type="text" class="form-control  date-range bookingrange" placeholder="From Date - To Date " />
                            </div>
                            <i class="isax isax-calendar-1"></i>
                        </div>
                        <div class="form-sorts dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" id="table-filter"><i class="isax isax-filter me-2"></i>Filter By</a>
                            <div class="filter-dropdown-menu">
                                <div class="filter-set-view">
                                    <div class="accordion" id="accordionExample">
                                        <div class="filter-set-content">
                                            <div class="filter-set-content-head">
                                                <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Name<i class="fa-solid fa-chevron-right"></i></a>
                                            </div>
                                            <div class="filter-set-contents accordion-collapse collapse show" id="collapseTwo" data-bs-parent="#accordionExample">
                                                <ul>
                                                    <li>
                                                        <div class="input-block dash-search-input w-100">
                                                            <input type="text" class="form-control" placeholder="Search" />
                                                            <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="filter-set-content">
                                            <div class="filter-set-content-head">
                                                <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Appointment Type<i class="fa-solid fa-chevron-right"></i></a>
                                            </div>
                                            <div class="filter-set-contents accordion-collapse collapse show" id="collapseOne" data-bs-parent="#accordionExample">
                                                <ul>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" checked />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">All Type</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">Video Call</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">Audio Call</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">Chat</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">Direct Visit</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="filter-set-content">
                                            <div class="filter-set-content-head">
                                                <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Visit Type<i class="fa-solid fa-chevron-right"></i></a>
                                            </div>
                                            <div class="filter-set-contents accordion-collapse collapse show" id="collapseThree" data-bs-parent="#accordionExample">
                                                <ul>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" checked />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">All Visit</span>
                                                            </label>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">General</span>
                                                            </label>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">Consultation</span>
                                                            </label>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">Follow-up</span>
                                                            </label>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div class="filter-checks">
                                                            <label class="checkboxs">
                                                                <input type="checkbox" />
                                                                <span class="checkmarks"></span>
                                                                <span class="check-title">Direct Visit</span>
                                                            </label>
                                                        </div>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="filter-reset-btns">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/appointments.html" class="btn btn-light">Reset</a>
                                        <a href="https://doccure.dreamstechnologies.com/html/template/appointments.html" class="btn btn-primary">Filter Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-content appointment-tab-content">
                    <div class="tab-pane fade show active" id="pills-upcoming" role="tabpanel" aria-labelledby="pills-upcoming-tab">
                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0001</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">Adrian</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>11 Nov 2024 10.45 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="mail-info-patient">
                                    <ul>
                                        <li><i class="isax isax-sms5"></i><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f0919482919eb09588919d809c95de939f9d">[email&#160;protected]</a></li>
                                        <li><i class="isax isax-call5"></i>+1 504 368 6874</li>
                                    </ul>
                                </li>
                                <li class="appointment-action">
                                    <ul>
                                        <li>
                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html"><i class="isax isax-eye4"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-messages-25"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-close-circle5"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="appointment-start">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html" class="start-link">Start Now</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-02.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0002</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">Kelly</a><span class="badge new-tag">New</span></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>05 Nov 2024 11.50 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Audio Call</li>
                                    </ul>

                                </li>
                                <li class="mail-info-patient">
                                    <ul>
                                        <li><i class="isax isax-sms5"></i><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="3e555b5252477e5b465f534e525b105d5153">[email&#160;protected]</a></li>
                                        <li><i class="isax isax-call5"></i> +1 832 891 8403</li>
                                    </ul>
                                </li>
                                <li class="appointment-action">
                                    <ul>
                                        <li>
                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html"><i class="isax isax-eye4"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-messages-25"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-close-circle5"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="appointment-start">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html" class="start-link">Start Now</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-03.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0003</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">Samuel</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>27 Oct 2024 09.30 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="mail-info-patient">
                                    <ul>
                                        <li><i class="isax isax-sms5"></i><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b6c5d7dbc3d3daf6d3ced7dbc6dad398d5d9db">[email&#160;protected]</a></li>
                                        <li><i class="isax isax-call5"></i>  +1 749 104 6291</li>
                                    </ul>
                                </li>
                                <li class="appointment-action">
                                    <ul>
                                        <li>
                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html"><i class="isax isax-eye4"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-messages-25"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-close-circle5"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="appointment-start">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html" class="start-link">Start Now</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-04.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0004</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">Catherine</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>18 Oct 2024 12.20 PM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Direct Visit</li>
                                    </ul>

                                </li>
                                <li class="mail-info-patient">
                                    <ul>
                                        <li><i class="isax isax-sms5"></i><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="60030114080512090e05200518010d100c054e030f0d">[email&#160;protected]</a></li>
                                        <li><i class="isax isax-call5"></i>+1 584 920 7183</li>
                                    </ul>
                                </li>
                                <li class="appointment-action">
                                    <ul>
                                        <li>
                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html"><i class="isax isax-eye4"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-messages-25"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-close-circle5"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="appointment-start">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html" class="start-link">Start Now</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-05.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0005</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">Robert</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>10 Oct 2024 11.30 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="mail-info-patient">
                                    <ul>
                                        <li><i class="isax isax-sms5"></i><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7604191413040236130e171b061a135815191b">[email&#160;protected]</a></li>
                                        <li><i class="isax isax-call5"></i> +1 059 327 6729</li>
                                    </ul>
                                </li>
                                <li class="appointment-action">
                                    <ul>
                                        <li>
                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html"><i class="isax isax-eye4"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-messages-25"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-close-circle5"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="appointment-start">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html" class="start-link">Start Now</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-06.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0006</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">Anderea</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>26 Sep 2024 10.20 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="mail-info-patient">
                                    <ul>
                                        <li><i class="isax isax-sms5"></i><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5d3c3339382f383c1d38253c302d3138733e3230">[email&#160;protected]</a></li>
                                        <li><i class="isax isax-call5"></i>  +1 278 402 7103</li>
                                    </ul>
                                </li>
                                <li class="appointment-action">
                                    <ul>
                                        <li>
                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html"><i class="isax isax-eye4"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-messages-25"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-close-circle5"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="appointment-start">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html" class="start-link">Start Now</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-07.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0007</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">Peter</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>14 Sep 2024 08.10 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="mail-info-patient">
                                    <ul>
                                        <li><i class="isax isax-sms5"></i><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="64140110011624011c05091408014a070b09">[email&#160;protected]</a></li>
                                        <li><i class="isax isax-call5"></i> +1 638 278 0249</li>
                                    </ul>
                                </li>
                                <li class="appointment-action">
                                    <ul>
                                        <li>
                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html"><i class="isax isax-eye4"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-messages-25"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-close-circle5"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="appointment-start">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html" class="start-link">Start Now</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-08.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0008</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html">Emily</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>03 Sep 2024 06.00 PM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="mail-info-patient">
                                    <ul>
                                        <li><i class="isax isax-sms5"></i><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="93f6fefaffead3f6ebf2fee3fff6bdf0fcfe">[email&#160;protected]</a></li>
                                        <li><i class="isax isax-call5"></i>  +1 261 039 1873</li>
                                    </ul>
                                </li>
                                <li class="appointment-action">
                                    <ul>
                                        <li>
                                            <a href="https://doccure.dreamstechnologies.com/html/template/doctor-upcoming-appointment.html"><i class="isax isax-eye4"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-messages-25"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="isax isax-close-circle5"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="appointment-start">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html" class="start-link">Start Now</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Pagination --> */}
                        <div class="pagination dashboard-pagination">
                            <ul>
                                <li>
                                    <a href="#" class="page-link"><i class="fa-solid fa-chevron-left"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link active">2</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">3</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">4</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">...</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link"><i class="fa-solid fa-chevron-right"></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Pagination --> */}

                    </div>
                    <div class="tab-pane fade" id="pills-cancel" role="tabpanel" aria-labelledby="pills-cancel-tab">
                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0001</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">Adrian</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>11 Nov 2024 10.45 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-02.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0002</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">Kelly</a><span class="badge new-tag">New</span></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>05 Nov 2024 11.50 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Audio Call</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-03.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0003</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">Samuel</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>27 Oct 2024 09.30 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-04.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0004</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">Catherine</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>18 Oct 2024 12.20 PM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Direct Visit</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-05.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0005</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">Robert</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>10 Oct 2024 11.30 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-06.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0006</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">Anderea</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>26 Sep 2024 10.20 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-07.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0007</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">Peter</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>14 Sep 2024 08.10 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-08.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0008</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html">Emily</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>03 Sep 2024 06.00 PM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-cancelled-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Pagination --> */}
                        <div class="pagination dashboard-pagination">
                            <ul>
                                <li>
                                    <a href="#" class="page-link"><i class="fa-solid fa-chevron-left"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link active">2</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">3</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">4</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">...</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link"><i class="fa-solid fa-chevron-right"></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Pagination --> */}
                    </div>
                    <div class="tab-pane fade" id="pills-complete" role="tabpanel" aria-labelledby="pills-complete-tab">
                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0001</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">Adrian</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>11 Nov 2024 10.45 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-02.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0002</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">Kelly</a><span class="badge new-tag">New</span></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>05 Nov 2024 11.50 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Audio Call</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-03.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0003</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">Samuel</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>27 Oct 2024 09.30 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-04.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0004</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">Catherine</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>18 Oct 2024 12.20 PM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Direct Visit</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-05.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0005</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">Robert</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>10 Oct 2024 11.30 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-06.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0006</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">Anderea</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>26 Sep 2024 10.20 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-07.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0007</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">Peter</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>14 Sep 2024 08.10 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Chat</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Appointment List --> */}
                        <div class="appointment-wrap">
                            <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">
                                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-08.jpg" alt="User Image" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0008</p>
                                            <h6><a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html">Emily</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="isax isax-clock5"></i>03 Sep 2024 06.00 PM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>

                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="https://doccure.dreamstechnologies.com/html/template/doctor-completed-appointment.html" class="start-link">View Details</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Appointment List --> */}

                        {/* <!-- Pagination --> */}
                        <div class="pagination dashboard-pagination">
                            <ul>
                                <li>
                                    <a href="#" class="page-link"><i class="fa-solid fa-chevron-left"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link active">2</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">3</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">4</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link">...</a>
                                </li>
                                <li>
                                    <a href="#" class="page-link"><i class="fa-solid fa-chevron-right"></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /Pagination --> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default DoctorAppointment