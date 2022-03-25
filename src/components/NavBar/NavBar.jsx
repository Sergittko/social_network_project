import React from "react";
import nav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Weather from "./Weather/Weather";
import { connect } from "react-redux";

const NavBar = props => {
  return (
    <nav className={nav.app__nav}>
      <ul className={nav.app__nav_list}>
        <li className={nav.app__nav_element}>
          <NavLink to="/profile/" activeClassName={nav.active}>
            Profile
          </NavLink>
        </li>
        <li className={nav.app__nav_element}>
          <NavLink to="/users/" activeClassName={nav.active}>
            Users
          </NavLink>
        </li>
        <li className={nav.app__nav_element}>
          <NavLink to="/dialogs/" activeClassName={nav.active}>
            Dialogs
          </NavLink>
        </li>
        <li className={nav.app__nav_element}>
          <NavLink to="/apps/" activeClassName={nav.active}>
            Apps
          </NavLink>
        </li>
        <li className={nav.app__nav_element}>
          <NavLink to="/settings/" activeClassName={nav.active}>
            Settings
          </NavLink>
        </li>
      </ul>
      {props.isAuthoriserd && localStorage.getItem('weatherCity') && props.weather && (
        <div className={nav.friendsWrapper}>
          <p className={nav.friendsHeader}>Weather</p>
          <Weather
            city={props.weather.request[0].query}
            temp_c={props.weather.current_condition[0].temp_C}
            icon_w={props.weather.weather[0].hourly[0].weatherIconUrl[0].value}
            icon_alt={props.weather.weather[0].hourly[0].weatherDesc[0].value}
          />
        </div>
      )}
    </nav>
  );
};

let mapStateToProps = state => ({
  weather: state.weather.weatherData,
  isAuthoriserd: state.authData.isAuthoriserd
});

export default connect(mapStateToProps, {})(NavBar);
