import React from "react";

const COLOURS = ["#FFEBE9", "#021C4B", "#FED746"];

const colourOptions = props => {
  const colours = props.colours.map(colour => (
    <li
      style={{ backgroundColor: colour }}
      onClick={() => props.selectColour(colour)}
    />
  ));
  return colours;
};

export default colourOptions;
