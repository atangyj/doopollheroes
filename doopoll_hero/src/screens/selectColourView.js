import React from "react";
import Avatar from "../components/avatars/avatar";
import Mask from "../components/mask/mask";
import ColourOptions from "../components/colourOptions/colourOptions";
import Badge from "../components/badge/badge";

const selectColourView = props => (
  <div className="container-outer">
    <div className="container-center">
      <h1>
        {props.isCreated ? "A Hero Is Born!" : "Select Your Lucky Colour"}
      </h1>
      <div className="container-mask sector-sm">
        <Avatar
          isShowed={true}
          selectAnimal={props.selectAnimal}
          imgSrc={props.imgSrc}
        />
        <Mask mask={props.mask} />

        {!props.isCreated && (
          <div className="container-colour">
            <ColourOptions
              colours={props.colours}
              selectColour={props.selectColour}
            />
          </div>
        )}
      </div>
      {props.isCreated ? (
        <h2 className="label-hero-name">{props.heroName}</h2>
      ) : (
        <button onClick={props.createHero}>Generate Hero</button>
      )}
    </div>
  </div>
);

export default selectColourView;
