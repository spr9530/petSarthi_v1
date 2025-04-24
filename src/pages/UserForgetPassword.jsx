import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetEmail, changePassword } from '../redux/userReducers/actions';
import { useNavigate } from 'react-router-dom';

function UserForgetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailFound, setEmailFound] = useState(false);
  const [otp, setOtp] = useState('')

  const { loading, error, message } = useSelector((state) => state.user);

  // Handle submit for email
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    dispatch(forgetEmail({ email }));
  };

  // Handle password reset form
  const handleSubmitReset = (e) => {
    e.preventDefault();
    dispatch(changePassword({ email, password, confirmPassword, otp }));
  };

  // Show second form if OTP sent
  useEffect(() => {
    console.log(message)
    if(message === "OTP sent to your email"){
        setTimeout(()=>{
            setEmailFound(true);
        }, 1500)
    }
  }, [message]);

  // Navigate to login on successful password change
  useEffect(() => {
    if (message === 'Password reset successful') {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [message, navigate]);

  return (
    <div className="page-book-appointment">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-appointment-box">
              <div className="appointment-form">
                {!emailFound ? (
                  <form onSubmit={handleSubmitEmail}>
                    <div className="row">
                      <div className="form-group col-md-12 mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-form-btn">
                          <button type="submit" className="btn-default" disabled={loading}>
                            {loading ? 'Sending OTP...' : 'Find Email'}
                          </button>
                        </div>
                      </div>
                    </div>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {message && <div style={{ color: 'green' }}>{message}</div>}
                  </form>
                ) : (
                  <form onSubmit={handleSubmitReset}>
                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-default" disabled={loading}>
                          {loading ? 'Changing...' : 'Confirm'}
                        </button>
                      </div>
                    </div>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {message && <div style={{ color: 'green' }}>{message}</div>}
                  </form>
                )}
              </div>

              {/* Extra Content */}
              <div className="our-appointment-content">
                <div className="section-title">
                  <h2 className="text-anime-style-3">Reset Your Password</h2>
                  <p>Secure your account by resetting your password.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForgetPassword;
