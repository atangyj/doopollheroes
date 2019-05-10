import React from "react";

const avatar = ({
  size = "100%",
  padding = "0",
  isShowed = true,
  selectAnimal,
  imgSrc
}) => {
  const style = {
    width: size,
    height: "auto",
    padding: padding,
    filter: isShowed ? "brightness(100%)" : "brightness(0%)"
  };
  return <img src={imgSrc} onClick={selectAnimal} style={style} />;
};

export default avatar;
