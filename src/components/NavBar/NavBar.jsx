import React from "react";
import nav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Weather from "./Weather/Weather";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faUsers, faCommentDots, faListUl, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import cat from '../../img/gifs/cat1.gif';

const NavBar = props => {
  let [catMode, changeCatMode] = React.useState('block');
  return (
    <nav className={nav.app__nav}>
      <ul className={nav.app__nav_list}>
      <span className={nav.app__nav_span}>Navigation</span>
        <li className={nav.app__nav_element}>
          <NavLink to="/profile/" activeClassName={nav.active}>
            <FontAwesomeIcon icon={faHouseUser} />
            <span>Profile</span>
          </NavLink>
        </li>
        <li className={nav.app__nav_element}>
          <NavLink to="/users/" activeClassName={nav.active}>
          <FontAwesomeIcon icon={faUsers} />
            <span>Users</span>
          </NavLink>
        </li>
        <li className={nav.app__nav_element}>
          <NavLink to="/dialogs/" activeClassName={nav.active}>
            <FontAwesomeIcon icon={faCommentDots} />
            <span>Dialogs</span>
          </NavLink>
        </li>
        <li className={nav.app__nav_element}>
          <NavLink to="/apps/" activeClassName={nav.active}>
            <FontAwesomeIcon icon={faListUl} />
            <span>Apps</span>
          </NavLink>
        </li>
        <li className={nav.app__nav_element}>
          <NavLink to="/settings/" activeClassName={nav.active}>
          <FontAwesomeIcon icon={faSlidersH} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      {props.isAuthoriserd && localStorage.getItem('weatherCity') && props.weather && (
        <div className={nav.friendsWrapper} onDoubleClick={()=>{changeCatMode('block')}}>
          <p className={nav.friendsHeader}>Weather</p>
          <Weather
            city={props.weather.request[0].query}
            temp_c={props.weather.current_condition[0].temp_C}
            icon_w={props.weather.weather[0].hourly[0].weatherIconUrl[0].value}
            icon_alt={props.weather.weather[0].hourly[0].weatherDesc[0].value}
          />
        </div>
      )}
      <div className={nav.catGif}>
        <img src={cat} alt="" onDoubleClick={()=>{changeCatMode('none')}} style={{display: catMode}}/>
      </div>
    </nav>
  );
};

let mapStateToProps = state => ({
  weather: state.weather.weatherData,
  isAuthoriserd: state.authData.isAuthoriserd
});

export default connect(mapStateToProps, {})(NavBar);
