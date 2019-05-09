import React from "react";
import Avatar from "./avatar";

function importAll(r) {
  return r.keys().map(r);
}

const ANIMALS = importAll(
  require.context("../../assets/animals/", false, /\.(png|jpe?g|svg)$/)
);

const avatars = ({ isShowed, selectAnimal }) => {
  const animalList = ANIMALS.map((animal, i) => {
    const style = {
      width: "30%",
      padding: "0 2rem",
      height: "auto",
      filter: isShowed[i] ? "brightness(100%)" : "brightness(0%)"
    };
    return (
      <img key={i} src={animal} onClick={() => selectAnimal(i)} style={style} />
    );
  });
  return animalList;
};

export default avatars;
