import React from 'react'
import { Outlet } from 'react-router-dom'

function SettingLayout() {
    return (
        <>
        <div class="col-lg-8 col-xl-9">
            <div class="dashboard-header">
                <h3>Profile Settings</h3>
            </div>
            <div class="setting-tab">
                <div class="appointment-tabs">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="doctor-profile-settings.html">Basic Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="doctor-experience-settings.html">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="doctor-education-settings.html">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="doctor-awards-settings.html">Awards</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="doctor-insurance-settings.html">Insurances</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="doctor-clinics-settings.html">Clinics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="doctor-business-settings.html">Business Hours</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
            </div>
        </>
    )
}

export default SettingLayout