import React from "react";

const mask = props => {
  const style = {
    position: "absolute",
    left: "50%",
    top: "-6%",
    transform: "translateX(-50%)"
  };
  return <img src={props.mask} style={style} />;
};

export default mask;
