import React from "react";
import image from "../../assets/hero_02.png";

const avatar = props => {
  const style = {
    width: "100%",
    height: "auto"
  };
  return <img src={image} style={style} />;
};

export default avatar;
