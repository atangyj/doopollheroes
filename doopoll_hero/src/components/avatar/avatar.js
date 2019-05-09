import React from "react";
import image from "../../assets/hero_02.png";

const avatar = ({
  size = "50px",
  isShowed,
  selectAnimal,
  image,
  isSelected
}) => {
  const style = {
    width: size,
    height: "auto",
    filter: isShowed ? "brightness(100%)" : "brightness(0%)",
    display: !isShowed && isSelected ? "none" : "inline-block"
  };
  return <img src={image} onClick={selectAnimal} style={style} />;
};

export default avatar;
