import React, { useState } from "react";
import WeatherContainer from "./Wearher/WeatherContainer";
import Game from "./Game/Game";
import style from "./Apps.module.css";
// import { connect } from "react-redux";

let Apps = props => {
  let [appName, changeApp] = useState("weather");
  let renderApps = () => {
    switch (appName) {
      case "weather":
        return <WeatherContainer />;
      case "game":
        return <Game />;
      default:
        return;
    }
  };

  return (
    <div className={style.apps_container}>
      <h1>Apps</h1>
      <div className={style.button_container}>
        <button
          className={appName === "weather" ? style.button_active : ""}
          onClick={() => changeApp("weather")}
        >
          Weather APP
        </button>
        <button
          className={appName === "game" ? style.button_active : ""}
          onClick={() => changeApp("game")}
        >
          'Find treasures' GAME
        </button>
      </div>
      <div className={style.component_container}>{renderApps()}</div>
    </div>
  );
};

export default Apps;
