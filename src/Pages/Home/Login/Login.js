import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
          const [email, setEmail] = useState('');
          const [pass, setPass] = useState('');
          const [error, setError] = useState('');



          const handleEmailBlur = event =>{
                    setEmail(event.target.value);
          }

          const handlePassBlur = event => {
                    setPass(event.target.value);
          }
          return (
                    <div className="login-container">
                              <form className="login-form">
                                        <h1 className="form-title">Login</h1>
                                        <input
                                                  onBlur={handleEmailBlur}
                                                  type="email"
                                                  placeholder="Email"
                                                  className="form-input"
                                        />
                                        <input
                                                  onBlur={handlePassBlur}
                                                  type="password"
                                                  placeholder="Password"
                                                  className="form-input"
                                        />
                                        <button type="submit" className="form-submit">
                                                  Login
                                        </button>
                                        <div className="form-or">Or Continue with</div>
                                        <button type="button" className="form-google">
                                                  Google
                                        </button>
                                        <button type="button" className="form-facebook">
                                                  Facebook
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

