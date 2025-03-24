import React from 'react'

function DoctorAward() {
  return (
    <>
    <div class="dashboard-header border-0 mb-0">
								<h3>Awards</h3>
								<ul>
									<li>
										<a href="#" class="btn btn-primary prime-btn add-awrads">Add New Award</a>
									</li>
								</ul>
							</div>
                            <form action="doctor-awards-settings.html">

<div class="accordions awrad-infos" id="list-accord">

    {/* <!-- Awards Item --> */}
    <div class="user-accordion-item">
        <a href="#" class="accordion-wrap" data-bs-toggle="collapse" data-bs-target="#award1">Awards<span>Delete</span></a>
        <div class="accordion-collapse collapse show" id="award1" data-bs-parent="#list-accord">
            <div class="content-collapse">
                <div class="add-service-info">
                    <div class="add-info">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="form-wrap">
                                    <label class="col-form-label">Award Name</label>
                                    <input type="text" class="form-control" />
                                </div>													
                            </div>
                            <div class="col-md-6">
                                <div class="form-wrap">
                                    <label class="col-form-label">Year <span class="text-danger">*</span></label>
                                    <div class="form-icon">
                                        <input type="text" class="form-control datetimepicker" />
                                        <span class="icon"><i class="fa-regular fa-calendar-days"></i></span>
                                    </div>
                                </div>													
                            </div>
                            <div class="col-lg-12">
                                <div class="form-wrap">
                                    <label class="col-form-label">Description <span class="text-danger">*</span></label>
                                    <textarea class="form-control" rows="3"></textarea>
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
    {/* <!-- /Awards Item --> */}

    {/* <!-- Awards Item --> */}
    <div class="user-accordion-item">
        <a href="#" class="collapsed accordion-wrap" data-bs-toggle="collapse" data-bs-target="#award2">Best Surgeon<span>Delete</span></a>
        <div class="accordion-collapse collapse" id="award2" data-bs-parent="#list-accord">
            <div class="content-collapse">
                <div class="add-service-info">
                    <div class="add-info">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="form-wrap">
                                    <label class="col-form-label">Award Name</label>
                                    <input type="text" class="form-control" />
                                </div>													
                            </div>
                            <div class="col-md-6">
                                <div class="form-wrap">
                                    <label class="col-form-label">Year <span class="text-danger">*</span></label>
                                    <div class="form-icon">
                                        <input type="text" class="form-control datetimepicker" />
                                        <span class="icon"><i class="fa-regular fa-calendar-days"></i></span>
                                    </div>
                                </div>													
                            </div>
                            <div class="col-lg-12">
                                <div class="form-wrap">
                                    <label class="col-form-label">Description <span class="text-danger">*</span></label>
                                    <textarea class="form-control" rows="3"></textarea>
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
    {/* <!-- /Awards Item --> */}

</div>

<div class="modal-btn text-end">
    <a href="#" class="btn btn-gray">Cancel</a>
    <button type="submit" class="btn btn-primary prime-btn">Save Changes</button>
</div>

</form>             
    </>
  )
}

export default DoctorAward