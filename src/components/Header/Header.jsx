import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import header from "./Header.module.css";
import { CSSTransition } from "react-transition-group";
import logo from "../../img/logo_ps.png";

const Header = props => {
  let [logOutStatus, setLogOutStatus] = useState(false);
  return (
    <header className={header.app__header}>
      <div className={header.app__header_block}>
        <img src={logo} alt="logo" />

        <div className={header.userName}>
          <span>{props.login}</span>
        </div>

        <div
          className={header.userNameButton}
          onMouseOver={() => {
            setLogOutStatus(true);
          }}
          onMouseLeave={() => {
            setLogOutStatus(false);
          }}
        >
          {props.isAuthoriserd ? (
            <div>
              <NavLink to={`/profile`} className={header.userImage}>
                <img src={props.userImage} alt="" />
              </NavLink>

              <CSSTransition
                in={logOutStatus}
                mountOnEnter
                timeout={5}
                classNames={{
                  enterActive: header.logOutButton_enter,
                  enterDone: header.logOutButton_enter_active,
                  exitActive: header.logOutButton_exit,
                  exitDone: header.logOutButton_exit_active
                }}
              >
                <button onClick={props.logOut}>log out</button>
              </CSSTransition>
            </div>
          ) : (
            <NavLink to={"/login"} className={header.loginButton}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
