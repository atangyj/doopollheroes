import React from "react";

const COLOURS = ["#FFEBE9", "#021C4B", "#FED746"];

const colourOptions = props => {
  const colours = props.colours.map((colour, i) => {
    const style = {
      backgroundColor: colour,
      width: "3rem",
      height: "3rem",
      borderRadius: "3rem",
      border: "5px solid #fff",
      display: "inline-block",
      margin: ".5rem"
    };
    return (
      <li key={i} style={style} onClick={() => props.selectColour(colour)} />
    );
  });
  return colours;
};

export default colourOptions;
