import React from "react";

let Preloader = props => {
  return (
    <div style={{margin: "50px auto"}}>
      <img
        src={props.preloaderGif}
        alt="preloader"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Preloader;
