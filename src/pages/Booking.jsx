import React, { useState } from 'react'
import BookingConfirmation from '../components/BookingConfirmation';


function Booking() {
    return (
        <>
            <div class="our-faqs bg-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="our-faqs-content">
                                <div class="section-title">
                                    <h3 class="wow fadeInUp">frequently asked questions</h3>
                                    <h2 class="text-anime-style-3" data-cursor="-opaque">Helping you understand healthcare</h2>
                                    <p class="wow fadeInUp" data-wow-delay="0.25s">Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.</p>
                                </div>

                                <div class="doctor-contact-form">
                                    <div class="section-title">
                                        <h2 class="text-anime-style-3" data-cursor="-opaque">Add Basic details</h2>
                                    </div>

                                    <div class="contact-form">
                                        <form id="contactForm" action="#" method="POST" data-toggle="validator" class="wow fadeInUp" data-wow-delay="0.25s">
                                            <div class="row">
                                                <div class="form-group col-md-12 mb-4">
                                                    <input type="text" name="name" class="form-control" id="name" placeholder="Enter Your Name" required />
                                                    <div class="help-block with-errors"></div>
                                                </div>

                                                <div class="form-group col-md-6 mb-4">
                                                    <input type="email" name="email" class="form-control" id="email" placeholder="Enter Your Email" required />
                                                    <div class="help-block with-errors"></div>
                                                </div>

                                                <div class="form-group col-md-6 mb-4">
                                                    <input type="text" name="phone" class="form-control" id="phone" placeholder="Enter Your Number" required />
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

                        <div class="col-lg-6">
                            <div class="faq-accordion" id="faqaccordion">
                                <div class="faq-cta-box wow fadeInUp" data-wow-delay="0.5s">
                                    <div className='d-flex flex-direction-column'>
                                        <div class="icon-boxx">
                                            <div class="work-step-imageaa ">
                                                <figure class="image-anime rounded-circle">
                                                    <img src="images/work-step-img-2.jpg" alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div class="faq-cta-content mx-4">
                                            <h3>Dr. XYZ ABC</h3>
                                            <p>Psycrtrist</p>
                                            <p>Vill. Mintah P.O. Larhoon Distt. Kangra H.p.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-cta-boxa wow fadeInUp mt-4" data-wow-delay="0.5s">
                                    <div className="row d-flex">
                                        <div className="col-7">
                                            <h3>Date</h3>
                                            <Calendar></Calendar>
                                        </div>
                                        <div className='col-5'>
                                            <h3>Avaialabel Slots</h3>
                                            <div class=" mt-4 datepicker">
                                                <div class="">
                                                    <h6>Morning</h6>
                                                    <div class="d-flex flex-wrap gap-2">
                                                        <button class="btn btn-sm px-4 py-2 btn-primary">09:45</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">-</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">10:45</button>

                                                    </div>

                                                    <h6 class="mt-3">Afternoon</h6>
                                                    <div class="d-flex flex-wrap gap-2">
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">09:45</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">10:45</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">10:45</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">10:45</button>
                                                    </div>

                                                    <h6 class="mt-3">Evening</h6>
                                                    <div class="d-flex flex-wrap gap-2">
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">09:45</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">10:45</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">10:45</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">10:45</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">-</button>
                                                        <button class="btn btn-sm px-4 py-2 btn-secondary">09:45</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-cta-boxa wow fadeInUp mt-4 " data-wow-delay="0.5s">
                                    <div className="row">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <BookingConfirmation/>
        </>
    )
}

export default Booking




const Calendar = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={"empty" + i} className="date faded"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
            days.push(
                <button key={day} className={`date ${isToday ? "current-day" : ""}`}>
                    {day}
                </button>
            );
        }

        return days;
    };

    return (
        <div className="datepicker">
            <div className="datepicker-top">
                <div className="month-selector">
                    <button className="arrow" onClick={prevMonth}>
                    <i className="bi bi-arrow-left"></i>
                    </button>
                    <span className="month-name">
                        {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
                    </span>
                    <button className="arrow" onClick={nextMonth}>
                    <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="datepicker-calendar">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                    <span key={day} className="day">{day}</span>
                ))}
                {renderCalendar()}
            </div>
        </div>
    );
};

