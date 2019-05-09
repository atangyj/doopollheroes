import React from "react";

const nameInput = ({ heroName, handleInput, setHeroStatus }) => {
  return (
    <div className="container-input">
      <input
        type="text"
        placeholder="input name of your hero"
        value={heroName}
        onChange={handleInput}
        onKeyPress={e => {
          if (e.charCode == 13) setHeroStatus("name");
        }}
        autoFocus
      />
      <span
        className="btn-arrow"
        onClick={() => setHeroStatus("name")}
        style={{ color: heroName ? "#cddffe" : "#044ac3" }}
      >
        &#8594;
      </span>
    </div>
  );
};

export default nameInput;
