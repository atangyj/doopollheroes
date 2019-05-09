import React from "react";
import NameInput from "../components/nameInput/nameInput";

const landingView = props => (
  <div className="container-outer">
    <div className="container-center sector-md">
      <h1>Create Your Own Hero</h1>
      <NameInput
        handleInput={props.handleInput}
        setHeroStatus={props.setHeroStatus}
        heroName={props.heroName}
      />
    </div>
  </div>
);

export default landingView;
