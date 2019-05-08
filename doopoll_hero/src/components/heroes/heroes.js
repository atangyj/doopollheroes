import React from "react";
import Hero from "./hero";
import data from "./data";

const heroes = props => {
  return (
    <div>
      {data.map(hero => (
        <Hero
          name={hero.name}
          gender={hero.gender}
          fav_activity={hero.fav_activity}
          fav_animal={hero.fav_animal}
        />
      ))}
    </div>
  );
};

export default heroes;
