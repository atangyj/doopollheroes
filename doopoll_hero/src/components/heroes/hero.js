import React from "react";

const hero = ({
  name = "alice",
  gender = "female",
  fav_activity = "walking dog",
  fav_animal = "mammals",
  ...props
}) => {
  return (
    <div>
      <h6>{name}</h6>
      <h6>{gender}</h6>
      <h6>{fav_activity}</h6>
      <h6>{fav_animal}</h6>
    </div>
  );
};

export default hero;
