import React from "react";

const badge = props => {
  const style = {
    width: "100%",
    height: "auto",
    paddingTop: "100%",
    borderRadius: "50%",
    backgroundColor: "#000",
    position: "absolute",
    top: "0",
    zIndex: "-1"
  };
  return <div style={style} />;
};

export default badge;
