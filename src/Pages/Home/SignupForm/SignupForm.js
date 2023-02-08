import React, { useState } from "react";

const SignupForm = () => {
          const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");


          const handleEmailBlur = event => {
                    setEmail(event.target.value);
          }

          const handlePassBlur = event => {
                    setPassword(event.target.value);
          }

          const handleSubmit = (event) => {
                    event.preventDefault();
                    // Perform the signup action here (e.g. sending the data to the server)
                    console.log("Signup form submitted. Email:", email, "Password:", password);
          };

          return (
                    <div className="login-container">
                              <form className="login-form">
                                        <h1 className="form-title">Please Register</h1>
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
                                                  Register
                                        </button>
                                        <div className="form-or">or</div>
                                        <button type="button" className="form-google">
                                                  Continue with Google
                                        </button>
                                        <button type="button" className="form-facebook">
                                                  Continue with Facebook
                                        </button>

                              </form>
                    </div>
          );
};

export default SignupForm;
