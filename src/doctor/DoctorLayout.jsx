import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDoctorInfo } from '../redux/doctorReducers/actions/authActions';
import { NavLink, Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function DoctorLayout() {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const { user: doctorInfo, loading, error, userInfo } = useSelector((state) => state.auth);
	useEffect(() => {
		if (doctorInfo) {
			dispatch(getDoctorInfo());
			console.log(userInfo)  // ✅ Fetch doctor info only when needed
		} else if (!doctorInfo) {
			navigate("/doctors/login"); // ✅ Redirect only if doctorInfo is missing
		}
	}, [doctorInfo, dispatch, navigate]); // ✅ Correct dependencies
	return (
		<>
		{userInfo? <>
			<div class="content">
				<div class="container">

					<div class="row">
						<div class="col-lg-4 col-xl-3 theiaStickySidebar">

							{/* <!-- Profile Sidebar --> */}
							<div class="profile-sidebar doctor-sidebar profile-sidebar-new">
								<div class="widget-profile pro-widget-content">
									<div class="profile-info-widget">
										<a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html" class="booking-doc-img">
											<img src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/doctor-profile-img.jpg" alt="User Image" />
										</a>
										<div class="profile-det-info">
											<h3><a href="https://doccure.dreamstechnologies.com/html/template/doctor-profile.html">{userInfo.name}</a></h3>
											<div class="patient-details">
												<h5 className="mb-0">
													{userInfo?.professionalDetails?.qualification?.map((qal, index) => (
														<span key={index}>{qal}{index !== userInfo.professionalDetails.qualification.length - 1 ? ", " : ""}</span>
													))}
												</h5>

											</div>
											<span class="badge doctor-role-badge"><i class="fa-solid fa-circle"></i>{userInfo.professionalDetails.specialization}</span>
										</div>
									</div>
								</div>
								<div class="doctor-available-head">
									<div class="input-block input-block-new">
										<label class="form-label">Availability <span class="text-danger">*</span></label>
										<select class="select form-control">
											<option selected={userInfo.presence !== 'available'}>Not Available</option>
											<option selected={userInfo.presence === 'available'}>I am Available Now</option>
										</select>
									</div>
								</div>
								<div class="dashboard-widget">
									<nav class="dashboard-menu">
										<ul>
											<li class="">
												<NavLink to='/doctors/dashboard'
													className={({ isActive }) => isActive ? 'active' : ''}
													end
												>
													<div>
														<i class="isax isax-category-2"></i>
														<span>Dashboard</span>
													</div>
												</NavLink>
											</li>
											{/* <li>
												<NavLink to='/doctors/request'
													className={({ isActive }) => isActive ? 'active' : ''}
												>
													<div>
														<i class="isax isax-clipboard-tick"></i>
														<span>Requests</span>
														<small class="unread-msg">2</small>
													</div>
												</NavLink>

											</li> */}
											<li>
												<NavLink
													to="/doctors/appointments"
													className={({ isActive }) => isActive ? 'active' : ''}
													end
												>
													<div>
														<i className="isax isax-calendar-1"></i>
														<span>Appointments</span>
													</div>
												</NavLink>
											</li>
											<li>
												<NavLink to='/doctors/timings'
													className={({ isActive }) => isActive ? 'active' : ''}
													end>
													<div>
														<i class="isax isax-calendar-tick"></i>
														<span>Available Timings</span>
													</div>
												</NavLink>
											</li>

											<li>
												<NavLink to='/doctors/reviews'
													className={({ isActive }) => isActive ? 'active' : ''}
													end>

													<div>
														<i class="isax isax-star-1"></i>
														<span>Reviews</span>
													</div>
												</NavLink>
											</li>
											<li>
												<NavLink to='/doctors/accounts'
													className={({ isActive }) => isActive ? 'active' : ''}
													end>

													<div>
														<i class="isax isax-profile-tick"></i>
														<span>Accounts</span>
													</div>
												</NavLink>
											</li>
											<li>
												<NavLink to='/doctors/invoices'
													className={({ isActive }) => isActive ? 'active' : ''}
													end>

													<div>
														<i class="isax isax-profile-tick"></i>
														<span>Invoices</span>
													</div>
												</NavLink>
											</li>
											<li>
												<NavLink to='/doctors/setting'
													className={({ isActive }) => isActive ? 'active' : ''}
													end>

													<div>
														<i class="isax isax-profile-tick"></i>
														<span>Profile Settings</span>
													</div>
												</NavLink>
											</li>
											<li>
												<div>
													<i class="isax isax-key"></i>
													<span>Change Password</span>
												</div>
											</li>
											<li>
												<div>
													<i class="isax isax-logout"></i>
													<span>Logout</span>
												</div>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							{/* <!-- /Profile Sidebar --> */}

						</div>

						<Outlet />
					</div>

				</div >

			</div >
		</> : <>Loading</>}
		</>
	)
}

export default DoctorLayout