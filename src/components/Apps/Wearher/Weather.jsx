import React from "react";
import style from "./Weather.module.css";
import WeatherSearch from "./WeatherSearch/WeatherSearch";
// import img from "../../img/../img/preloader.gif";

const Weather = React.memo(props => {
  return (
    <div className={style.main}>
      <div className={style.weather_section}>
        <div className={style.wrapper_div}>
          <div className={style.first_window}>
            <span className={style.temp_c}>{props.temp_c}°C</span>
            <img
              src={props.icon_w}
              alt={props.icon_alt}
              className={style.icon}
            />
            <span className={style.city}>{props.city}</span>
          </div>
          <div className={style.second_window}>
            <div className={style.span_top}>
              <span id="sunrise">Sunrise - {props.sunrise}</span>
              <span id="sunset">Sunset - {props.sunset}</span>
            </div>
            <div className={style.span_bottom}>
              <span className={style.obs_time}>{props.obs_time}</span>
              {/*<span className={style.loading_time_span}>(loading time)</span>*/}
              <span id="date">{props.date}</span>
            </div>
          </div>
        </div>
        <WeatherSearch/>
      </div>
    </div>
  );
});

export default Weather;
