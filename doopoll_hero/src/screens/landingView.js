import React from "react";
import NameInput from "../components/nameInput/nameInput";

const landingView = props => (
  <div className="view-set-name">
    <div className="container-inner sector-md">
      <h1>Create Your Own Hero</h1>
      <NameInput
        handleInput={props.handleInput}
        setName={props.setHeroStatus}
        heroName={props.heroName}
      />
    </div>
  </div>
);

export default landingView;
