import React from "react";
import users from "./UsersList.module.css";
import { NavLink } from "react-router-dom";

const UsersList = props => {
  return (
    <div className={users.item} data-id="usersList">
      <NavLink
        to={`/dialogs/${props.id}`}
        activeClassName={users.active}
        className={users.navWrapper}
        onClick={activeChat}
      >
        <img src={props.imgSrc} className={users.userImg} alt="" />
        {props.name}
      </NavLink>
    </div>
  );
};

window.onload = () => {
  let dataId = document.querySelectorAll('[data-id="usersList"]');
  dataId.forEach(item => {
    item.style.backgroundColor = "";
    if (item.querySelector('a[class*="active"]')) {
      item.closest("[data-id]").style.backgroundColor = "#ff9481";
    }
  });
};

function activeChat() {
  let dataId = document.querySelectorAll('[data-id="usersList"]');
  dataId.forEach(item => {
    item.style.backgroundColor = "";
  });

  document.addEventListener("click", event => {
    if (event.target.closest("[data-id]")) {
      event.target.closest("[data-id]").style.backgroundColor = "#ff9481";
    }
  });
}

export default UsersList;
