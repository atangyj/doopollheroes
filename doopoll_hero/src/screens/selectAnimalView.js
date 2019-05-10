import React from "react";
import Avatars from "../components/avatars/avatars";

const selectAnimalView = props => (
  <div className="container-outer">
    <div className="container-center sector-lg">
      <h1>Select Your Hero Animal</h1>
      <Avatars isShowed={props.isShowed} selectAnimal={props.selectAnimal} />
      <button onClick={() => props.setHeroStatus("animal")}>Confirm</button>
    </div>
  </div>
);

export default selectAnimalView;
