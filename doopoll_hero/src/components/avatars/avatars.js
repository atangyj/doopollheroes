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
    return (
      <Avatar
        size="30%"
        padding="0 2rem"
        imgSrc={animal}
        isShowed={isShowed[i]}
        selectAnimal={() => selectAnimal(i)}
      />
    );
  });
  return animalList;
};

export default avatars;
