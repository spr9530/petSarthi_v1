import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, userRegister } from '../redux/userReducers/actions';
import { useNavigate, Link } from 'react-router-dom';

function UserAuth({ set }) {   // destructure props here

  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const { user, loading, error, message } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (set) {
      dispatch(userRegister({ email, password, ownerName, phone }));
    } else {
      dispatch(userLogin({ email, password }));
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 1500);
      return () => clearTimeout(timer); // cleanup in case component unmounts
    }
  }, [message, navigate]);

  return (
    <>
      <div className="page-book-appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-appointment-box">
                <div className="appointment-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      {/* First Name */}
                      <div className={`form-group col-md-6 mb-4 ${set == 1 ? '' : 'd-none'}`}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Owner Name"
                          value={ownerName}
                          onChange={(e) => setOwnerName(e.target.value)}
                        />
                      </div>



                      {/* Email */}
                      <div className="form-group col-md-12 mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* Phone */}
                      <div className={`form-group col-md-12 mb-4 ${set == 1 ? '' : 'd-none'}`}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      {/* Password */}
                      <div className="form-group col-md-12 mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {/* Submit */}
                      <div className="col-lg-12">
                        <div className="contact-form-btn">
                          <button type="submit" className="btn-default">
                            {set == 1 ? 'Register' : 'Login'}
                          </button>
                        </div>
                      </div>
                    </div>

                    {error ? <div style={{ color: 'red' }}>{error}</div> : ''}
                    {message && <div style={{ color: 'green' }}>{message}</div>}

                  </form>

                  <div>
  <Link to="/forget-password">
    Forgot Password?
  </Link>
</div>

                </div>

                {/* Extra Content */}
                <div className="our-appointment-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3">Make an appointment</h2>
                    <p>Schedule your handyman service with ease.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAuth;
