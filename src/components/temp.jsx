import React from 'react'

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

export default BookingSlots