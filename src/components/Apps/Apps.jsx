import React, { useState } from "react";
import WeatherContainer from "./Wearher/WeatherContainer";
import Game from "./Game/Game";
import ToDoList from "./ToDoList/ToDoList";
import style from "./Apps.module.css";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import { connect } from "react-redux";

let Apps = React.memo(props => {
  let [appName, changeApp] = useState("toDoList");
  // default localStorage.setItem('Apps_Tabs', 'appName');
  let renderApps = () => {
    switch (appName) {
      case "weather":
        return <WeatherContainer />;
      case "game":
        return <Game />;
      case "toDoList":
        return <ToDoList />;
      default:
        return <div className={style.defaultTab}> Choose the tab </div>;
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

        <button
          className={appName === "toDoList" ? style.button_active : ""}
          onClick={() => changeApp("toDoList")}
        >
          ToDoList
        </button>
      </div>
      <div className={style.component_container}>{renderApps()}</div>
    </div>
  );
});

Apps = withAuthRedirect(Apps);

export default Apps;
