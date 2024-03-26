import React, { useState } from "react";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";

import user_icon from "../../../Assets/img/person.png";
import email_icon from "../../../Assets/img/email.png";
import password_icon from "../../../Assets/img/password.png";
// import con_password_icon from '../Assets/password.png';

function LoginSignUp() {
    const [action, setAction] = useState("Sign Up");
    const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/userDashboard");
  };
  const handleSubmit = () => {
    alert("Your details are Submitted. Please wait for moment verification")
  };
  return (
    <div className="container_ vh-100 w-100">
      <div className="row h-100 w-100">
        <div className="col d-flex justify-content-center align-items-center h-100 w-100">
          <div className="card">
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="top-section d-flex flex-column align-items-center justify-content-center">
                <h1 className="top-title">{action}</h1>
                <div className="top-text-underline"></div>
              </div>
              <div className="inputs-section d-flex flex-column align-items-center justify-content-center w-100">
                {action === "Login" ? (
                  <div></div>
                ) : (
                  <div className="input">
                    <img
                      src={user_icon}
                      alt="user icon"
                      className="input-icon"
                    ></img>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input-field"
                    ></input>
                  </div>
                )}
                <div className="input">
                  <img
                    src={email_icon}
                    alt="email icon"
                    className="input-icon"
                  ></img>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                  ></input>
                </div>
                <div className="input">
                  <img
                    src={password_icon}
                    alt="password icon"
                    className="input-icon"
                  ></img>
                  <input
                    required
                    type="password"
                    placeholder="Password"
                    className="input-field"
                  ></input>
                </div>
                {action === "Login" ? (
                  <div></div>
                ) : (
                  <div className="input">
                    <img
                      src={password_icon}
                      alt="confirm password icon"
                      className="input-icon"
                    ></img>
                    <input
                    required
                      type="password"
                      placeholder="Confirm Password"
                      className="input-field"
                    ></input>
                  </div>
                )}
              </div>
              {action === "Login" ? (
                <div className="lost-password-section">
                  Lost Password ? <span>Click Here</span>
                </div>
              ) : (
                <div></div>
              )}
              <div className="submit-section d-flex justify-content-center align-items-center mt-3 mb-4 w-100">
                <div
                  className={action === "Login" ? "submit-gray" : "submit"}
                  onClick={() => {
                    setAction("Sign Up");
                    if(action === "Sign Up"){
                        handleSubmit();
                    }
                  }}
                >
                  Sign Up
                </div>
                <div
                  className={action === "Sign Up" ? "submit-gray" : "submit"}
                  onClick={() => {
                    setAction("Login");
                    if(action === "Login"){
                        handleLogin();
                    }
                  }}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
