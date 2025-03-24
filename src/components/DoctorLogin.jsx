import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginDoctor } from "../redux/doctorReducers/actions/authActions";
import { useNavigate } from "react-router-dom";

function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Fix: Get doctorInfo, loading, and error from Redux state
  const { loading, error, doctorInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (doctorInfo) {
      navigate("/dashboard"); // Redirect after login
    }
  }, [doctorInfo, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginDoctor({ email, password })); // ✅ Fix: Pass login credentials properly
  };

  return (
    <div className="content" style={{ minHeight: "125.073px" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {/* Login Content */}
            <div className="account-content">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 col-lg-6 login-left">
                  <img
                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/login-banner.png"
                    className="img-fluid"
                    alt="Doccure Login"
                  />
                </div>
                <div className="col-md-12 col-lg-6 login-right">
                  <div className="login-header">
                    <h3>
                      Login <span>Doccure</span>
                    </h3>
                  </div>

                  {/* Show error message */}
                  {error && <p className="alert alert-danger">{error}</p>}
                  {/* Show loading message */}
                  {loading && <p className="alert alert-info">Logging in...</p>}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">E-mail</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                        {loading ? "Signing in..." : "Sign in"}
                      </button>
                    </div>

                    <div className="login-or">
                      <span className="or-line"></span>
                      <span className="span-or">or</span>
                    </div>

                    <div className="social-login-btn">
                      <button className="btn w-100">
                        <img
                          src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/google-icon.svg"
                          alt="google-icon"
                        />
                        Sign in With Google
                      </button>
                      <button className="btn w-100">
                        <img
                          src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/facebook-icon.svg"
                          alt="fb-icon"
                        />
                        Sign in With Facebook
                      </button>
                    </div>

                    <div className="account-signup">
                      <p>
                        Don't have an account? <a href="/register">Sign up</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
