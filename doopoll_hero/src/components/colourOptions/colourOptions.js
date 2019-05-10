import React from "react";

const colourOptions = props => {
  const colours = props.colours.map((colour, i) => {
    const style = {
      backgroundColor: colour,
      width: "3rem",
      height: "3rem",
      borderRadius: "3rem",
      border: "5px solid #fff",
      display: "block",
      margin: ".8rem"
    };
    return (
      <li key={i} style={style} onClick={() => props.selectColour(colour)} />
    );
  });
  return colours;
};

export default colourOptions;
