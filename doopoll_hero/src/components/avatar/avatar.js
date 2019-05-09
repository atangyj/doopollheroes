import React from "react";

const avatar = ({ size = "100%", isShowed, selectAnimal, imgSrc }) => {
  const style = {
    width: size,
    height: "auto",
    filter: isShowed ? "brightness(100%)" : "brightness(0%)"
  };
  return <img src={imgSrc} onClick={selectAnimal} style={style} />;
};

export default avatar;
