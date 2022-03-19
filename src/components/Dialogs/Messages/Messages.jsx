import React from "react";
import mess from "./Messages.module.css";

const Messages = props => {
  return <div className={mess.message}>{props.message}</div>;
};

export default Messages;
