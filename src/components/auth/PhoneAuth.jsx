import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../apis/firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "@firebase/auth";
const PhoneAuth = () => {
  let navigate = useNavigate();
  let [phone, setPhone] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let reCaptchaVerifier = new RecaptchaVerifier(
        "captcha-container",
        {
          size: "invisible",
          callback: response => {
            console.log(response);
          },
        },
        auth
      );

      let sendOTP = signInWithPhoneNumber(auth, phone, reCaptchaVerifier);
      let confirmationMessage = window.prompt("enter OTP");
      (await sendOTP).confirm(confirmationMessage);

      navigate("/");
    } catch (error) {
      toast.error(error.code);
    }
    setPhone("");
    setIsLoading(false);
  };

  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Login with Phone Number</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                placeholder="enter valid phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>
            <div id="captcha-container"></div>

            <div className="form-group">
              <aside>
                <span>Already have an account </span>
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </aside>
            </div>
            <div className="form-group">
              <button>{isLoading === true ? "loading..." : "send OTP"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
