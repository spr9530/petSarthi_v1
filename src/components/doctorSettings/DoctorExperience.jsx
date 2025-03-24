import React from 'react'

function DoctorExperience() {
    return (
        <>
            <div class="dashboard-header border-0 mb-0">
                <h3>Experience</h3>
                <ul>
                    <li>
                        <a href="#" class="btn btn-primary prime-btn add-experiences">Add New  Experience</a>
                    </li>
                </ul>
            </div>
            <form action="doctor-experience-settings.html">
                <div class="accordions experience-infos" id="list-accord">

                    {/* <!-- Experience1 Item --> */}
                    <div class="user-accordion-item">
                        <a href="#" class="accordion-wrap" data-bs-toggle="collapse" data-bs-target="#experience1">Experience<span>Delete</span></a>
                        <div class="accordion-collapse collapse show" id="experience1" data-bs-parent="#list-accord">
                            <div class="content-collapse">
                                <div class="add-service-info">
                                    <div class="add-info">
                                        <div class="row align-items-center">
                                            <div class="col-md-12">
                                                <div class="form-wrap mb-2">
                                                    <div class="change-avatar img-upload">
                                                        <div class="profile-img">
                                                            <i class="fa-solid fa-file-image"></i>
                                                        </div>
                                                        <div class="upload-img">
                                                            <h5>Hospital Logo</h5>
                                                            <div class="imgs-load d-flex align-items-center">
                                                                <div class="change-photo">
                                                                    Upload New
                                                                    <input type="file" class="upload" />
                                                                </div>
                                                                <a href="#" class="upload-remove">Remove</a>
                                                            </div>
                                                            <p class="form-text">Your Image should Below 4 MB, Accepted format jpg,png,svg</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Title</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Hospital <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Year of Experience <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Location <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Employement </label>
                                                    <select class="select select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">
                                                        <option data-select2-id="6">Full Time</option>
                                                        <option>Part Time</option>
                                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style={{width:'100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-d79r-container"><span class="select2-selection__rendered" id="select2-d79r-container" role="textbox" aria-readonly="true" title="Full Time">Full Time</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Job Description <span class="text-danger">*</span></label>
                                                    <textarea class="form-control" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Start Date <span class="text-danger">*</span></label>
                                                    <div class="form-icon">
                                                        <input type="text" class="form-control datetimepicker" />
                                                            <span class="icon"><i class="fa-regular fa-calendar-days"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">End Date <span class="text-danger">*</span></label>
                                                    <div class="form-icon">
                                                        <input type="text" class="form-control datetimepicker" />
                                                            <span class="icon"><i class="fa-regular fa-calendar-days"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">&nbsp;</label>
                                                    <div class="form-check">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox" /> I Currently Working Here
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="reset more-item">Reset</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Experience1 Item --> */}

                    {/* <!-- Experience1 Item --> */}
                    <div class="user-accordion-item">
                        <a href="#" class="collapsed accordion-wrap" data-bs-toggle="collapse" data-bs-target="#experience2">Hill Medical Hospital, Newcastle (15  Mar 2021 - 24 Jan 2023 )<span>Delete</span></a>
                        <div class="accordion-collapse collapse" id="experience2" data-bs-parent="#list-accord">
                            <div class="content-collapse">
                                <div class="add-service-info">
                                    <div class="add-info">
                                        <div class="row align-items-center">
                                            <div class="col-md-12">
                                                <div class="form-wrap mb-2">
                                                    <div class="change-avatar img-upload">
                                                        <div class="profile-img">
                                                            <i class="fa-solid fa-file-image"></i>
                                                        </div>
                                                        <div class="upload-img">
                                                            <h5>Hospital Logo</h5>
                                                            <div class="imgs-load d-flex align-items-center">
                                                                <div class="change-photo">
                                                                    Upload New
                                                                    <input type="file" class="upload" />
                                                                </div>
                                                                <a href="#" class="upload-remove">Remove</a>
                                                            </div>
                                                            <p class="form-text">Your Image should Below 4 MB, Accepted format jpg,png,svg</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Title</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Hospital <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Year of Experience <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Location <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Employement </label>
                                                    <select class="select select2-hidden-accessible" data-select2-id="7" tabindex="-1" aria-hidden="true">
                                                        <option data-select2-id="9">Full Time</option>
                                                        <option>Part Time</option>
                                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="8" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-0tjr-container"><span class="select2-selection__rendered" id="select2-0tjr-container" role="textbox" aria-readonly="true" title="Full Time">Full Time</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Job Description <span class="text-danger">*</span></label>
                                                    <textarea class="form-control" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">Start Date <span class="text-danger">*</span></label>
                                                    <div class="form-icon">
                                                        <input type="text" class="form-control datetimepicker" />
                                                            <span class="icon"><i class="fa-regular fa-calendar-days"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">End Date <span class="text-danger">*</span></label>
                                                    <div class="form-icon">
                                                        <input type="text" class="form-control datetimepicker" />
                                                            <span class="icon"><i class="fa-regular fa-calendar-days"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="form-wrap">
                                                    <label class="col-form-label">&nbsp;</label>
                                                    <div class="form-check">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox" /> I Currently Working Here
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="reset more-item">Reset</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Experience1 Item --> */}

                </div>

                <div class="modal-btn text-end">
                    <a href="#" class="btn btn-gray">Cancel</a>
                    <button type="submit" class="btn btn-primary prime-btn">Save Changes</button>
                </div>

            </form>
        </>
    )
}

export default DoctorExperience