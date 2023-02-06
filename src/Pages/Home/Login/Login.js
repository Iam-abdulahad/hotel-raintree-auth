import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
          return (
                    <div className="login-container">
                              <form className="login-form">
                                        <h1 className="form-title">Login</h1>
                                        <input
                                                  type="email"
                                                  placeholder="Email"
                                                  className="form-input"
                                        />
                                        <input
                                                  type="password"
                                                  placeholder="Password"
                                                  className="form-input"
                                        />
                                        <button type="submit" className="form-submit">
                                                  Login
                                        </button>
                                        <div className="form-or">or</div>
                                        <button type="button" className="form-google">
                                                  Continue with Google
                                        </button>
                                        <button type="button" className="form-facebook">
                                                  Continue with Facebook
                                        </button>
                                        <div className="form-register">
                                                  Don't have an account?{" "}
                                                  <Link to="/signUp" className="form-register-link">
                                                            Please register
                                                  </Link>
                                        </div>
                              </form>
                    </div>
          );
};

export default Login;

