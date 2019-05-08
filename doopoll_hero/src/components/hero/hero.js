import React, { Component } from "react";
import Avatar from "../avatar/avatar";
import Mask from "../mask/mask";
import ColourOptions from "../colourOptions/colourOptions";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets/masks/", false, /\.(png|jpe?g|svg)$/)
);

const COLOURS = ["#FFEBE9", "#021C4B", "#FED746"];

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maskIndex: null,
      pet: null,
      colour: null
    };
    this.click = this.click.bind(this);
    this.selectColour = this.selectColour.bind(this);
  }

  click(count) {
    let newMaskIndex = (this.state.maskIndex || 0) + count;
    newMaskIndex =
      newMaskIndex < 0 ? images.length - 1 : newMaskIndex % images.length;
    this.setState({ maskIndex: newMaskIndex });
  }

  selectColour(colour) {
    this.setState({ colour: colour });
  }

  render() {
    const style = {
      position: "relative",
      width: "80%",
      backgroundColor: this.state.colour
    };
    console.log(images);

    return (
      <div>
        <div style={style}>
          <Avatar />
          <Mask mask={images[this.state.maskIndex]} />
        </div>
        <span onClick={() => this.click(-1)}>previous</span>
        <span onClick={() => this.click(1)}>next</span>
        <ColourOptions colours={COLOURS} selectColour={this.selectColour} />
      </div>
    );
  }
}

export default Hero;
