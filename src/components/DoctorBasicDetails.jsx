import React from "react";

function DoctorBasicDetails() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="setting-card">
                    <div className="change-avatar img-upload">
                        <div className="profile-img">
                            <i className="fa-solid fa-file-image"></i>
                        </div>
                        <div className="upload-img">
                            <h5>Profile Image</h5>
                            <div className="imgs-load d-flex align-items-center">
                                <div className="change-photo">
                                    Upload New
                                    <input type="file" className="upload" />
                                </div>
                                <button type="button" className="upload-remove">Remove</button>
                            </div>
                            <p className="form-text">
                                Your image should be below 4 MB. Accepted formats: jpg, png, svg
                            </p>
                        </div>
                    </div>
                </div>

                <div className="setting-title">
                    <h5>Information</h5>
                </div>

                <div className="setting-card">
                    <div className="row">
                        {["First Name", "Last Name", "Display Name", "Designation", "Phone Numbers", "Email Address"].map(
                            (label, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="form-wrap">
                                        <label className="form-label">
                                            {label} <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            )
                        )}

                        <div className="col-lg-12">
                            <div className="form-wrap">
                                <label className="form-label">
                                    Known Languages <span className="text-danger">*</span>
                                </label>
                                <div className="input-block input-block-new mb-0">
                                    <input type="text" placeholder="Type New" className="form-control" />
                                    <button type="button" className="input-text save-btn">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="setting-title">
                    <h5>Memberships</h5>
                </div>

                <div className="setting-card">
                    <div className="add-info membership-infos">
                        <div className="row membership-content">
                            <div className="col-lg-3 col-md-6">
                                <div className="form-wrap">
                                    <label className="form-label">
                                        Title <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control" placeholder="Add Title" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-6">
                                <div className="d-flex align-items-center">
                                    <div className="form-wrap w-100">
                                        <label className="form-label">About Membership</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-wrap ms-2">
                                        <label className="col-form-label d-block">&nbsp;</label>
                                        <button type="button" className="trash-icon trash">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-end">
                        <button type="button" className="add-membership-info more-item">Add New</button>
                    </div>
                </div>

                <div className="modal-btn text-end">
                    <button type="button" className="btn btn-gray">Cancel</button>
                    <button type="submit" className="btn btn-primary prime-btn">Save Changes</button>
                </div>
            </form>
        </>
    );
}

export default DoctorBasicDetails;
