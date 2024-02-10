import React from "react";
// import { FaTimes } from "react-icons/fa";
import Google from "../assets/images/google-icon.png";

const UserAuth = ({ showForm, handleVisiblity }) => {
  return (
    <section className="user-signin-signup">
      <div className="signin-signup">
        <div className="heading">
          <h2>Log in or create an account</h2>
          <p onClick={handleVisiblity}>&times;{/* <FaTimes /> */}</p>
        </div>
        <form action="">
          <label className="input-field-label" htmlFor="email">
            Email Address (required)
          </label>
          <input id="email" type="email" placeholder="swiftshelter@gmail.com" />
          <button>Continue</button>
        </form>
        <div className="divider-wrapper">
          <div className="divider"></div> <span>or</span>
          <div className="divider"></div>
        </div>
        <button>
          <img src={Google} alt="google" />
          <span>Continue with google</span>
        </button>
        <div className="csignin-signup-footer">
          <h2>Are you in need of house or want to sell one?</h2>
          <p>
            <a href="#">Login or create an account here</a>
          </p>
        </div>

        <p className="privacy-policy">
          <input
            type="checkbox"
            name="agreement-checkbox"
            id="agreement-checkbox"
          />
          <span>
            By creating an account you agree to terms of use and privacy policy
          </span>
        </p>
      </div>
    </section>
  );
};

export default UserAuth;
