import React from 'react'
// import BookingSlots from './BookingSlots'

function DoctorTimings() {
    return (
        <>
            <div class="col-lg-8 col-xl-9">

                <div class="dashboard-header">
                    <h3>Available Timings</h3>
                </div>

                <div class="appointment-tabs">
                    <ul class="nav available-nav">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" href="#" data-bs-toggle="tab" data-bs-target="#general-availability">General Availability</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#clinic-availability">Clinic Availability</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content pt-0 timing-content">

                    {/* <!-- General Availability --> */}
                    <div class="tab-pane fade show active" id="general-availability">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="card-header">
                                    <h3>Select Available Slots</h3>
                                </div>

                                <div class="available-tab">
                                    <label class="form-label">Select Available days</label>
                                    <ul class="nav">
                                        <li>
                                            <a href="#" class="active" data-bs-toggle="tab" data-bs-target="#monday">Monday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#tuesday">Tuesday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#wednesday">Wednesday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#thursday">Thursday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#friday">Friday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#saturday">Saturday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#sunday">Sunday</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="tab-content pt-0">

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane active show" id="monday">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Monday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <ul class="time-slots">
                                                    <li><i class="isax isax-clock"></i>09:00 AM</li>
                                                    <li><i class="isax isax-clock"></i>09:30 AM</li>
                                                    <li><i class="isax isax-clock"></i>10:00 AM</li>
                                                    <li><i class="isax isax-clock"></i>10:30 AM</li>
                                                    <li><i class="isax isax-clock"></i>11:00 AM</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="tuesday">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Tuesday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="wednesday">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Wednesday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="thursday">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Thursday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="friday">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Friday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="saturday">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Saturday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="sunday">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Sunday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    <div class="form-wrap">
                                        <label class="col-form-label">Appointment Fees ($)</label>
                                        <input type="text" class="form-control" value="254" />
                                    </div>
                                    <div class="modal-btn text-end">
                                        <a href="#" class="btn btn-gray" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</a>
                                        <button class="btn btn-primary prime-btn">Save Changes</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- /General Availability --> */}

                    {/* <!-- Clinic Availability -->								 */}
                    <div class="tab-pane fade" id="clinic-availability">
                        <div class="clinic-wrap">
                            <h5>Select Clinic</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <select class="select-img">
                                        <option data-image="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/clinic-01.jpg">The Family Dentistry Clinic</option>
                                        <option data-image="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/clinic-02.jpg">Dentistry Clinic</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="card-header">
                                    <h3>Select Available Slots</h3>
                                </div>

                                <div class="available-tab">
                                    <label class="form-label">Select Available days</label>
                                    <ul class="nav">
                                        <li>
                                            <a href="#" class="active" data-bs-toggle="tab" data-bs-target="#monday-slot">Monday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#tuesday-slot">Tuesday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#wednesday-slot">Wedneday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#thursday-slot">Thursday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#friday-slot">Friday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#saturday-slot">Saturday</a>
                                        </li>
                                        <li>
                                            <a href="#" data-bs-toggle="tab" data-bs-target="#sunday-slot">Sunday</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="tab-content pt-0">

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane active show" id="monday-slot">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Monday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <ul class="time-slots">
                                                    <li><i class="isax isax-clock"></i>09:00 AM</li>
                                                    <li><i class="isax isax-clock"></i>09:30 AM</li>
                                                    <li class="slot-space">Space : 2</li>
                                                    <li><i class="isax isax-clock"></i>10:30 AM</li>
                                                    <li><i class="isax isax-clock"></i>11:00 AM</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="tuesday-slot">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Tuesday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="wednesday-slot">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Wednesday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="thursday-slot">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Thursday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="friday-slot">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Friday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="saturday-slot">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Saturday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    {/* <!-- Slot --> */}
                                    <div class="tab-pane fade" id="sunday-slot">
                                        <div class="slot-box">
                                            <div class="slot-header">
                                                <h5>Sunday</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slot-body">
                                                <p>No Slots Available</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Slot --> */}

                                    <div class="form-wrap">
                                        <label class="col-form-label">Appointment Fees ($)</label>
                                        <input type="text" class="form-control" value="254" />
                                    </div>
                                    <div class="modal-btn text-end">
                                        <a href="#" class="btn btn-gray" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</a>
                                        <button class="btn btn-primary prime-btn">Save Changes</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- /Clinic Availability --> */}

                </div>
            </div>

            <BookingSlots />
        </>
    )
}

export default DoctorTimings


function BookingSlots() {
    return (
        <>
            {/* <!-- Add Slots --> */}
            <div class="modal fade custom-modals" id="add_slot">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add New Slot</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <form action="https://doccure.dreamstechnologies.com/html/template/available-timings.html">
                            <div class="modal-body">
                                <div class="timing-modal">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-wrap">
                                                <label class="col-form-label">Start Time</label>
                                                <input type="text" class="form-control timepicker1" value="04:00 PM" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-wrap">
                                                <label class="col-form-label">End Time</label>
                                                <input type="text" class="form-control timepicker1" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-wrap">
                                                <label class="col-form-label">Appointment Intervals</label>
                                                <select class="select">
                                                    <option>10 Minutes</option>
                                                    <option>20 Minutes</option>
                                                    <option>30 Minutes</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-wrap">
                                                <label class="col-form-label">Appointment Durations</label>
                                                <select class="select">
                                                    <option>30 Minutes</option>
                                                    <option>1 Hour</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-wrap mb-0">
                                                <label class="col-form-label d-block">Assign Appointment Spaces</label>
                                                <div class="custom-control form-check custom-control-inline">
                                                    <input type="radio" id="space1" name="rating_option" class="form-check-input" value="price_free" checked="" />
                                                    <label class="form-check-label" for="space1">Space 1</label>
                                                </div>
                                                <div class="custom-control form-check custom-control-inline">
                                                    <input type="radio" id="space2" name="rating_option" class="form-check-input" value="price_free" checked="" />
                                                    <label class="form-check-label" for="space2">Space 2</label>
                                                </div>
                                                <div class="custom-control form-check custom-control-inline">
                                                    <input type="radio" id="space3" name="rating_option" class="form-check-input" value="price_free" checked="" />
                                                    <label class="form-check-label" for="space3">Space 3</label>
                                                </div>
                                                <div class="custom-control form-check custom-control-inline">
                                                    <input type="radio" id="space4" name="rating_option" class="form-check-input" value="price_free" checked="" />
                                                    <label class="form-check-label" for="space4">Space 4</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="modal-btn text-end">
                                    <a href="#" class="btn btn-gray" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</a>
                                    <button type="submit" class="btn btn-primary prime-btn">Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- /Add Slots --> */}

            {/* <!-- Remove Slots --> */}
            <div class="modal fade info-modal" id="delete_slot">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="success-wrap">
                                <div class="success-info">
                                    <div class="text-center">
                                        <span class="icon-success bg-red"><i class="fa-solid fa-xmark"></i></span>
                                        <h3>Remove Slots</h3>
                                        <p>Are you sure you want to remove this slots?</p>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-btn text-center">
                                <a href="#" class="btn btn-gray" data-bs-toggle="modal" data-bs-dismiss="modal">Yes, Remove</a>
                                <button class="btn btn-primary prime-btn">No, i Changed my mind</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Remove Slots --> */}
        </>
    )
}