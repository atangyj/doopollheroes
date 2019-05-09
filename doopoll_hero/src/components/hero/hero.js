import React, { Component } from "react";
import "./hero.scss";
import Avatar from "../avatar/avatar";
import Avatars from "../avatar/avatars";
import Mask from "../mask/mask";
import ColourOptions from "../colourOptions/colourOptions";
import NameInput from "../nameInput/nameInput";
import image from "../../assets/skill/batman.png";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets/masks/", false, /\.(png|jpe?g|svg)$/)
);

const ANIMALS = importAll(
  require.context("../../assets/animals/", false, /\.(png|jpe?g|svg)$/)
);

const COLOURS = ["#FFEBE9", "#021C4B", "#FED746"];

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroStatus: {
        nameIsSet: false,
        animalIsSet: false,
        roleIsSet: false
      },
      heroName: "",
      animalSelected: false,
      maskIndex: null,
      animalShowed: [false, false, false],
      pet: null,
      colour: null,
      animateIt: false
    };
    this.setName = this.setName.bind(this);
    this.click = this.click.bind(this);
    this.selectColour = this.selectColour.bind(this);
    this.selectAnimal = this.selectAnimal.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  setName() {
    if (this.state.heroName !== null) {
      let heroStatus = { ...this.state.heroStatus };
      heroStatus.nameIsSet = true;
      this.setState({ heroStatus });
    }
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

  selectAnimal(index) {
    let newAnimalArr = Array(this.state.animalShowed.length).fill(false);
    newAnimalArr.splice(index, 1, true);
    this.setState({ animalShowed: newAnimalArr });
  }

  handleInput(e) {
    this.setState({ heroName: e.target.value });
  }

  render() {
    const { heroName, heroStatus } = this.state;

    return (
      <div>
        {!heroStatus.nameIsSet && (
          <div className="view-set-name">
            <div className="container-inner sector-md">
              <h1>Create Your Own Hero</h1>
              <NameInput
                handleInput={this.handleInput}
                handleKeyPress={this.handleKeyPress}
                setName={this.setName}
                heroName={heroName}
              />
            </div>
          </div>
        )}

        {
          <div className="view-set-animal">
            <div className="container-inner sector-lg">
              <h1>Select Your Hero Animal</h1>
              <Avatars
                isShowed={this.state.animalShowed}
                isSelected={this.state.animalSelected}
                selectAnimal={this.selectAnimal}
              />
            </div>

            <div>
              <Mask mask={images[this.state.maskIndex]} />
            </div>
          </div>
        }

        {
          //   <span onClick={() => this.click(-1)}>previous</span>
          // <span onClick={() => this.click(1)}>next</span>
          // <ColourOptions colours={COLOURS} selectColour={this.selectColour} />
          // <button onClick={() => this.setState({ animateIt: true })}>
          //   show power
          // </button>
          // <button onClick={() => this.setState({ animalSelected: true })}>
          //   confirm
          // </button>
        }

        {
          // <img
          //   src={image}
          //   className="skill"
          //   style={{
          //     animationPlayState: this.state.animateIt ? "running" : "paused"
          //   }}
          // />
        }
      </div>
    );
  }
}

export default Hero;
