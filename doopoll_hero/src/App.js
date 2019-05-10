import React, { Component } from "react";
import "./App.scss";
import LandingView from "./screens/landingView";
import SelectAnimalView from "./screens/selectAnimalView";
import SelectRoleView from "./screens/selectRoleView";
import SelectColourView from "./screens/selectColourView";
import { MASKS, ANIMALS, COLOURS } from "./data/heroData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreated: false,
      heroStatus: {
        name: false,
        animal: false,
        role: false,
        colour: false
      },
      heroValue: {
        name: "",
        animal: "",
        role: "",
        colour: ""
      },
      animalIndex: [false, false, false]
    };
    this.setHeroStatus = this.setHeroStatus.bind(this);
    this.selectRole = this.selectRole.bind(this);
    this.selectColour = this.selectColour.bind(this);
    this.selectAnimal = this.selectAnimal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.createHero = this.createHero.bind(this);
  }

  setHeroStatus(statusType) {
    let heroValue = this.state.heroValue[statusType];

    if (heroValue !== "") {
      let heroStatus = { ...this.state.heroStatus };
      heroStatus[statusType] = true;
      this.setState({ heroStatus });
    }
  }

  handleInput(e) {
    let heroValue = { ...this.state.heroValue };
    heroValue.name = e.target.value;
    this.setState({ heroValue });
  }

  selectAnimal(index) {
    let heroValue = { ...this.state.heroValue };
    let newAnimalArr = Array(this.state.animalIndex.length).fill(false);
    newAnimalArr.splice(index, 1, true);
    heroValue.animal = index;
    this.setState({ animalIndex: newAnimalArr, heroValue });
  }

  selectRole(count) {
    let heroValue = { ...this.state.heroValue };
    let newRoleValue = (this.state.heroValue.role || 0) + count;
    newRoleValue =
      newRoleValue < 0 ? MASKS.length - 1 : newRoleValue % MASKS.length;
    heroValue.role = newRoleValue;
    this.setState({ heroValue });
  }

  selectColour(colour) {
    let heroValue = { ...this.state.heroValue };
    heroValue.colour = colour;
    this.setState({ heroValue }, () => this.setHeroStatus("colour"));
  }

  createHero() {
    this.setState({ isCreated: true });
  }

  render() {
    const { heroStatus, heroValue } = this.state;

    return (
      <div style={{ backgroundColor: heroValue.colour }}>
        {!heroStatus.name && (
          <LandingView
            heroName={heroValue.name}
            handleInput={this.handleInput}
            setHeroStatus={this.setHeroStatus}
          />
        )}

        {heroStatus.name && !heroStatus.animal && (
          <SelectAnimalView
            isShowed={this.state.animalIndex}
            selectAnimal={this.selectAnimal}
            setHeroStatus={this.setHeroStatus}
          />
        )}

        {heroStatus.animal && !heroStatus.role && (
          <SelectRoleView
            imgSrc={ANIMALS[heroValue.animal]}
            mask={MASKS[heroValue.role]}
            selectRole={this.selectRole}
            setHeroStatus={this.setHeroStatus}
          />
        )}

        {heroValue.role && (
          <SelectColourView
            colours={COLOURS}
            heroName={heroValue.name}
            imgSrc={ANIMALS[heroValue.animal]}
            mask={MASKS[heroValue.role]}
            selectRole={this.selectRole}
            selectColour={this.selectColour}
            setHeroStatus={this.setHeroStatus}
            isCreated={this.state.isCreated}
            createHero={this.createHero}
          />
        )}
      </div>
    );
  }
}

export default App;
