import React from "react";
import Avatars from "../components/avatars/avatars";

const selectAnimalView = props => (
  <div className="view-set-animal">
    <div className="container-inner sector-lg">
      <h1>Select Your Hero Animal</h1>
      <div className="container-animals">
        <Avatars isShowed={props.isShowed} selectAnimal={props.selectAnimal} />
      </div>
      <button onClick={() => props.setHeroStatus("animal")}>confirm</button>
    </div>
  </div>
);

export default selectAnimalView;
