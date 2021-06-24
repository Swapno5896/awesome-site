import React from "react";
import img1 from "../../images/login-side-img.jpg";
import "./LogIn.css";
import imgF from "../../images/facebook-icon.png";
import imgG from "../../images/google-icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fabGoo } from "@fortawesome/free-solid-svg-icons";

const LogIn = () => {
  return (
    <div className="row">
      <div className="col-md-6 create-account-section">
        <img style={{ width: "470px" }} src={img1} alt="" />
        <br />
        <a className="create-account" href="">
          Create an Account ?{" "}
        </a>
      </div>
      <div className="col-md-6 input-section">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control logIn-input"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control logIn-input"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        {/* radio btn */}
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            Remember Me
          </label>
        </div>
        <button>LogIn</button>
        <div>
          <span>
            Or Login With
            <img className="icon" src={imgF} alt="" />
            <img className="icon" src={imgG} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
