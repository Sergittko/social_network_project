import React from "react";
import style from "./Game.module.css";
import chest from "../../../img/treasure_сhest.png";
import map from "../../../img/treasure_map.jpg";

let width = null;
let height = null;
let getRandomNum = function(maxSize) {
  return Math.floor(Math.random() * maxSize);
};
let target = {
  a: getRandomNum(width),
  b: getRandomNum(height)
};

let getMapCoordinates = e => {
  width = e.nativeEvent.path[0].clientWidth;
  height = e.nativeEvent.path[0].clientHeight;
}

let Game = props => {
  let [count, changeCount] = React.useState(0);
  let [distanceText, changeDistanceText] = React.useState(
    "Tap on map to start a GAME"
  );
  let maxTargetSize = 20;
  let [displayChest, changeChestDisplay] = React.useState(false);
  let chestStyle = {
    top: target.b - 15 + "px",
    left: target.a - 15 + "px",
    display: `${displayChest ? "block" : "none"}`
  };
  let getDistanceToTarget = function(event, target) {
    let onX = event.nativeEvent.offsetX - target.a;
    let onY = event.nativeEvent.offsetY - target.b;
    return Math.sqrt(onX * onX + onY * onY);
  };
  function getHint(distance) {
    if (distance < 12) {
      return "less than 15px";
    } else if (distance < 30) {
      return "less than 30px";
    } else if (distance < 60) {
      return "less than 60px";
    } else if (distance < 100) {
      return "less than 100px";
    } else if (distance < 150) {
      return "less than 150px";
    } else if (distance < 300) {
      return "less than 300px";
    } else {
      return "less than 600px";
    }
  }

  let gameFunction = event => {
    if (count === -1) {
      changeDistanceText("Tap on map to start a GAME");
      changeCount(0);
      return;
    }
    if (count === 0) {
      changeChestDisplay(false);
      target.a = getRandomNum(width);
      target.b = getRandomNum(height);
    }

    changeCount(++count);
    let distanceToTarget = getDistanceToTarget(event, target);
    changeDistanceText(`${getHint(distanceToTarget)} |   | ${20 - count} clicks left`);

    if (count === 20) {
      changeChestDisplay(true);
      changeDistanceText(`Treasure is not found. ${count} clicks are made.`);
      changeCount(-1);
      return;
    }
    if (distanceToTarget <= maxTargetSize) {
      changeChestDisplay(true);
      changeDistanceText(`U win. ${count} clicks are made.`);
      changeCount(-1);
      return;
    }
  };
  return (
    <div className={style.find_treasure}>
      <div className={style.map}>
        <p className={style.distance}>{distanceText}</p>
        <div className={style.frame}>
          <img className={style.map} onClick={(event)=>{getMapCoordinates(event); gameFunction(event)}} src={map} alt="" />
          <div className={style.chest} style={chestStyle}>
            <img src={chest} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
