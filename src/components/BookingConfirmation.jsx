import React from "react";

const BookingConfirmation = () => {
  return (
    <div className="container mt-5 bg-section p-4">
      <div className="row">
        {/* Left Side: Booking Details */}
        <div className="col-md-8">
          <div style={{background:"white"}} className="rounded-5 p-4">
            <div className="d-flex align-items-center mb-3">
              <span className="text-success fs-5 me-2">&#10004;</span>
              <h5 className="mb-0">Booking Confirmed</h5>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div class="icon-boxx"><div class="work-step-imageaa "><figure class="image-anime rounded-circle"><img src="images/work-step-img-2.jpg" alt=""/></figure></div></div>
              <p className="mb-0">
                Your Booking has been Confirmed with <strong>Dr. Michael Brown</strong>. Be on time, at least{" "}
                <strong>15 Mins</strong> before your appointment.
              </p>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
              <h6>Booking Info</h6>
              <button className="btn btn-outline-dark btn-sm">📅 Reschedule</button>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <p><strong>Service</strong><br />Cardiology (30 Mins)</p>
                <p><strong>Date & Time</strong><br />10:00 - 11:00 AM, 15 Oct 2025</p>
              </div>
              <div className="col-md-6">
                <p><strong>Additional Service</strong><br />Echocardiograms</p>
                <p><strong>Appointment Type</strong><br />Clinic</p>
              </div>
            </div>

            <p><strong>Clinic Name & Location</strong><br />Wellness Path <a href="#">View Location</a></p>

            <div style={{background:"white"}} className="rounded-5 p-3 mt-3">
              <div>
                <h6>Need Our Assistance</h6>
              <p>Call us in case you face any issue on Booking / Cancellation</p>
              </div>
              <button className="btn btn-outline-dark">📞 Call Us</button>
            </div>
          </div>
        </div>

        {/* Right Side: QR Code & Actions */}
        <div className="col-md-4">
          <div style={{background:"white"}} className="rounded-5 p-4 text-center">
            <h6 className="text-muted">Booking Number</h6>
            <span className="booking-number text-success border border-success px-3 py-1 rounded">
              DCRA12565
            </span>
            <div className="my-3">
              <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/payment-qr.svg" alt="QR Code" />
            </div>
            <p>Scan this QR Code to download the details of your appointment.</p>
            <button className="btn btn-dark w-100 mb-2">Add To Calendar</button>
            <button className="btn btn-primary w-100">Start New Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
