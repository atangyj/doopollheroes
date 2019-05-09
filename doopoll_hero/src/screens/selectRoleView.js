import React from "react";
import Avatar from "../components/avatars/avatar";
import Mask from "../components/mask/mask";
import ColourOptions from "../components/colourOptions/colourOptions";

const selectRoleView = props => (
  <div className="container-outer">
    <div className="container-center">
      <h1>Select The Hero You Want To Play</h1>
      <div className="container-mask sector-sm">
        <Avatar
          isShowed={true}
          selectAnimal={props.selectAnimal}
          imgSrc={props.imgSrc}
        />
        <Mask mask={props.mask} />
        <span className="btn-pre" onClick={() => props.selectRole(-1)}>
          &larr;
        </span>
        <span className="btn-next" onClick={() => props.selectRole(1)}>
          &rarr;
        </span>
      </div>
      <button onClick={() => props.setHeroStatus("role")}>Confirm</button>
    </div>
  </div>
);

export default selectRoleView;
