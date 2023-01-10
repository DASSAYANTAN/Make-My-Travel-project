import React,{useState} from "react";
import { toast } from "react-toastify";
import Styles from "../auth/_auth.module.css";
import Auth_Image from "./auth_image.png";
import { useNavigate } from "react-router-dom";
import md5 from "md5";

//custom firebase function
import { auth } from "../../apis/firebase";

//built-in firebase function for authentication
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from "firebase/auth";

const Register = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    isLoading: false,
  });
  let { username, email, password, confirmpassword, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  };

  let handleSubmit =async e => {
    e.preventDefault();
    try {
      if (password !== confirmpassword) {
        toast.error("Password is not matched");
      } else {
        setState({ isLoading: true })
        let userData = await createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(userData.user);
        let message = `Email verification mail has been sent to ${email} address please verify...`;
        updateProfile(userData.user, {
          displayName: username,
          photoURL: `https://www.gravatar.com/avatar/${md5(email)}?q=identicon`,
        });
        toast.success(message);
        navigate("/login")
      }
    } catch (error) {
      toast.error(error.code);
    }
    //resetting form fields
    setState({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      isLoading:false,
    });
  };
  
  return (
    <section id={Styles.authBlock}>
      <article>
        <div className={Styles.authLeft}>
          <h1>Register</h1>
          <figure>
            <img src={Auth_Image} alt="" />
          </figure>
        </div>
        <div className={Styles.authRight}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                placeholder="enter username"
                value={username}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="enter email"
                value={email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="enter password"
                value={password}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                onChange={handleChange}
                placeholder="confirm the password"
                value={confirmpassword}
                required
              />
            </div>
            <div className="form_group">
              <button>{isLoading === true ? "loading..." : "Register"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Register;
