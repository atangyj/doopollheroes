import React from "react";
import Avatar from "../components/avatars/avatar";
import Mask from "../components/mask/mask";
import ColourOptions from "../components/colourOptions/colourOptions";
import Badge from "../components/badge/badge";

const selectColourView = props => (
  <div className="view-set-role">
    <div className="container-inner">
      <h1>
        {props.isCreated ? "A Hero Is Born!" : "Select Your Lucky Colour"}
      </h1>
      <div className="container-mask sector-sm container-animals">
        <Avatar
          isShowed={true}
          selectAnimal={props.selectAnimal}
          imgSrc={props.imgSrc}
        />
        <Mask mask={props.mask} />
        {!props.isCreated && (
          <ColourOptions
            colours={props.colours}
            selectColour={props.selectColour}
          />
        )}

        {props.isCreated ? (
          <button>{props.heroName}</button>
        ) : (
          <button onClick={props.createHero}>Generate Hero</button>
        )}
      </div>
    </div>
  </div>
);

export default selectColourView;
