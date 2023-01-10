import React, { Fragment, useContext } from "react";
//NavLink is providing some active classes
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../apis/AuthContextApi";
import Styles from "../navbar/_navbar.module.css";

const Menu = () => {
  let { authUser, isLoading, Logout } = useContext(AuthContext);
  // console.log(authUser);
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/profile" className={Styles.avatarURL}>
            <img src={authUser.photoURL} alt={authUser.username} />
          </NavLink>
        </li>
        <li>
          <button onClick={()=>Logout()}>Logout</button>
        </li>
      </Fragment>
    );
  };
  let AnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </Fragment>
    );
  };
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {isLoading===true?("loading..."):authUser===null?(<AnonymousUser/>):(<AuthenticatedUser/>)}
      </ul>
    </div>
  );
};

export default Menu;
