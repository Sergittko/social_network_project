import React from "react";
import mess from "./UserMessages.module.css";

const UserMessages = props => {
  return <div className={mess.message}>{props.message}</div>;
};

export default UserMessages;
