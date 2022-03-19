import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import header from "./Header.module.css";
import { CSSTransition } from "react-transition-group";

const Header = props => {
  let [logOutStatus, setLogOutStatus] = useState(false);
  return (
    <header className={header.app__header}>
      <div className={header.app__header_block}>
        <img
          src="https://lh3.googleusercontent.com/JN-v0YoajACdDmbWoDyFLmascywIkDsuc6sb130qBCIB_Hsr6vvyv8GrD_6ry8Zxbg"
          alt="logo"
        />
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
              <NavLink to={`/profile`}>{props.login}</NavLink>

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
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
