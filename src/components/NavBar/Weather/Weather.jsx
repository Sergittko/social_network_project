import React from "react";
import style from "./Weather.module.css";

const UsersList = props => {
  return (
    <div className={style.weather_container}>
      <p className={style.cityName}>{props.city}</p>
      <div className={style.weatherInformation}>
        <img src={props.icon_w} alt={props.icon_alt} />
        <p>{props.temp_c}°C</p>
      </div>
    </div>
  );
};

export default UsersList;
